import DataModuleHeader from "../../../components/header/dataModuleHeader.vue";
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
            headertitle: "消费监控",
            active: "1",
            dataShow: true,
            ationFilter1: true,
            ationFilter2: true,
            ationFilter3: true,
            tendency: {
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
            ationFilter4: true,
            ationFilter5: true,
            ationFilter6: true,
            collect: {
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
            rem: 1,
            product: {
                value: '全部产品',
                n: 0,
                show: false,
                eventId: '',
                list: [{
                    name: '全部产品',
                    value: 0
                }, {
                    name: '语音通知',
                    value: 1
                }, {
                    name: '隐私号',
                    value: 2
                }, {
                    name: '验证码短信',
                    value: 3
                }, {
                    name: '通知短信',
                    value: 4
                }, {
                    name: '会员推广短信',
                    value: 5
                }, {
                    name: '云坐席',
                    value: 6
                }, {
                    name: '号码验真',
                    value: 7
                }, {
                    name: '身份核验',
                    value: 8
                }, ]
            },
            consumer: {
                value: '全部消费项',
                n: 0,
                show: false,
                fee_type: '',
                list: [{
                        name: '全部消费项',
                        value: 0
                    },
                    {
                        name: '号码费',
                        value: 1
                    },
                    {
                        name: '坐席费',
                        value: 2
                    },
                    {
                        name: '通话费',
                        value: 3
                    },
                ]
            },
            list: [],
            listPage: 1,
            listLoad: {
                loading: false,
                finished: false,
                start: '',
                end: '',
                type: ''
            },
            lineChart: [],
            doughnutChart: [],
            uptime: '',
            consumption: 0.00
        };
    },
    components: {
        DataModuleHeader
    },
    mounted() {
        // 获取当前年月日
        let nowDate = new Date();
        this.uptime = moment(nowDate).format('MM-DD 00:00')
        this.tendency.Time1.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.tendency.Time2.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
            // this.tendency.Time1.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 7)
            // this.tendency.Time2.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate()

        let nowDate1 = nowDate.getTime() - 24 * 60 * 60 * 1000
        let nowDate2 = nowDate.getTime() - 7 * 24 * 60 * 60 * 1000
        this.tendency.Time2.value = moment(nowDate1).format('YYYY-MM-DD')
        this.tendency.Time1.value = moment(nowDate2).format('YYYY-MM-DD')
        this.tendency.Time2.currentDate = new Date(nowDate1)
        this.tendency.Time1.currentDate = new Date(nowDate2)


        this.collect.Time1.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.collect.Time2.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
            // this.collect.Time1.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 7)
            // this.collect.Time2.value = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate()
        this.collect.Time2.value = moment(nowDate1).format('YYYY-MM-DD')
        this.collect.Time1.value = moment(nowDate2).format('YYYY-MM-DD')
        this.collect.Time2.currentDate = new Date(nowDate1)
        this.collect.Time1.currentDate = new Date(nowDate2)

        this.listLoad.start = this.collect.Time1.value
        this.listLoad.end = this.collect.Time2.value
            // console.log(this.getFirstDayOfWeek(nowDate))
        this.rem = document.documentElement.clientWidth / 375

        this.getLineData(this.tendency.Time1.value, this.tendency.Time2.value)
            .then((res) => {
                this.lineChart = res.data

                this.$nextTick(function() {
                    this.drawPieline()
                })
            })
        this.getdoughnutData(this.tendency.Time1.value, this.tendency.Time2.value)
            .then((res) => {
                res.data.map((item) => {
                    item.amount = item.ratio
                })
                if (res.data.length == 0) {
                    this.dataShow = false
                } else {
                    this.dataShow = true
                    this.doughnutChart = res.data


                    this.$nextTick(function() {
                        this.drawPiedoughnut()
                    })
                }

            })
            // this.getList(this.collect.Time1.value, this.collect.Time2.value)
        this.getList(this.listLoad.start, this.listLoad.end, '', '', '', 1)
            .then((res) => {

                this.list = res.data.list
                this.consumption = res.data.consumption
                    // this.list = [{
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     },
                    //     {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }, {
                    //         date: '2020-02-03',
                    //         charge_unit: "1245",
                    //         money: '35.60'
                    //     }
                    // ]

            })
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
        consumerAction(src, n) {
            console.log(src)
            console.log(n)
            this.consumer.n = n
        },
        productAction(src, n) {
            console.log(src)
            console.log(n)
            this.product.n = n
        },
        getList(start, end, type, eventId, feeType, page) {
            return new Promise((resolve, reject) => {
                console.log(start)
                console.log(end)
                let data = {
                    "startDate": start,
                    "endDate": end,
                    "type": type,
                    "eventId": eventId,
                    "fee_type": feeType,
                    "page": page
                }

                this.$post('/apiDataOverview.html?f=consumeSylloge', data)
                    .then((response) => {


                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getLineData(start, end, type) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "type": type
                }

                this.$post('/apiDataOverview.html?f=getCostGraph', data)
                    .then((response) => {


                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getFirstDayOfWeek(date) {
            var weekday = date.getDay() || 7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7

            date.setDate(date.getDate() - weekday + 1); //往前算（weekday-1）天，年份、月份会自动变化
            return this.timeFormat(date);
        },
        timeFormat(date) {
            if (!date || typeof(date) === "string") {
                this.error("参数异常，请检查...");
            }
            var y = date.getFullYear(); //年
            var m = date.getMonth() + 1; //月
            var d = date.getDate(); //日

            return y + "-" + m + "-" + d;
        },
        getdoughnutData(start, end, type) {
            return new Promise((resolve, reject) => {
                let data = {
                    "start": start,
                    "end": end,
                    "type": type
                }

                this.$post('/apiDataOverview.html?f=getCostRateGraph', data)
                    .then((response) => {

                        // this.doughnutChart = [{
                        //     amount: 0,
                        //     ratio: 0,
                        //     memo: '隐私号',
                        //     const: 'const'
                        // }, {
                        //     amount: 0,
                        //     ratio: 0,
                        //     memo: '会员推广短信',
                        //     const: 'const'
                        // }, {
                        //     amount: 0,
                        //     ratio: 0,
                        //     memo: '云坐席',
                        //     const: 'const'
                        // }, {
                        //     amount: 0,
                        //     ratio: 0,
                        //     memo: '通知短信',
                        //     const: 'const'
                        // }];
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        drawPieline() {
            let this_ = this;
            this_.rem = document.documentElement.clientWidth / 375
            const data = this.lineChart
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
                    mask: 'MM-DD',
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
        drawPiedoughnut() {
            let this_ = this;
            this_.rem = document.documentElement.clientWidth / 375
            const data = this.doughnutChart
            const chart = new F2.Chart({
                id: 'doughnutChart1',
                pixelRatio: window.devicePixelRatio,
                width: 375 * this_.rem,
                height: 220 * this_.rem,
                padding: [0, 0, 0, 0],
                appendPadding: [0, 0, 0, 0]
            });

            chart.source(data);
            chart.coord('polar', {
                transposed: true,
                innerRadius: 0.5,
                radius: 0.6
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
                // skipOverlapLabels: false,
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
                .color('memo', ['#f2ab1a', '#bdd259', '#f9314d', '#269efd', '#43f67e', '#ff9024', '#f6e743', '#43f67e'])
                .adjust('stack')
                .style({
                    lineWidth: 2 * this_.rem,
                    stroke: '#fff'
                });
            chart.render();
        },
        updateChart() {
            this.getLineData(this.tendency.Time1.value, this.tendency.Time2.value)
                .then((res) => {
                    this.lineChart = res.data

                    this.$nextTick(function() {
                        this.drawPieline()
                    })
                })
            this.getdoughnutData(this.tendency.Time1.value, this.tendency.Time2.value)
                .then((res) => {
                    res.data.map((item) => {
                        item.amount = item.ratio
                    })
                    if (res.data.length == 0) {
                        this.dataShow = false
                    } else {
                        this.dataShow = true
                        this.doughnutChart = res.data

                        this.$nextTick(function() {
                            this.drawPiedoughnut()
                        })
                    }

                })
        },
        filterTime(id) {
            console.log(id)
            if (id == 1) {
                if (this.ationFilter1) {
                    this.ationFilter1 = false
                    this.getLineData('', '', 1)
                        .then((res) => {
                            this.lineChart = res.data

                            this.$nextTick(function() {
                                this.drawPieline()
                            })
                        })
                    this.getdoughnutData('', '', 1)
                        .then((res) => {
                            res.data.map((item) => {
                                item.amount = item.ratio
                            })
                            if (res.data.length == 0) {
                                this.dataShow = false
                            } else {
                                this.dataShow = true
                                this.doughnutChart = res.data

                                this.$nextTick(function() {
                                    this.drawPiedoughnut()
                                })
                            }

                        })
                } else {
                    this.ationFilter1 = true
                    this.updateChart()
                }

            } else {
                this.ationFilter1 = true
            }
            if (id == 2) {
                if (this.ationFilter2) {
                    this.ationFilter2 = false
                    this.getLineData('', '', 2)
                        .then((res) => {
                            this.lineChart = res.data

                            this.$nextTick(function() {
                                this.drawPieline()
                            })
                        })
                    this.getdoughnutData('', '', 2)
                        .then((res) => {
                            res.data.map((item) => {
                                item.amount = item.ratio
                            })
                            if (res.data.length == 0) {
                                this.dataShow = false
                            } else {
                                this.dataShow = true
                                this.doughnutChart = res.data

                                this.$nextTick(function() {
                                    this.drawPiedoughnut()
                                })
                            }

                        })
                } else {
                    this.ationFilter2 = true
                    this.updateChart()
                }
            } else {
                this.ationFilter2 = true
            }
            if (id == 3) {
                if (this.ationFilter3) {
                    this.ationFilter3 = false
                    this.getLineData('', '', 3)
                        .then((res) => {
                            this.lineChart = res.data

                            this.$nextTick(function() {
                                this.drawPieline()
                            })
                        })
                    this.getdoughnutData('', '', 3)
                        .then((res) => {
                            res.data.map((item) => {
                                item.amount = item.ratio
                            })
                            if (res.data.length == 0) {
                                this.dataShow = false
                            } else {
                                this.dataShow = true
                                this.doughnutChart = res.data

                                this.$nextTick(function() {
                                    this.drawPiedoughnut()
                                })
                            }

                        })
                } else {
                    this.ationFilter3 = true
                    this.updateChart()
                }
            } else {
                this.ationFilter3 = true
            }
            if (id == 4) {
                if (this.ationFilter4) {
                    this.ationFilter4 = false
                    this.listLoad.start = ''
                    this.listLoad.end = ''
                    this.listLoad.type = 1
                    this.getList(this.listLoad.start, this.listLoad.end, this.listLoad.type, this.product.eventId, this.consumer.fee_type, 1)
                        .then((res) => {

                            this.list = res.data.list
                                // let list = [{
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     },
                                //     {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }
                                // ]
                                // this.list = list
                            this.consumption = res.data.consumption
                            this.listPage = 1
                            this.listLoad.finished = false;
                            this.listLoad.loading = true;
                            this.onLoad();

                        })
                } else {
                    this.ationFilter4 = true
                    this.listLoad.start = this.collect.Time1.value
                    this.listLoad.end = this.collect.Time2.value
                    this.listLoad.type = ''
                    this.updateList()
                }
            } else {
                this.ationFilter4 = true
            }
            if (id == 5) {
                if (this.ationFilter5) {
                    this.ationFilter5 = false
                    this.listLoad.start = ''
                    this.listLoad.end = ''
                    this.listLoad.type = 2
                    this.getList(this.listLoad.start, this.listLoad.end, this.listLoad.type, this.product.eventId, this.consumer.fee_type, 1)
                        .then((res) => {

                            this.list = res.data.list
                                // let list = [{
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     },
                                //     {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }
                                // ]
                                // this.list = list
                            this.consumption = res.data.consumption
                            this.listPage = 1
                            this.listLoad.finished = false;
                            this.listLoad.loading = true;
                            this.onLoad();

                        })
                } else {
                    this.ationFilter5 = true
                    this.listLoad.start = this.collect.Time1.value
                    this.listLoad.end = this.collect.Time2.value
                    this.listLoad.type = ''
                    this.updateList()
                }
            } else {
                this.ationFilter5 = true
            }
            if (id == 6) {
                if (this.ationFilter6) {
                    this.ationFilter6 = false
                    this.listLoad.start = ''
                    this.listLoad.end = ''
                    this.listLoad.type = 3
                    this.getList(this.listLoad.start, this.listLoad.end, this.listLoad.type, this.product.eventId, this.consumer.fee_type, 1)
                        .then((res) => {

                            this.list = res.data.list
                                // let list = [{
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     },
                                //     {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }, {
                                //         date: '2020-02-03',
                                //         charge_unit: "1245",
                                //         money: '35.60'
                                //     }
                                // ]
                                // this.list = list
                            this.consumption = res.data.consumption
                            this.listPage = 1
                            this.listLoad.finished = false;
                            this.listLoad.loading = true;
                            this.onLoad();

                        })
                } else {
                    this.ationFilter6 = true
                    this.listLoad.start = this.collect.Time1.value
                    this.listLoad.end = this.collect.Time2.value
                    this.listLoad.type = ''
                    this.updateList()
                }
            } else {
                this.ationFilter6 = true
            }
        },
        updateList() {
            this.getList(this.listLoad.start, this.listLoad.end, this.listLoad.type, this.product.eventId, this.consumer.fee_type, 1)
                .then((res) => {

                    this.list = res.data.list
                        // let list = [{
                        //         date: '2020-02-03',
                        //         charge_unit: "1245",
                        //         money: '35.60'
                        //     },
                        //     {
                        //         date: '2020-02-03',
                        //         charge_unit: "1245",
                        //         money: '35.60'
                        //     }, {
                        //         date: '2020-02-03',
                        //         charge_unit: "1245",
                        //         money: '35.60'
                        //     }, {
                        //         date: '2020-02-03',
                        //         charge_unit: "1245",
                        //         money: '35.60'
                        //     }, {
                        //         date: '2020-02-03',
                        //         charge_unit: "1245",
                        //         money: '35.60'
                        //     }, {
                        //         date: '2020-02-03',
                        //         charge_unit: "1245",
                        //         money: '35.60'
                        //     }
                        // ]
                        // this.list = list
                    this.consumption = res.data.consumption
                    this.listPage = 1
                    this.listLoad.finished = false;
                    this.listLoad.loading = true;
                    this.onLoad();
                })
        },
        onTime(time) {
            this.tendency.Time1.value = moment(time).format('YYYY-MM-DD');
            this.tendency.Time1.showPicker = false;
            this.tendency.Time2.minDate = time
            this.ationFilter1 = true
            this.ationFilter2 = true
            this.ationFilter3 = true
            let t = new Date(this.tendency.Time2.value)
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
            this.tendency.Time2.value = moment(time).format('YYYY-MM-DD');
            this.tendency.Time2.showPicker = false;
            this.tendency.Time1.maxDate = time
            this.ationFilter1 = true
            this.ationFilter2 = true
            this.ationFilter3 = true
            let t = new Date(this.tendency.Time1.value)
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
            this.collect.Time1.value = moment(time).format('YYYY-MM-DD');
            this.collect.Time1.showPicker = false;
            this.collect.Time2.minDate = time
            this.ationFilter4 = true
            this.ationFilter5 = true
            this.ationFilter6 = true
            let t = new Date(this.collect.Time2.value)
            let date3 = t.getTime() - time.getTime()
            let days = Math.floor(date3 / (24 * 3600 * 1000))
            console.log(days)
            if (days > 366) {
                Toast("时间范围不能超出一年");
            } else {
                this.listLoad.start = this.collect.Time1.value
                this.listLoad.end = this.collect.Time2.value
                this.listLoad.type = ''
                this.updateList()
            }
        },
        onTime4(time) {
            this.collect.Time2.value = moment(time).format('YYYY-MM-DD');
            this.collect.Time2.showPicker = false;
            this.collect.Time1.maxDate = time
            this.ationFilter4 = true
            this.ationFilter5 = true
            this.ationFilter6 = true
            let t = new Date(this.collect.Time1.value)
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
                this.listLoad.start = this.collect.Time1.value
                this.listLoad.end = this.collect.Time2.value
                this.listLoad.type = ''
                this.updateList()
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
            if (item == 'product') {
                this.product.show = true;
            }
            if (item == 'consumer') {
                this.consumer.show = true;
            }
        },
        cancel(item) {
            console.log("cancel")
            if (item == 'product') {
                this.product.show = false;
            }
            if (item == 'consumer') {
                this.consumer.show = false;
            }
        },
        affirm(item) {
            console.log("affirm")
            if (item == 'product') {
                this.product.show = false;
                this.product.value = this.product.list[this.product.n].name

                if (this.product.n == 0) {
                    this.product.eventId = ''
                } else {
                    this.product.eventId = this.product.n - 1
                }
                this.updateList()
            }
            if (item == 'consumer') {
                this.consumer.show = false;
                this.consumer.value = this.consumer.list[this.consumer.n].name
                if (this.consumer.n == 0) {
                    this.consumer.fee_type = ''
                    this.updateList()
                }
                if (this.consumer.n == 1) {
                    this.consumer.fee_type = 1
                    this.updateList()
                }
                if (this.consumer.n == 2) {
                    this.consumer.fee_type = 2
                    this.updateList()
                }
                if (this.consumer.n == 3) {
                    this.consumer.fee_type = 3
                    this.updateList()
                }

            }
        },
        onLoad() { //列表
            console.log(this.listPage)
            if (this.listPage != 1) {
                this.getList(this.listLoad.start, this.listLoad.end, this.listLoad.type, this.product.eventId, this.consumer.fee_type, this.listPage)
                    .then((res) => {

                        let totalPage = 4
                        if (this.listPage <= totalPage) {
                            // let list = [{
                            //         date: '2020-02-03',
                            //         charge_unit: "1245",
                            //         money: '35.60'
                            //     },
                            //     {
                            //         date: '2020-02-03',
                            //         charge_unit: "1245",
                            //         money: '35.60'
                            //     }, {
                            //         date: '2020-02-03',
                            //         charge_unit: "1245",
                            //         money: '35.60'
                            //     }, {
                            //         date: '2020-02-03',
                            //         charge_unit: "1245",
                            //         money: '35.60'
                            //     }, {
                            //         date: '2020-02-03',
                            //         charge_unit: "1245",
                            //         money: '35.60'
                            //     }, {
                            //         date: '2020-02-03',
                            //         charge_unit: "1245",
                            //         money: '35.60'
                            //     }
                            // ]
                            this.consumption = res.data.consumption
                            this.list = this.list.concat(res.data.list)
                            this.listLoad.loading = false;
                        } else {
                            this.listLoad.finished = true;
                        }
                        this.listPage += 1
                    })
            } else {
                this.listLoad.loading = false;

                this.listPage += 1
            }

        },
    }
};