import BackTop from "@/components/header/backTop.vue"
import SIdentify from "../../../../components/identify/identify.vue"
import { Toast } from 'vant';

export default {
    data: function() {
        return {
            headertitle: "修改密码",
            step: 1,
            stepTop: {
                noteCode: ""
            },
            stepCenter: {
                newPassword: "",
                verifyPassword: ""
            },
            timerLogin: 5,
            countDown: 60,
            mobileInput: ''
        }
    },
    components: {
        BackTop,
        SIdentify
    },
    computed: {
        oldPhone() {
            if (window.localStorage.getItem("mobile")) {
                return window.localStorage.getItem("mobile");
            } else {
                return "0"
            }
        }
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        getCloudCode() {
            let data = {
                "type": "laterPassword",
                "mobile": this.oldPhone
            }
            this.$post('/apiVerification.html', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        let countDownTime = setInterval(() => { //倒计时
                            this.countDown--;
                            if (this.countDown == 0) {
                                this.countDown = 60
                                clearInterval(countDownTime);
                            }
                        }, 1000)
                    }

                })
        },
        getfind() {
            let data = {
                "type": "laterPassword",
                "mobile": this.mobileInput
            }
            this.$post('/apiVerification.html', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        let countDownTime = setInterval(() => { //倒计时
                            this.countDown--;
                            if (this.countDown == 0) {
                                this.countDown = 60
                                clearInterval(countDownTime);
                            }
                        }, 1000)
                    }

                })
        },
        nextStep() { //下一步
            let data = {
                "verification": this.stepTop.noteCode,
                "mobile": this.oldPhone
            }
            this.$post('/apiUserUpdate.html?f=verifUpdatePwd', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        this.step = 2
                        console.log(this.step)
                    }
                })

        },
        nextStep1() {
            let data = {
                "verification": this.stepTop.noteCode,
                "mobile": this.mobileInput
            }
            this.$post('/apiUserUpdate.html?f=verifUpdatePwd', data) //
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        this.step = 2
                        console.log(this.step)
                    }
                })
        },
        verifyStep() {

            let data = {
                "password": this.stepCenter.newPassword,
                "mobile": this.oldPhone
            }
            if (this.stepCenter.newPassword != this.stepCenter.verifyPassword) {
                Toast("两次输入密码不同")
                return;
            }
            if (this.stepCenter.newPassword.length < 8 || this.stepCenter.newPassword.length > 16) {
                Toast("请输入8-16位密码");
                return;
            }

            let str = this.stepCenter.newPassword
                // var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
            var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9\-!@#$%*.]{8,16}$/
            if (!reg.test(str)) {
                Toast("请输入8-16位密码，字母加数字的组合");
                return;
            }
            this.$post('/apiUserUpdate.html?f=updatePwd', data) //
                .then((response) => {
                    Toast(response.msg);
                    if (response.code === 0) {
                        this.step = 3
                        let timerLogin = setInterval(() => { //倒计时跳转登录页
                            this.timerLogin--;
                            if (this.timerLogin == 0) {
                                clearInterval(timerLogin);
                                window.localStorage.removeItem('token')
                                window.localStorage.removeItem('mobile')
                                this.$router.replace('/login/passwordLogin')
                            }
                        }, 1000)
                    }
                })
        },
        verifyStep1() {

            let data = {
                "password": this.stepCenter.newPassword,
                "mobile": this.mobileInput
            }
            if (this.stepCenter.newPassword != this.stepCenter.verifyPassword) {
                Toast("两次输入密码不同")
                return;
            }
            if (this.stepCenter.newPassword.length < 8 || this.stepCenter.newPassword.length > 16) {
                Toast("请输入8-16位密码");
                return;
            }

            let str = this.stepCenter.newPassword
                // var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
            var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9\-!@#$%*.]{8,16}$/
            if (!reg.test(str)) {
                Toast("请输入8-16位密码，字母加数字的组合");
                return;
            }
            this.$post('/apiUserUpdate.html?f=updatePwd', data) //
                .then((response) => {
                    Toast(response.msg);
                    if (response.code === 0) {
                        this.step = 3
                        let timerLogin = setInterval(() => { //倒计时跳转登录页
                            this.timerLogin--;
                            if (this.timerLogin == 0) {
                                clearInterval(timerLogin);
                                window.localStorage.removeItem('token')
                                window.localStorage.removeItem('mobile')
                                this.$router.replace('/login/passwordLogin')
                            }
                        }, 1000)
                    }
                })
        },
        goLogin() {
            console.log("goLogin")
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('mobile')
            this.$router.replace('/login/passwordLogin')
        }
    },

}