import DataModuleHeader from "../../components/header/dataModuleHeader.vue";
import { Toast } from 'vant';
import moment from "moment"
import $ from 'jquery'
// let echarts = require('echarts/lib/echarts')
const F2 = require('@antv/f2');

export default {
    data: function() {
        return {
            headertitle: "数据监控-隐私号",
            sublevel: true,
            appKeyList: [{ APP_KEY: "" }],
            employ: {
                Time1: {
                    value: "2020-05-11",
                    minDate: new Date(2010, 1, 1),
                    maxDate: new Date(2120, 10, 1),
                    defaultData: new Date(2010, 12, 1),
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
            allowance: {
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
                n: 0,
                show: false,
            },
            account1: {
                value: '全部',
                show: false,
            },
            tablefilter: {
                value: '接听率',
                n: 0,
                show: false,
                list: [{
                        name: '接听率',
                        value: 0
                    },
                    {
                        name: '费用',
                        value: 1
                    },
                    {
                        name: '计费分钟数',
                        value: 2
                    },

                ]
            },
            consumer: {
                value: '全部消费项',
                n: 0,
                show: false,
                list: [{
                        name: '全部消费项',
                        value: 0
                    },
                    {
                        name: '号码费',
                        value: 1
                    },
                    {
                        name: '通话费',
                        value: 2
                    },
                ]
            },
            calendar: {
                date: '全部时间',
                minDate: new Date(2010, 1, 1),
                maxDate: new Date(2020, 0, 31),
                defaultData: [new Date(2010, 1, 1), new Date(2010, 1, 1)],
                start: '',
                end: '',
                show: false,
            },
            rem: 1,
            sum: 0,
            ationlineChart1: false,
            ationlineChart2: true,
            ationlineChart3: true,
            employLoad: {
                loading: false,
                finished: false,
            },
            allowanceLoad: {
                loading: false,
                finished: false,
            },
            employList: [],
            employListPage: 1,
            employListTotalPage: 0,
            allowanceList: [],
            allowanceListPage: 1,
            allowanceListTotalPage: 0,
            optionValue1: 0,
            option1: [
                { text: '移动', value: 0 },
                { text: '电信', value: 1 },
                { text: '联通', value: 2 },
            ],
            topData: {
                tMoney: '0.00',
                mMoney: '0.00',
            },
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
        console.log("更新登录")
        this.$updateToken(2)
            .then(() => {

            })
            .catch(() => {

            })
        setInterval(() => {
            console.log("更新登录")
            this.$updateToken(2)
                .then(() => {

                })
                .catch(() => {

                })
        }, (4 * 60 * 60 * 1000))


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

        this.allowance.Time1.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.allowance.Time2.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.calendar.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.calendar.defaultData = [new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 7), new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)]

        // document.getElementById('doughnutChart').style.width = "10rem"
        this.getTopData()
            .then((res) => {
                this.topData = res.data
            })
        this.getFilter()
            .then((res1) => {

                this.appKeyList = this.appKeyList.concat(res1.data)
                this.account.value = this.appKeyList[0].APP_KEY

                this.getFirstList(this.account.value, this.employ.Time1.value, this.employ.Time2.value, 1)
                    .then((res) => {
                        this.employList = res.data.list
                    })
                this.getLastList(this.calendar.start, this.calendar.end, 1)
                    .then((res) => {
                        this.allowanceList = res.data.list
                    })
            })
            .catch(() => {

            })

        this.getLineData(this.employ.Time1.value, this.employ.Time2.value, '')
            .then((res) => {
                this.lineChart = res.data
                this.$nextTick(function() {
                    this.drawPieline()
                })
            })


        let that = this
        console.log("rem", that.rem)
        window.onresize = () => {
            return (() => {
                that.rem = document.documentElement.clientWidth / 375
                console.log("rem", that.rem)
                that.$nextTick(function() {
                    that.drawPieline()
                        // that.drawPiedoughnut()
                })
            })()
        }

    },
    methods: {
        getTopData() {
            return new Promise((resolve, reject) => {
                this.$post('/apiDataOverview.html?f=privacyCostMoney')
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getFilter() {
            return new Promise((resolve, reject) => {
                this.$post('/apiDataOverview.html?f=getAppKey')
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getLineData(start, end, key) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "key": key,
                }

                this.$post('/apiDataOverview.html?f=privacyAreaGraph', data)
                    .then((response) => {
                        console.log(response)
                            // this.lineChart = [{
                            //     date: '06-05',
                            //     city: '总呼叫量(条)',
                            //     value: 3000
                            // }, {
                            //     date: '06-06',
                            //     city: '总呼叫量(条)',
                            //     value: 3500
                            // }, {
                            //     date: '06-07',
                            //     city: '总呼叫量(条)',
                            //     value: 3200
                            // }, {
                            //     date: '06-08',
                            //     city: '总呼叫量(条)',
                            //     value: 3700
                            // }, {
                            //     date: '06-09',
                            //     city: '总呼叫量(条)',
                            //     value: 3900
                            // }, {
                            //     date: '06-13',
                            //     city: '总呼叫量(条)',
                            //     value: 3500
                            // }, {
                            //     date: '06-15',
                            //     city: '总呼叫量(条)',
                            //     value: 4500
                            // }]
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getFirstList(key, start, end, page) {
            return new Promise((resolve, reject) => {
                let data = {
                    "key": key,
                    "start": start,
                    "end": end,
                    "page": page
                }

                this.$post('/apiDataOverview.html?f=privacyCallList', data)
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
        getLastList(start, end, page) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "page": page
                }

                this.$post('/apiDataOverview.html?f=privacyCostData', data)
                    .then((response) => {
                        console.log(response)
                        this.allowanceListTotalPage = response.data.totalPage
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        accountAction(src, n) {
            console.log(src)
            console.log(n)
            this.account.n = n
        },
        tablefilterAction(src, n) {
            console.log(src)
            console.log(n)
            this.tablefilter.n = n
        },
        consumerAction(src, n) {
            console.log(src)
            console.log(n)
            this.consumer.n = n
        },
        updateChart() {
            //更新折线图
            this.getLineData(this.employ.Time1.value, this.employ.Time2.value, this.account.value)
                .then((res) => {
                    this.lineChart = res.data
                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })
                //更新列表
            this.getFirstList(this.account.value, this.employ.Time1.value, this.employ.Time2.value, 1)
                .then((res) => {
                    this.employList = res.data.list
                    this.employListPage = 1
                    this.employLoad.finished = false;
                    this.employLoad.loading = true;
                    this.onLoad();
                })
        },
        drawPieline() {
            let this_ = this;
            this_.rem = document.documentElement.clientWidth / 375
            const data = this.lineChart;
            let max = ''
            let maxIndex = ''
                // Math.max.apply(Math, data.map((item, index) => {
                //     max = item.value
                //     maxIndex = index
                //     console.log(max)
                //     console.log(maxIndex)
                //     return item.value
                // }))
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
            // console.log(max1)

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
                .color('city')
                .adjust('stack');
            chart.line()
                .position('date*value')
                .color('city')
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
        onTime3(time) {
            this.allowance.Time1.value = moment(time).format('YYYY-MM-DD');
            this.allowance.Time1.showPicker = false;
            this.allowance.Time2.minDate = time
        },
        onTime4(time) {
            this.allowance.Time2.value = moment(time).format('YYYY-MM-DD');
            this.allowance.Time2.showPicker = false;
            this.allowance.Time1.maxDate = time
        },
        formatDate(date) {
            console.log(date.getFullYear())
            return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
        },
        onConfirm(date) {
            const [start, end] = date;
            this.calendar.show = false;
            this.calendar.start = moment(start).format('YYYY-MM-DD');
            this.calendar.end = moment(end).format('YYYY-MM-DD');
            this.calendar.date = `${this.formatDate(start)} 到 ${this.formatDate(end)}`;
            this.getLastList(this.calendar.start, this.calendar.end, 1)
                .then((res) => {
                    this.allowanceList = res.data.list
                    this.allowanceListPage = 1
                    this.allowanceLoad.finished = false;
                    this.allowanceLoad.loading = true;
                    this.onLoad2();
                })
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
        formatter3(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`;
            } else if (type === 'day') {
                return `${val}日`;
            }
            return val;
        },
        formatter4(type, val) {
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
            console.log("showPopup")
            if (item == 'account') {
                this.account.show = true;
            }
            if (item == 'account1') {
                this.account1.show = true;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = true;
            }
            if (item == 'consumer') {
                this.consumer.show = true;
            }
        },
        cancel(item) {
            console.log("cancel")
            if (item == 'account') {
                this.account.show = false;
            }
            if (item == 'account1') {
                this.account1.show = false;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = false;
            }
            if (item == 'consumer') {
                this.consumer.show = false;
            }
        },
        affirm(item) {
            console.log("affirm")
            if (item == 'account') {
                this.account.show = false;
                this.account.value = this.appKeyList[this.account.n].APP_KEY
                this.updateChart()
            }
            if (item == 'account1') {
                this.account1.show = false;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = false;
                this.tablefilter.value = this.tablefilter.list[this.tablefilter.n].name
            }
            if (item == 'consumer') {
                this.consumer.show = false;
                this.consumer.value = this.consumer.list[this.consumer.n].name
            }
        },
        onLoad() { //列表1

            console.log(this.employListPage)
            if (this.employListPage != 1) {
                if (this.employListPage <= this.employListTotalPage) {
                    this.getFirstList(this.account.value, this.employ.Time1.value, this.employ.Time2.value, this.employListPage)
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
        onLoad2() { //列表2
            //allowanceListPage

            console.log(this.allowanceListPage)
            if (this.allowanceListPage != 1) {
                if (this.allowanceListPage <= this.allowanceListTotalPage) {
                    this.getLastList(this.calendar.start, this.calendar.end, this.allowanceListPage)
                        .then((res) => {
                            let totalPage = res.data.totalPage
                            if (this.allowanceListPage <= totalPage) {
                                this.allowanceList = this.allowanceList.concat(res.data.list)
                                this.allowanceLoad.loading = false;
                            } else {
                                this.allowanceLoad.finished = true;
                            }
                            this.allowanceListPage += 1
                        })
                } else {
                    this.allowanceLoad.finished = true;
                }
            } else {
                this.allowanceLoad.loading = false;
                this.allowanceListPage += 1
            }

        },
    }
};