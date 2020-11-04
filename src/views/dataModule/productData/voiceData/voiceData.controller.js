import DataModuleHeader from "../../../../components/header/dataModuleHeader.vue";
import moment from "moment"
import { Toast } from 'vant';
// let echarts = require('echarts/lib/echarts')
const F2 = require('@antv/f2');
import $ from 'jquery'

export default {
    data: function() {
        return {
            headertitle: "数据监控-语音通知",
            sublevel: true,
            todaySum: '',
            employ: {
                Time1: {
                    value: "2020-05-11",
                    minDate: new Date(2010, 1, 1),
                    maxDate: new Date(2120, 10, 1),
                    currentDate: new Date(),
                    showPicker: false,
                },
                Time2: {
                    value: "2020-05-11",
                    minDate: new Date(2010, 1, 1),
                    maxDate: new Date(2120, 10, 1),
                    currentDate: new Date(),
                    showPicker: false,
                },
            },
            account: {
                value: '',
                show: false,
                n: '',
                index: 0,
                list: [{
                    task_name: '全部账号',
                    id: ''
                }]
            },
            tablefilter: {
                value: '移动',
                show: false,
            },
            tablefilter1: {
                value: '成功(条)',
                show: false,
                n: 0,
                list: [{
                        name: '成功(条)',
                        value: 0
                    },
                    {
                        name: '未接通(条)',
                        value: 1
                    },
                    {
                        name: '未应答(条)',
                        value: 2
                    },
                    {
                        name: '异常(条)',
                        value: 3
                    }
                ]
            },
            rem: 1,
            sum: 0,
            ationlineChart1: false,
            ationlineChart2: true,
            ationlineChart3: true,
            loading: false,
            finished: false,
            employList: [],
            employListPage: 1,
            employListTotalPage: 0,
            employLoad: {
                loading: false,
                finished: false,
            },
            optionValue1: 0,
            option1: [
                { text: '移动', value: 0 },
                { text: '电信', value: 1 },
                { text: '联通', value: 2 },
            ],
            lineChart: [],
            uptime: ''
        };
    },
    components: {
        DataModuleHeader
    },
    watch: {

    },
    mounted() {
        // 获取当前年月日
        let nowDate = new Date();

        this.uptime = moment(nowDate).format('MM-DD 00:00')
        this.employ.Time1.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.employ.Time2.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
            // this.employ.Time1.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 7)
            // this.employ.Time2.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 1)
        let nowDate1 = nowDate.getTime() - 24 * 60 * 60 * 1000
        let nowDate2 = nowDate.getTime() - 7 * 24 * 60 * 60 * 1000
        this.employ.Time2.value = moment(nowDate1).format('YYYY-MM-DD')
        this.employ.Time1.value = moment(nowDate2).format('YYYY-MM-DD')
        this.employ.Time2.currentDate = new Date(nowDate1)
        this.employ.Time1.currentDate = new Date(nowDate2)
        this.getTopdata()
            .then((res) => {
                console.log(res)
                this.todaySum = res.data.count
            })
        this.getTask()
            .then((res) => {
                console.log(res)
                this.account.list = this.account.list.concat(res.data)
            })
        this.getLineData(this.employ.Time1.value, this.employ.Time2.value, '', )
            .then((res) => {
                this.lineChart = res.data
                this.sum = res.count
                this.$nextTick(function() {
                    this.drawPieline()
                })
            })
        this.getlist(this.employ.Time1.value, this.employ.Time2.value, '', 1)
            .then((res) => {
                console.log(res)
                this.employList = res.data.list
            })
        let that = this
        console.log("rem", that.rem)
        window.onresize = () => {
            return (() => {
                that.rem = document.documentElement.clientWidth / 375
                console.log("rem", that.rem)
                that.$nextTick(function() {
                    that.drawPieline()
                })
            })()
        }
    },
    methods: {
        getlist(start, end, taskId, page) {
            return new Promise((resolve, reject) => {
                let data = {
                    "startDate": start,
                    "endDate": end,
                    "taskId": taskId,
                    "page": page
                }

                this.$post('/apiDataOverview.html?f=getVoiceData', data)
                    .then((response) => {
                        console.log(response)
                        this.employListTotalPage = response.data.totalPage
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        updateChart() {
            this.getLineData(this.employ.Time1.value, this.employ.Time2.value, this.account.n)
                .then((res) => {
                    this.lineChart = res.data
                    this.sum = res.count
                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })

            this.getlist(this.employ.Time1.value, this.employ.Time2.value, this.account.n, 1)
                .then((res) => {
                    console.log(res)
                    this.employList = res.data.list
                    this.employListPage = 1
                    this.employLoad.finished = false;
                    this.employLoad.loading = true;
                    this.onLoad();
                })
        },
        accountAction(src, n, index) {
            console.log(src)
            console.log(n)
            this.account.n = n
            console.log("index", index)
            this.account.index = index
        },
        tablefilter1Action(src, n) {
            console.log(src)
            console.log(n)
            this.tablefilter1.n = n
        },
        getLineData(start, end, taskId) {
            return new Promise((resolve, reject) => {
                let data = {
                    "startDate": start,
                    "endDate": end,
                    "taskId": taskId,
                }
                this.$post('/apiDataOverview.html?f=getVoiceGraph', data)
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getTask() {
            return new Promise((resolve, reject) => {
                this.$post('/apiDataOverview.html?f=getVoiceTask')
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getTopdata() {
            return new Promise((resolve, reject) => {
                this.$post('/apiDataOverview.html?f=getVoiceToday')
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        lineChartTime(id) {
            console.log(id)
            if (id == 1) {
                this.ationlineChart1 = false
            } else {
                this.ationlineChart1 = true
            }
            if (id == 2) {
                this.ationlineChart2 = false
            } else {
                this.ationlineChart2 = true
            }
            if (id == 3) {
                this.ationlineChart3 = false
            } else {
                this.ationlineChart3 = true
            }
        },
        drawPieline() {
            // 折线图
            let this_ = this;
            this_.rem = document.documentElement.clientWidth / 375
            const data = this.lineChart
                // [{
                //     date: '2017-06-05',
                //     city: '通话量',
                //     value: 3000
                // }, {
                //     date: '2017-06-06',
                //     city: '通话量',
                //     value: 3500
                // }, {
                //     date: '2017-06-07',
                //     city: '通话量',
                //     value: 3200
                // }, {
                //     date: '2017-06-08',
                //     city: '通话量',
                //     value: 3700
                // }, {
                //     date: '2017-06-09',
                //     city: '通话量',
                //     value: 3900
                // }, {
                //     date: '2017-06-10',
                //     city: '通话量',
                //     value: 3500
                // }, {
                //     date: '2017-06-11',
                //     city: '通话量',
                //     value: 4500
                // }];
            let max = ''
            let maxIndex = ''

            function getmaxscore(arrayobj) {
                var maxi = 0;

                for (var i = 0; i < arrayobj.length; i++) {

                    if (arrayobj[maxi].value <= arrayobj[i].value) {
                        maxi = i;
                    }

                }
                return maxi
            }

            maxIndex = getmaxscore(data)
            max = data[maxIndex].value
            let valueNnm = 0
            let valuetickCount = 4
            this.lineChart.map((item => {
                console.log(item.value)
                if (item.value != 0) {
                    valueNnm += 1
                }
            }))
            if (valueNnm != 0) {
                valuetickCount = 5
            }
            $('\n  <div class="f2-tooltip">\n    <span> </span>\n    <span> </span>\n  </div>\n').insertBefore('#lineChart1');
            const canvasOffsetTop = $('#lineChart1').position().top;
            const canvasOffsetLeft = $('#lineChart1').position().left;

            const chart = new F2.Chart({
                id: 'lineChart1',
                pixelRatio: window.devicePixelRatio,
                width: 375 * this_.rem,
                height: 210 * this_.rem,
                padding: ['auto', 22 * this_.rem, 'auto', 'auto'],
                appendPadding: [15 * this_.rem, 0, 0, 15 * this_.rem],
                fontSize: 30,
                plugins: 'Legend'
            });

            chart.source(data, {
                date: {
                    type: 'timeCat',
                    range: [0, 1],
                    tickCount: 3,
                    mask: 'MM-DD'
                },
                value: {
                    tickCount: valuetickCount,
                    // tickInterval: 1500,
                    min: 0,
                    // max: 6000
                }
            });
            chart.legend({
                marker: {
                    symbol: 'circle',
                    radius: 3 * this_.rem
                },
                clickable: false,
                nameStyle: {
                    textAlign: 'start', // 文本对齐方向，可取值为： start middle end
                    fill: '#787878', // 文本的颜色
                    fontSize: 12 * this_.rem, // 文本大小
                    fontWeight: '500', // 文本粗细
                    textBaseline: 'middle',
                    height: 16 * this_.rem // 文本基准线，可取 top middle bottom，默认为middle
                },
            });
            chart.tooltip({
                custom: true,
                showCrosshairs: false,
                onChange: function onChange(ev) {
                    const tooltipEl = $('.f2-tooltip');
                    const currentData = ev.items[0];
                    const text = currentData.value;
                    tooltipEl.html(['<span>' + text + '</span>'].join(''));
                    tooltipEl.css({
                        opacity: 1,
                        left: canvasOffsetLeft + currentData.x - tooltipEl.outerWidth() / 2 + 'px',
                        top: canvasOffsetTop + currentData.y - tooltipEl.outerHeight() - (10 * this_.rem) + 'px'
                    });
                },
                onHide: function onHide() {
                    const tooltipEl = $('.f2-tooltip');
                    tooltipEl.css({
                        opacity: 0
                    });
                }
            });
            chart.axis('date', {
                label: function label(text, index, total) {
                    const textCfg = {
                        fontSize: 12 * this_.rem
                    };
                    if (index === 0) {
                        textCfg.textAlign = 'left';
                    } else if (index === total - 1) {
                        textCfg.textAlign = 'right';
                    }
                    return textCfg;
                }
            });
            chart.axis('value', {
                label: function label() {
                    const textCfg = {
                        fontSize: 12 * this_.rem
                    };
                    return textCfg;
                }
            });
            chart.guide().tag({
                position: [maxIndex, max],
                content: max,
                background: {
                    padding: [4 * this_.rem, 6 * this_.rem, 2 * this_.rem, 6 * this_.rem], // tag 内边距，用法同 css 盒模型的 padding
                    radius: 2 * this_.rem, // tag 圆角
                    fill: '#f92f1a', // tag 背景填充颜色
                },
                side: 5 * this_.rem,
                textStyle: {
                    fontSize: 12 * this_.rem, // 字体大小
                    fill: '#fff', // 字体颜色,
                },
                pointStyle: {
                    fill: '#f9c371',
                    r: 3 * this_.rem
                },
                offsetY: -5 * this_.rem,
                direct: 'tc'
            });
            F2.Global.setTheme({
                colors: [
                    '#f9c371',
                ],
                defaultColor: '#f9c371',

            });
            chart.area()
                .position('date*value')
                .color('title')
                .adjust('stack');
            chart.line()
                .position('date*value')
                .color('title')
                .adjust('stack');
            chart.render();
        },
        onTime(time) {
            this.employ.Time1.value = moment(time).format('YYYY-MM-DD');
            this.employ.Time1.showPicker = false;
            this.employ.Time2.minDate = time
            let t = new Date(this.employ.Time2.value)
            let date3 = t.getTime() - time.getTime()
            let days = Math.floor(date3 / (24 * 3600 * 1000))
            console.log(days)
            if (days > 366) {
                Toast("时间范围不能超出一年");
            } else {
                this.updateChart()
            }
        },
        onTime2(time) {
            this.employ.Time2.value = moment(time).format('YYYY-MM-DD');
            this.employ.Time2.showPicker = false;
            this.employ.Time1.maxDate = time
            let t = new Date(this.employ.Time1.value)
            let date1 = time.getTime() / (24 * 3600 * 1000)
            let date2 = t.getTime() / (24 * 3600 * 1000)
            let date3 = date1 - date2
            console.log(date1)
            console.log(date2)
            let days = date3 + 1
            console.log(days)
            if (days > 366) {
                Toast("时间范围不能超出一年");
            } else if (days <= 0) {
                Toast("时间选择错误");
            } else {
                this.updateChart()
            }
        },
        formatter(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`;
            } else if (type === 'day') {
                return `${val}日`;
            }
            return val;
        },
        formatter2(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`;
            } else if (type === 'day') {
                return `${val}日`;
            }
            return val;
        },
        showPopup(item) {
            if (item == 'account') {
                this.account.show = true;
            }
            if (item == 'content') {
                this.content.show = true;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = true;
            }
            if (item == 'tablefilter1') {
                this.tablefilter1.show = true;
            }
        },
        cancel(item) {
            console.log("cancel")
            if (item == 'account') {
                this.account.show = false;
            }
            if (item == 'content') {
                this.content.show = false;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = false;
            }
            if (item == 'tablefilter1') {
                this.tablefilter1.show = false;
            }
        },
        affirm(item) {
            console.log("affirm")
            if (item == 'account') {
                this.account.show = false;
                if (this.account.list[this.account.index].task_name == "全部账号") {
                    this.account.value == ''
                } else {
                    this.account.value = this.account.list[this.account.index].task_name
                }

                this.updateChart()
            }
            if (item == 'content') {
                this.content.show = false;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = false;
            }
            if (item == 'tablefilter1') {
                this.tablefilter1.show = false;
                this.tablefilter1.value = this.tablefilter1.list[this.tablefilter1.n].name
            }
        },
        onLoad() { //列表
            console.log(this.employListPage)
            if (this.employListPage != 1) {
                if (this.employListPage <= this.employListTotalPage) {
                    this.getlist(this.employ.Time1.value, this.employ.Time2.value, this.account.n, this.employListPage)
                        .then((res) => {
                            let totalPage = res.data.totalPage
                            if (this.employListPage <= totalPage) {
                                this.employList = this.employList.concat(res.data.list)
                                this.employLoad.loading = false;
                            } else {
                                this.employLoad.finished = true;
                            }
                            this.employListPage += 1
                        })
                } else {
                    this.employLoad.finished = true;
                }
            } else {
                this.employLoad.loading = false;
                this.employListPage += 1
            }

        },
    }
};