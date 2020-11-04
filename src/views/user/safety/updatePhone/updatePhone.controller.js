import BackTop from "@/components/header/backTop.vue"
import SIdentify from "../../../../components/identify/identify.vue"
import { Toast } from 'vant';

export default {
    data: function() {
        return {
            headertitle: "修改手机号",
            step: 1,
            stepTop: {
                imgCode: "",
                noteCode: ""
            },
            stepcenter: {
                newPhone: "",
                noteCode: "",
                newPassword: "",
                verifyPassword: ""
            },
            identifyCode: "",
            timerLogin: 5,
            countDown1: 60,
            countDown2: 60,
        }
    },
    components: {
        BackTop,
        SIdentify
    },
    computed: {
        oldPhone() {
            return window.localStorage.getItem("mobile");
        }
    },
    mounted() {
        this.refreshCode()

    },
    watch: {

    },
    methods: {
        refreshCode() { //获取图形验证码
            this.$post('//apiUserUpdate.html?f=getImgVerification', {}) //
                .then((response) => {
                    window.localStorage.setItem('loginTime', new Date().getTime())
                    console.log(response)
                    this.identifyCode = response.data.ImgVerification
                        // Toast(response.msg);
                })
        },
        getupCloudCode() {
            let data = {
                "type": "updatephone",
                "mobile": this.oldPhone
            }
            this.$post('/apiVerification.html', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        let countDownTime = setInterval(() => { //倒计时
                            this.countDown1--;
                            if (this.countDown1 == 0) {
                                this.countDown1 = 60
                                clearInterval(countDownTime);
                            }
                        }, 1000)
                    }

                })
        },
        nextStep() { //下一步
            let data = {
                "imgVerification": this.identifyCode,
                "verification": this.stepTop.noteCode
            }
            this.$post('/apiUserUpdate.html?f=verifChange', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        this.step = 2
                        console.log(this.step)
                    }
                })
        },
        getnewCloudCode() {
            let data = {
                "type": "newPhone",
                "mobile": this.stepcenter.newPhone
            }

            this.$post('/apiVerification.html', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        let countDownTime = setInterval(() => { //倒计时
                            this.countDown2--;
                            if (this.countDown2 == 0) {
                                this.countDown2 = 60
                                clearInterval(countDownTime);
                            }
                        }, 1000)
                    }

                })
        },
        verifyStep() {
            let data = {
                "mobile": this.stepcenter.newPhone,
                "password": this.stepcenter.newPassword,
                "verification": this.stepcenter.noteCode
            }
            if (this.stepcenter.newPassword != this.stepcenter.verifyPassword) {
                Toast("两次输入密码不同")
                return;
            }
            if (this.stepcenter.newPassword.length < 8 || this.stepcenter.verifyPassword.length > 16) {
                Toast("请输入8-16位密码");
                return;
            }
            let str = this.stepcenter.newPassword
                // var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
            var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9\-!@#$%*.]{8,16}$/
            if (!reg.test(str)) {
                Toast("请输入8-16位密码，字母加数字的组合");
                return;
            }
            console.log(data)
            this.$post('/apiUserUpdate.html?f=newPhone', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        this.step = 3
                        console.log(this.step)
                        let timerLogin = setInterval(() => { //倒计时跳转登录页
                            this.timerLogin--;
                            if (this.timerLogin == 0) {
                                clearInterval(timerLogin);
                                window.localStorage.removeItem('token')
                                this.$router.replace('/login/passwordLogin')
                            }
                        }, 1000)
                    }
                })
        },
        goLogin() {
            console.log("goLogin")
        }
    },

}