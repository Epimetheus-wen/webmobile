import BackTop from "@/components/header/backTop.vue"
import moment from "moment"
import axios from 'axios';
import Qs from 'qs'
import { Dialog } from 'vant';
import { Toast } from 'vant';
import { mapActions, mapMutations } from 'vuex'

moment.locale('zh-cn');
export default {
    data: function() {
        return {
            headertitle: "企业认证",
            sublevel: true,
            from: {
                realname: "",
                credit_code: "",
                company_nbr: "",
                address: "",
                corporation_name: "",
                business_img: [],
                bankName: "",
                bankBranchName: "",
                bankAccount: "",
            },
            confirm: {
                value: '是',
                columns: ['是', '否'],
                showPicker: false,
            },
            confirmTime: {
                value: '具体时长',
                columns: ['具体时长', '长期'],
                showPicker: false,
            },
            Time: {
                value: "",
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2120, 10, 1),
                currentDate: new Date(),
                showPicker: false,
            },
            RealnameArr: [],
            amend: false,
            idCard_img: ""
        }
    },
    components: {
        BackTop,
    },
    computed: {
        UserCertInfo() {
            return this.$store.state.user.userCertInfo
        },
    },
    mounted() {
        Dialog.alert({
                title: '企业认证',
                message: '填写企业全称后系统会将统一社会信用代码、法人姓名、营业期限等认证信息自动带出，可确认修改。',
                confirmButtonText: "我知道了"
            })
            .then(() => {
                // on confirm
            })
        this.getUserCertInfo()
        setTimeout(() => {
            console.log(this.$store.state.user.userCertInfo)
            let data = this.$store.state.user.userCertInfo
            if (data.user_type == "2") {
                this.from.realname = data.realname
                this.from.company_nbr = data.company_nbr
                this.from.bankName = data.bank_name
                this.from.bankBranchName = data.bank_branch_name
                this.from.bankAccount = data.bank_account
            }

            this.from.credit_code = data.credit_code
            this.from.address = data.address
            this.from.corporation_name = data.corporation_name

            if (data.business_deadline == "1") {
                this.Time.value = ""
                this.confirmTime.value = "长期"
            } else {
                this.Time.value = data.business_deadline
            }
            if (data.ordinary_VAT_payer == "2") {
                this.confirm.value = "否"
            }

            console.log(this.$store.state.user.userCertInfo.length)
            if (this.$store.state.user.userCertInfo != "" && this.$store.state.user.userCertInfo != undefined) {
                if (data.business_img != null && data.business_img != "") {
                    this.amend = true
                    this.idCard_img = data.business_img
                }
            }
        }, 1000)
    },
    methods: {
        ...mapActions(['getUserCertInfo']),
        ...mapMutations(['updateUserCertInfo']),
        onSubmit(values) {
            let business_deadline = ""
            let time = ""
            let ordinary_VAT_payer = "1"
            let business_img = ""
            if (this.confirmTime.value == '具体时长') {
                business_deadline = "2"
                time = this.Time.value
            } else {
                business_deadline = "1"
            }
            if (this.confirm.value == "否") {
                ordinary_VAT_payer = "2"
            }
            if (this.from.business_img.length > 0) {
                business_img = this.from.business_img[0].content
            }
            let data = {
                "realname": this.from.realname,
                "credit_code": this.from.credit_code,
                "company_nbr": this.from.company_nbr,
                "address": this.from.address,
                "business_deadline": business_deadline,
                "corporation_name": this.from.corporation_name,
                "business_img": [business_img],
                "time": time,
                "ordinary_VAT_payer": ordinary_VAT_payer,
                "bank_name": this.from.bankName,
                "bank_branch_name": this.from.bankBranchName,
                "bank_account": this.from.bankAccount,

            }
            if (this.amend) {
                delete data.business_img
            }

            console.log('submit', values);
            console.log('data', this.from);
            this.$post('/apiUserCenter.html?f=companyCert', data) //企业认证
                .then((response) => {
                    console.log(response)
                    if (response.code != "0") {
                        Toast.fail(response.msg);
                    } else {
                        Toast.success(response.msg);
                        this.$router.replace('/user')
                    }
                })
        },
        back() {
            this.$router.push("/identification")
        },
        amendClear() {
            this.idCard_img = ""
            this.amend = false
        },
        onConfirm(value) {
            this.confirm.value = value;
            this.confirm.showPicker = false;
        },
        onConfirmTime(value) {
            this.confirmTime.value = value;
            this.confirmTime.showPicker = false;
        },
        onTime(time) {
            this.Time.value = moment(time).format('YYYY-MM-DD');
            this.Time.showPicker = false;
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
        Realname(value) {
            console.log(value)
            let data = {
                "keyWord": this.from.realname,
            }
            this.getRealname(data)
        },
        RealnameBlur() {
            this.getRealname("")
        },
        RealnameFocus() {
            let data = {
                "keyWord": this.from.realname,
            }
            this.getRealname(data)
        },
        getRealname(data) {
            console.log(data)
            axios({
                    url: '/console/apiUserCenter.html?f=getCompanyName',
                    method: 'post',
                    data: Qs.stringify(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    }
                })
                .then(response => {
                    console.log(response);
                    this.RealnameArr = response.data.data
                    console.log(this.RealnameArr)
                }, error => {
                    console.log(error);
                })
        },
        getCompanyInfo(value) {
            value = value.replace("<em>", "")
            value = value.replace("</em>", "")
            console.log(value)
                // this.from.realname = value
            let data = {
                "entName": value,
                "userName": "test", //测试
                // "userName": "dxzx",//线上
            }
            axios({
                    url: '/console/apiUserCenter.html?f=bdservicesBaseInfo',
                    method: 'post',
                    data: Qs.stringify(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    }
                })
                .then(response => {
                    // console.log(response.data.data);
                    // this.RealnameArr = response.data.data
                    console.log(response.data.data)
                    let data = response.data.data
                    this.from.realname = data.name
                    this.from.address = data.regLocation
                    this.from.credit_code = data.creditCode
                    this.from.company_nbr = data.phoneNumber
                        // this.from.realname=data.phoneNumber
                    this.from.corporation_name = data.legalPersonName
                    if (data.toTime) {

                        let toTime = Number(data.toTime)

                        this.Time.value = moment(toTime).format('YYYY-MM-DD');
                    } else {
                        console.log("ssssss")
                        this.confirmTime.value = '长期'
                        this.Time.value = ""
                    }
                }, error => {
                    console.log(error);
                })
        },
        zhichiBtn() {
            // let ZCPanel = document.getElementById("zhichiBtnBox")
            // var evObj = document.createEvent('MouseEvents');
            // evObj.initMouseEvent('click', true, true);
            // ZCPanel.dispatchEvent(evObj);
            // this.$router.push('/zhimodule')
            window.location.href = "https://dxykf.caih.com/chat/h5/index.html?sysNum=3677f2094abc4fada9b6e657de8b2cfc&hideBackFlag=false&back=1"
        }
    },
}