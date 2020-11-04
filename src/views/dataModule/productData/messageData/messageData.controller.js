import DataModuleHeader from "../../../../components/header/dataModuleHeader.vue";
import moment from "moment"
import { Toast } from 'vant';
import $ from 'jquery'
// let echarts = require('echarts/lib/echarts')
const F2 = require('@antv/f2');
const PieLabel = require('@antv/f2/lib/plugin/pie-label');
F2.Chart.plugins.register(PieLabel);

export default {
    data: function() {
        return {
            headertitle: "",
            sublevel: true,
            eventId: '',
            topData: {
                today: 0,
                residue: 0
            },
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
                show: false,
                n: '',
                index: 0,
                list: [{
                    app_sign: '全部账号',
                    sign_id: ''
                }]
            },
            account1: {
                value: '短信账号1',
                show: false,
            },
            content: {
                value: '',
                show: false,
                n: '',
                index: 0,
                list: [{
                    content: '全部短信内容',
                    template_id: '',
                    sign: ''
                }]
            },
            content1: {
                value: '您好！尊敬的{username}用户，您的短信验证码为{code}，保管好您的验证码{dcxsgfv}',
                show: false,
            },
            tablefilter: {
                value: '全部',
                show: false,
                n: 0,
                list: [{
                    value: 0,
                    name: "全部"
                }, {
                    value: 1,
                    name: "移动"
                }, {
                    value: 2,
                    name: "联通"
                }, {
                    value: 3,
                    name: "电信"
                }]
            },
            tablefilter1: {
                value: '成功率',
                show: false,
                n: 0,
                list: [{
                    value: 0,
                    name: "成功率"
                }, {
                    value: 1,
                    name: "失败率"
                }, {
                    value: 2,
                    name: "未知率"
                }, {
                    value: 3,
                    name: "成功数"
                }, {
                    value: 4,
                    name: "失败数"
                }, {
                    value: 5,
                    name: "未知数"
                }]
            },
            rem: 1,
            sum: 0,
            ationlineChart0: false,
            ationlineChart1: true,
            ationlineChart2: true,
            ationlineChart3: true,
            employList: [],
            employListPage: 1,
            employListTotalPage: 0,
            employLoad: {
                loading: false,
                finished: false,
            },
            allowanceLoad: {
                loading: false,
                finished: false,
            },
            allowanceListPage: 1,
            allowanceListTotalPage: 0,
            allowanceList: [{
                    time: '2020-02-03',
                    name: '新用户免费',
                    status: '有效',
                    num: 3512

                },
                {
                    time: '2020-02-03',
                    name: '通知短信500条500条',
                    status: '有效',
                    num: 3325
                },
                {
                    time: '2020-02-03',
                    name: '通知短信500条',
                    status: '有效',
                    num: 1235
                },
                {
                    time: '2020-02-03',
                    name: '通知短信500条',
                    status: '有效',
                    num: 435
                },
                {
                    time: '2020-02-03',
                    name: '新用户免费',
                    status: '有效',
                    num: 35213
                }
            ],
            optionValue1: 0,
            option1: [
                { text: '全部', value: 0 },
                { text: '移动', value: 1 },
                { text: '电信', value: 2 },
                { text: '联通', value: 3 },
            ],
            messageType: {
                name: '',
                imgUrl: ''
            },
            lineChart: [],
            doughnutChart: [],
            phone_type: '',
            dataShow: true,
            uptime: ''
        };
    },
    components: {
        DataModuleHeader
    },
    watch: {

    },
    mounted() {
        // 判断产品
        // let path = this.$route.path
        // 获取当前年月日
        let nowDate = new Date();
        this.uptime = moment(nowDate).format('MM-DD 00:00')
        this.employ.Time1.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.employ.Time2.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        let nowDate1 = nowDate.getTime() - 24 * 60 * 60 * 1000
        let nowDate2 = nowDate.getTime() - 7 * 24 * 60 * 60 * 1000
        this.employ.Time2.value = moment(nowDate1).format('YYYY-MM-DD')
        this.employ.Time2.currentDate = new Date(nowDate1)
        this.employ.Time1.value = moment(nowDate2).format('YYYY-MM-DD')
        this.employ.Time1.currentDate = new Date(nowDate2)

        this.allowance.Time1.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.allowance.Time2.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
            // this.allowance.Time1.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 7)
            // this.allowance.Time2.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 1)
        this.allowance.Time2.value = moment(nowDate1).format('YYYY-MM-DD')
        this.allowance.Time1.value = moment(nowDate2).format('YYYY-MM-DD')
        this.allowance.Time2.currentDate = new Date(nowDate1)
        this.allowance.Time1.currentDate = new Date(nowDate2)

        let id = this.$route.query.id
        if (id == '1') {
            this.messageType.name = '通知短信'
            this.messageType.imgUrl = require('../../../../assets/images/dataModule/SMS_notification.png')
            this.headertitle = '数据监控-通知短信'
            this.eventId = 3
            this.getTopData(3)
                .then((res) => {
                    console.log(res)

                    this.topData.today = res.data.count
                })
            this.getinfoData(3)
                .then((res) => {
                    console.log(res)
                    this.topData.residue = res.data.count
                    this.account.list = this.account.list.concat(res.data.sign)
                    this.content.list = this.content.list.concat(res.data.template)
                })

            this.getLineData(this.employ.Time1.value, this.employ.Time2.value, 3, this.account.value, this.content.n, this.phone_type)
                .then((res) => {
                    this.lineChart = res.data
                    this.sum = res.count
                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })
            this.getemployList(this.employ.Time1.value, this.employ.Time2.value, 3, this.account.value, this.content.n, this.phone_type, 1)
                .then((res) => {
                    console.log(res)
                    this.employList = res.data.list
                })

            this.getallowanceList(this.allowance.Time1.value, this.allowance.Time2.value, 3, 1)
                .then((res) => {
                    console.log(res)
                    this.allowanceList = res.data.list
                })
            this.getdoughnutData(this.allowance.Time1.value, this.allowance.Time2.value, 3)
                .then((res) => {
                    res.data.map((item) => {
                        item.amount = item.ratio

                    })
                    if (res.data.length == 0) {
                        this.dataShow = false
                    } else {
                        this.dataShow = true
                        this.doughnutChart = res.data
                        if (res.data[0].ratio == 0 && res.data[1].ratio == 0) {
                            this.dataShow = false
                        } else {
                            this.$nextTick(function() {
                                this.drawPiedoughnut()
                            })
                        }
                        console.log(res)
                    }
                })
        }
        if (id == '2') {
            this.messageType.name = '会员推广短信'
            this.messageType.imgUrl = require('../../../../assets/images/dataModule/VIP_SMS.png')
            this.headertitle = '数据监控-会员推广短信'
            this.eventId = 4
            this.getTopData(4)
                .then((res) => {
                    console.log(res)

                    this.topData.today = res.data.count
                })
            this.getinfoData(4)
                .then((res) => {
                    console.log(res)
                    this.topData.residue = res.data.count
                    this.account.list = this.account.list.concat(res.data.sign)
                    this.content.list = this.content.list.concat(res.data.template)
                })

            this.getLineData(this.employ.Time1.value, this.employ.Time2.value, 4, this.account.value, this.content.n, this.phone_type)
                .then((res) => {
                    this.lineChart = res.data
                    this.sum = res.count
                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })
            this.getemployList(this.employ.Time1.value, this.employ.Time2.value, 4, this.account.value, this.content.n, this.phone_type, 1)
                .then((res) => {
                    console.log(res)
                    this.employList = res.data.list
                })

            this.getallowanceList(this.allowance.Time1.value, this.allowance.Time2.value, 4, 1)
                .then((res) => {
                    console.log(res)
                    this.allowanceList = res.data.list
                })
            this.getdoughnutData(this.allowance.Time1.value, this.allowance.Time2.value, 4)
                .then((res) => {
                    res.data.map((item) => {
                        item.amount = item.ratio

                    })
                    if (res.data.length == 0) {
                        this.dataShow = false
                    } else {
                        this.dataShow = true
                        this.doughnutChart = res.data
                        if (res.data[0].ratio == 0 && res.data[1].ratio == 0) {
                            this.dataShow = false
                        } else {
                            this.$nextTick(function() {
                                this.drawPiedoughnut()
                            })
                        }
                        console.log(res)
                    }
                })
        }
        if (id == '3') {
            this.messageType.name = '验证码短信'
            this.messageType.imgUrl = require('../../../../assets/images/dataModule/code.png')
            this.headertitle = '数据监控-验证码短信'
            this.eventId = 2
            this.getTopData(2)
                .then((res) => {
                    console.log(res)

                    this.topData.today = res.data.count
                })
            this.getinfoData(2)
                .then((res) => {
                    console.log(res)
                    this.topData.residue = res.data.count
                    this.account.list = this.account.list.concat(res.data.sign)
                    this.content.list = this.content.list.concat(res.data.template)
                })

            this.getLineData(this.employ.Time1.value, this.employ.Time2.value, 2, this.account.value, this.content.n, this.phone_type)
                .then((res) => {
                    this.lineChart = res.data
                    this.sum = res.count
                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })
            this.getemployList(this.employ.Time1.value, this.employ.Time2.value, 2, this.account.value, this.content.n, this.phone_type, 1)
                .then((res) => {
                    console.log(res)
                    this.employList = res.data.list
                })

            this.getallowanceList(this.allowance.Time1.value, this.allowance.Time2.value, 2, 1)
                .then((res) => {
                    console.log(res)
                    this.allowanceList = res.data.list
                })
            this.getdoughnutData(this.allowance.Time1.value, this.allowance.Time2.value, 2)
                .then((res) => {
                    res.data.map((item) => {
                        item.amount = item.ratio

                    })
                    if (res.data.length == 0) {
                        this.dataShow = false
                    } else {
                        this.dataShow = true
                        this.doughnutChart = res.data
                        if (res.data[0].ratio == 0 && res.data[1].ratio == 0) {
                            this.dataShow = false
                        } else {
                            this.$nextTick(function() {
                                this.drawPiedoughnut()
                            })
                        }
                        console.log(res)
                    }
                })
        }




        // document.getElementById('doughnutChart').style.width = "10rem"

        let that = this
        console.log("rem", that.rem)
        window.onresize = () => {
            return (() => {
                that.rem = document.documentElement.clientWidth / 375
                console.log("rem", that.rem)
                that.$nextTick(function() {
                    that.drawPieline()
                    that.drawPiedoughnut()
                })
            })()
        }
    },
    methods: {
        getdoughnutData(start, end, eventId) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "eventId": eventId
                }

                this.$post('/apiDataOverview.html?f=getSmsComboGraph', data)
                    .then((response) => {
                        console.log(response)

                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getallowanceList(start, end, eventId, page) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "eventId": eventId,
                    "page": page
                }

                this.$post('/apiDataOverview.html?f=getSmsComboData', data)
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
        updoughnutData() {
            this.getdoughnutData(this.allowance.Time1.value, this.allowance.Time2.value, this.eventId)
                .then((res) => {
                    res.data.map((item) => {
                        item.amount = item.ratio

                    })
                    if (res.data.length == 0) {
                        this.dataShow = false
                    } else {
                        this.dataShow = true
                        this.doughnutChart = res.data
                        if (res.data[0].ratio == 0 && res.data[1].ratio == 0) {
                            this.dataShow = false
                        } else {
                            this.$nextTick(function() {
                                this.drawPiedoughnut()
                            })
                        }
                        console.log(res)
                    }
                })

            this.getallowanceList(this.allowance.Time1.value, this.allowance.Time2.value, this.eventId, 1)
                .then((res) => {
                    console.log(res)
                    this.allowanceList = res.data.list
                    this.allowanceListPage = 1
                    this.allowanceLoad.finished = false;
                    this.allowanceLoad.loading = true;
                    this.onLoad2();
                })
        },
        getemployList(start, end, eventId, sign, template_id, phone_type, page) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "eventId": eventId,
                    "sign": sign,
                    "template_id": template_id,
                    "phone_type": phone_type,
                    "page": page
                }

                this.$post('/apiDataOverview.html?f=getSmsSendRecord', data)
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
        getLineData(start, end, eventId, sign, template_id, phone_type) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "eventId": eventId,
                    "sign": sign,
                    "template_id": template_id,
                    "phone_type": phone_type
                }

                this.$post('/apiDataOverview.html?f=getSmsGraph', data)
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        accountAction(src, n, index) {
            console.log(src)
            console.log(n)
            this.account.n = n
            console.log("index", index)
            this.account.index = index
        },
        contentAction(src, n, index) {
            console.log(src)
            console.log(n)
            console.log("index", index)
            this.content.n = n
            this.content.index = index
        },
        tablefilterAction(src, n) {
            console.log(src)
            console.log(n)
            this.tablefilter.n = n
        },
        tablefilter1Action(src, n) {
            console.log(src)
            console.log(n)
            this.tablefilter1.n = n
        },
        getTopData(id) {
            return new Promise((resolve, reject) => {
                let data = {
                    eventId: id
                }
                this.$post('/apiDataOverview.html?f=getSmsToday', data)
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getinfoData(id) {
            return new Promise((resolve, reject) => {
                let data = {
                    eventId: id
                }
                this.$post('/apiDataOverview.html?f=getSmsData', data)
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
            if (id == 0) {
                this.ationlineChart0 = false
                this.phone_type = ''
                this.updateChart()
                this.tablefilter.value = '全部'
                this.tablefilter.n = 0
            } else {
                this.ationlineChart0 = true
            }
            if (id == 1) {
                this.ationlineChart1 = false
                this.phone_type = 1
                this.updateChart()
                this.tablefilter.value = '移动'
                this.tablefilter.n = 1
            } else {
                this.ationlineChart1 = true
            }
            if (id == 2) {
                this.ationlineChart2 = false
                this.phone_type = 2
                this.updateChart()
                this.tablefilter.value = '联通'
                this.tablefilter.n = 2
            } else {
                this.ationlineChart2 = true
            }
            if (id == 3) {
                this.ationlineChart3 = false
                this.phone_type = 3
                this.updateChart()
                this.tablefilter.value = '电信'
                this.tablefilter.n = 3
            } else {
                this.ationlineChart3 = true
            }
        },
        drawPieline() {
            // 折线图
            let this_ = this;
            this_.rem = document.documentElement.clientWidth / 375
            const data = this.lineChart
                //  [{
                //     date: '2017-06-05',
                //     city: '发送量',
                //     value: 3000
                // }, {
                //     date: '2017-06-06',
                //     city: '发送量',
                //     value: 3500
                // }, {
                //     date: '2017-06-07',
                //     city: '发送量',
                //     value: 3200
                // }, {
                //     date: '2017-06-08',
                //     city: '发送量',
                //     value: 3700
                // }, {
                //     date: '2017-06-09',
                //     city: '发送量',
                //     value: 3900
                // }, {
                //     date: '2017-06-10',
                //     city: '发送量',
                //     value: 3500
                // }, {
                //     date: '2017-06-11',
                //     city: '发送量',
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
                .color('city')
                .adjust('stack');
            chart.line()
                .position('date*value')
                .color('city')
                .adjust('stack');
            chart.render();
        },
        drawPiedoughnut() {
            let this_ = this;
            this_.rem = document.documentElement.clientWidth / 375
            const data = this.doughnutChart;

            const chart = new F2.Chart({
                id: 'doughnutChart1',
                pixelRatio: window.devicePixelRatio,
                width: 375 * this_.rem,
                height: 210 * this_.rem,
                padding: [0, 0, 0, 0],
                appendPadding: [0, 0, 0, 0]
            });

            chart.source(data);
            chart.coord('polar', {
                transposed: true,
                innerRadius: 0.55,
                radius: 0.7
            });
            chart.axis(false);
            chart.legend(false);
            chart.tooltip(false);
            chart.guide()
                .html({
                    position: ['50%', '50%'],
                    html: '<div style="width: 100px;height: 20px;text-align: center;line-height: 20px;" id="textContent"></div>'
                });
            // 配置文本饼图
            chart.pieLabel({
                sidePadding: 45 * this_.rem,
                lineHeight: 30 * this_.rem,
                inflectionOffset: 15 * this_.rem,
                anchorOffset: 5 * this_.rem,
                label2: function label1(data) {
                    return {
                        text: data.memo,
                        fill: '#797979',
                        fontSize: 12 * this_.rem
                    };
                },
                label1: function label2(data) {
                    return {
                        fill: '#242424',
                        text: data.amount.toFixed(2) + '%',
                        fontWeight: 500,
                        fontSize: 13 * this_.rem
                    };
                },
                anchorStyle: {
                    r: 3 * this_.rem
                },
                lineStyle: {
                    width: 20 * this_.rem,
                    r: 3
                },
                onClick(ev) {
                    console.log(ev)
                },
                label1OffsetY: -1 * this_.rem,
                label2OffsetY: 4 * this_.rem
            });
            chart.interval()
                .position('const*ratio')
                .color('memo', ['#f2ab1a', '#bfbfbf', '#f9314d', '#269efd'])
                .adjust('stack')
                .style({
                    lineWidth: 2 * this_.rem,
                    stroke: '#fff'
                });
            chart.render();
        },
        updateChart() {
            //更新折线图
            this.getLineData(this.employ.Time1.value, this.employ.Time2.value, this.eventId, this.account.value, this.content.n, this.phone_type)
                .then((res) => {
                    this.lineChart = res.data
                    this.sum = res.count
                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })
            this.getemployList(this.employ.Time1.value, this.employ.Time2.value, this.eventId, this.account.value, this.content.n, this.phone_type, 1)
                .then((res) => {
                    console.log(res)
                    this.employList = res.data.list
                    this.employListPage = 1
                    this.employLoad.finished = false;
                    this.employLoad.loading = true;
                    this.onLoad();
                })
                //更新列表
                // this.getFirstList(this.account.value, this.employ.Time1.value, this.employ.Time2.value, 1)
                //     .then((res) => {
                //         this.employList = res.data.list
                //         this.employListPage = 1
                //         this.employLoad.finished = false;
                //         this.employLoad.loading = true;
                //         this.onLoad();
                //     })
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
            let t = new Date(this.allowance.Time2.value)
            let date3 = t.getTime() - time.getTime()
            let days = Math.floor(date3 / (24 * 3600 * 1000))
            console.log(days)
            if (days > 366) {
                Toast("时间范围不能超出一年");
            } else {
                this.updoughnutData()
            }
        },
        onTime4(time) {
            this.allowance.Time2.value = moment(time).format('YYYY-MM-DD');
            this.allowance.Time2.showPicker = false;
            this.allowance.Time1.maxDate = time
            let t = new Date(this.allowance.Time1.value)
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
                this.updoughnutData()
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
            if (item == 'account') {
                this.account.show = true;
            }
            if (item == 'content') {
                this.content.show = true;
            }
            if (item == 'account1') {
                this.account1.show = true;
            }
            if (item == 'content1') {
                this.content1.show = true;
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
            if (item == 'account1') {
                this.account1.show = false;
            }
            if (item == 'content1') {
                this.content1.show = false;
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
                if (this.account.list[this.account.index].app_sign == "全部账号") {
                    this.account.value = ''
                    console.log(this.account.list[this.account.index].app_sign, 1234)
                } else {
                    this.account.value = this.account.list[this.account.index].app_sign
                }

                this.updateChart()
            }
            if (item == 'content') {
                this.content.show = false;
                if (this.content.list[this.content.index].content == "全部短信内容") {
                    this.content.value = ''
                } else {
                    this.content.value = this.content.list[this.content.index].content
                }

                this.updateChart()
            }
            if (item == 'account1') {
                this.account1.show = false;
            }
            if (item == 'content1') {
                this.content1.show = false;
            }
            if (item == 'tablefilter') {
                this.tablefilter.show = false;
                this.tablefilter.value = this.tablefilter.list[this.tablefilter.n].name
                this.lineChartTime(this.tablefilter.n)
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
                    this.getemployList(this.employ.Time1.value, this.employ.Time2.value, this.eventId, this.account.value, this.content.n, this.phone_type, this.employListPage)
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
                    this.getallowanceList(this.allowance.Time1.value, this.allowance.Time2.value, this.eventId, this.allowanceListPage)
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