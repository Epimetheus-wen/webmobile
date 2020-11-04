import BackTop from "@/components/header/backTop.vue"
import { Toast } from 'vant';
import { mapActions, mapMutations } from 'vuex'

export default {
    data: function() {
        return {
            headertitle: "账号注册",
            registerFrom: {
                mobile: "",
                cloudCode: "",
                password1: "",
                password2: ""
            },
            countDown: 60,
            eyes: {
                neweyes: true,
                affirm: true,
            },
            agreement: true,
            inputRead: true,
        }
    },
    components: {
        BackTop,
    },
    mounted() {
        setTimeout(() => {
            this.inputRead = false
        }, 1000)

    },
    methods: {
        ...mapActions(['getLoginFrom']),
        ...mapMutations(['updateLoginFrom']),
        register() {
            // console.log("register")
            if (this.registerFrom.password1 != this.registerFrom.password2) {
                Toast("两次输入密码不同")
                return;
            }
            if (this.registerFrom.password1.length < 8 || this.registerFrom.password1.length > 16) {
                Toast("请输入8-16位密码");
                return;
            }
            let str = this.registerFrom.password1
                // var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
            var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9\-!@#$%*.]{8,16}$/
            if (!reg.test(str)) {
                Toast("请输入8-16位密码，字母加数字的组合");
                return;
            }
            if (!this.agreement) {
                Toast("请阅读并勾选协议");
                return;
            }
            let data = {
                "mobile": this.registerFrom.mobile,
                "verification": this.registerFrom.cloudCode,
                "password": this.registerFrom.password1,
            }
            console.log(data)
            this.$post('/apiRegister.html?f=register', data) //
                .then((response) => {
                    window.localStorage.setItem('loginTime', new Date().getTime())
                    console.log(response)
                    Toast(response.msg);
                    if (response.code === 0) {
                        window.localStorage.setItem('token', response.data.token)
                        window.localStorage.setItem('loginTime', new Date().getTime())
                        window.localStorage.setItem('mobile', data.mobile)
                        response.data.LoginFrom = {
                            "mobile": data.mobile,
                            "token": response.data.token
                        }
                        this.getLoginFrom(response.data)
                        if (response.data.token && response.data.token != "undefined") {
                            this.$router.replace('/user')
                        }
                    }
                })
        },
        getCloudCode() {
            let data = {
                "type": "register",
                "mobile": this.registerFrom.mobile
            }
            this.$post('/apiVerification.html', data) //
                .then((response) => {
                    window.localStorage.setItem('loginTime', new Date().getTime())
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
        eyesPassword() {
            if (this.eyes.neweyes) {
                this.eyes.neweyes = false
            } else {
                this.eyes.neweyes = true
            }
            console.log(this.eyes.neweyes)
        },
        eyesAffirmPassword() {
            if (this.eyes.affirm) {
                this.eyes.affirm = false
            } else {
                this.eyes.affirm = true
            }
            console.log(this.eyes.affirm)
        },
        agreementBtn() {
            if (this.agreement) {
                this.agreement = false
            } else {
                this.agreement = true
            }
        }
    },
};