import DataModuleHeader from "../../../components/header/dataModuleHeader.vue";
import moment from "moment"
export default {
    data: function() {
        return {
            headertitle: "收支记录",
            sublevel: true, //子级路由
            dataShow: true, //收支记录
            Time: {
                value: "2020-05-11",
                minDate: new Date(2010, 1, 1),
                maxDate: new Date(2120, 10, 1),
                currentDate: new Date(),
                showPicker: false,
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
            product: {
                value: '全部类型',
                n: 0,
                show: false,
                list: [{
                        name: '全部类型',
                        value: 0
                    },
                    {
                        name: '充值',
                        value: 1
                    },
                    {
                        name: '退款',
                        value: 2
                    },
                    {
                        name: '购买套餐包',
                        value: 3
                    }
                ]
            },
            productList: [{

            }],
            RecordList: []
        };
    },
    components: {
        DataModuleHeader
    },
    watch: {
        $route(to) {
            if (to.path != "/dataModule/income") {
                this.sublevel = false
            } else {
                this.sublevel = true
            }
        }

    },
    mounted() {

        let path = this.$route.path
        if (path != "/dataModule/income") {
            this.sublevel = false
        } else {
            this.sublevel = true
        }
        // 获取当前年月日
        let nowDate = new Date();

        this.Time.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate() - 1)
        this.calendar.maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)
        this.calendar.defaultData = [new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 7), new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1)]
        let nowDate1 = nowDate.getTime() - 24 * 60 * 60 * 1000
        let nowDate2 = nowDate.getTime() - 7 * 24 * 60 * 60 * 1000
        this.calendar.end = moment(nowDate1).format('YYYY-MM-DD')
        this.calendar.start = moment(nowDate2).format('YYYY-MM-DD')

        // this.calendar.start = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 7)
        // this.calendar.end = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + (nowDate.getDate() - 1)
        this.calendar.date = `${this.calendar.start} 到 ${this.calendar.end}`
        this.getRecordList(this.calendar.start, this.calendar.end)
            .then((res) => {
                res.data.map((item) => {
                    item.createDate = moment(item.createDate).format('MM-DD hh:mm')
                })
                this.RecordList = res.data
            })

    },
    methods: {
        onTime(time) {
            this.Time.value = moment(time).format('YYYY-MM-DD');
            this.Time.showPicker = false;
            this.getRecordList()
                .then((res) => {
                    res.data.map((item) => {
                        item.createDate = moment(item.createDate).format('MM-DD h:mm')
                    })
                    this.RecordList = res.data
                })
        },
        formatDate(date) {
            console.log(date.getFullYear())
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        },
        onConfirm(date) {
            const [start, end] = date;
            this.calendar.show = false;
            this.calendar.start = moment(start).format('YYYY-MM-DD');
            this.calendar.end = moment(end).format('YYYY-MM-DD');
            this.calendar.date = `${this.formatDate(start)} 到 ${this.formatDate(end)}`;
            this.getRecordList(this.calendar.start, this.calendar.end)
                .then((res) => {
                    res.data.map((item) => {
                        item.createDate = moment(item.createDate).format('MM-DD h:mm')
                    })
                    this.RecordList = res.data
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
        productAction(src, n) {
            console.log(src)
            console.log(n)
            this.product.n = n
        },
        showPopup() {
            this.product.show = true;
        },
        cancel() {
            console.log("cancel")
            this.product.show = false;
        },
        affirm() {

            this.product.show = false;
            this.product.value = this.product.list[this.product.n].name
            this.getRecordList(this.calendar.start, this.calendar.end)
                .then((res) => {
                    res.data.map((item) => {
                        item.createDate = moment(item.createDate).format('MM-DD h:mm')
                    })
                    this.RecordList = res.data
                })
        },
        toParticulars(obj) {
            //跳转收支详情

            this.$router.push({
                path: 'income/incomeParticulars',
                query: {
                    data: JSON.stringify(obj),
                }
            })
        },
        getRecordList(start, end) {
            let type = ""
            if (this.product.n == 1) {
                type = 1
            } else if (this.product.n == 2) {
                type = 3
            } else if (this.product.n == 3) {
                type = 999
            }
            let data = {
                "startDate": start,
                "endDate": end,
                "chargeType": type
            }
            return new Promise((resolve, reject) => {
                this.$post('/apiDataOverview.html?f=contract', data)
                    .then((response) => {
                        // .toFixed(2)
                        if (response.count == 0) {
                            this.dataShow = false
                        } else {
                            this.dataShow = true
                            response.data.map((item) => {
                                item.pay_money = item.pay_money.toFixed(2)
                            })
                        }

                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
};