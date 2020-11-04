import { mapActions, mapMutations } from 'vuex'
import { Toast } from 'vant';

export default {
    data: function() {
        return {
            loginFrom: {
                phone: "",
                cloudCode: ""
            },
            countDown: 60,

            eyes: false
        };
    },
    components: {

    },
    computed: {
        LoginFrom() {
            return this.$store.state.user.LoginFrom
        }
    },
    updated() {
        // let token = window.localStorage.getItem("token")
        // if (token && token != "undefined") {
        //     this.$router.replace('/user')
        // }
    },
    methods: {
        ...mapActions(['getLoginFrom']),
        ...mapMutations(['updateLoginFrom']),
        login() {
            console.log("login")
            let data = {
                "mobile": this.loginFrom.phone,
                "verificationCode": this.loginFrom.cloudCode
            }
            this.$post('/apiLogin.html?f=verifLogin', data) //登录
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    window.localStorage.setItem('token', response.data.token)
                    window.localStorage.setItem('loginTime', new Date().getTime())
                    window.localStorage.setItem('mobile', data.mobile)
                    window.localStorage.setItem('platformEntrance', 1)
                    response.data.LoginFrom = {
                        "mobile": data.mobile,
                        "token": response.data.token
                    }
                    this.getLoginFrom(response.data)
                    if (response.code != "0") {
                        window.localStorage.removeItem('token')
                        window.localStorage.removeItem('mobile')
                        window.localStorage.removeItem('platformEntrance')
                    }
                    if (response.data.token && response.data.token != "undefined") {
                        this.$router.replace('/user')
                        if (response.code === 0) {
                            Toast(response.msg);
                        }
                    }
                })
        },
        getCloudCode() {
            let data = {
                "type": "login",
                "mobile": this.loginFrom.phone
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
        }
    },
};