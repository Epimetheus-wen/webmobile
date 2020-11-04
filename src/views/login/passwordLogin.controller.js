import { mapActions, mapMutations } from 'vuex'
import { Toast } from 'vant';

export default {
    data: function() {
        return {
            loginFrom: {
                mobile: "",
                password: ""
            },
            eyes: true
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
        let token = window.localStorage.getItem("token")
        let platformEntrance = window.localStorage.getItem("platformEntrance")
        if (token && token != "undefined") {
            if (platformEntrance == "1") {
                this.$router.replace('/user')
                console.log("qqqqqqqq")
            } else if (platformEntrance == "2") {
                this.$router.replace('/privacyData')
            }

        }
    },
    methods: {
        ...mapActions(['getLoginFrom']),
        ...mapMutations(['updateLoginFrom']),
        login() {
            let data = {
                "mobile": this.loginFrom.mobile,
                "password": this.loginFrom.password,
            }

            this.$post('/apiLogin.html?f=platformEntrance', data)
                .then((response) => {
                    console.log(response)
                    if (response.msg != "标识" && response.msg != "") {
                        Toast(response.msg);
                    }

                    if (response.code == "0") {
                        console.log(response.data.platformEntrance)
                        if (response.data.platformEntrance == 1) {
                            this.toCloud()
                        } else if (response.data.platformEntrance == 2) {
                            this.toPrivacy()
                        } else if (response.data.platformEntrance == 3) {
                            // this.$router.replace('/platform')
                            this.$router.replace({
                                path: '/platform',
                                query: {
                                    mobile: this.loginFrom.mobile,
                                    password: this.loginFrom.password,
                                }
                            })
                        }
                    }
                })
        },
        toPrivacy() {
            let data = {
                "mobile": this.loginFrom.mobile,
                "password": this.loginFrom.password,
                "platformEntrance": 2
            }

            this.$post('/apiLogin.html?f=pwdLogin', data) //隐私号平台
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    this.$router.replace('/privacyData')
                    window.localStorage.setItem('token', response.data.token)
                    window.localStorage.setItem('loginTime', new Date().getTime())
                    window.localStorage.setItem('mobile', data.mobile)
                    window.localStorage.setItem('password', data.password)
                    window.localStorage.setItem('platformEntrance', 2)
                })

        },
        toCloud() {
            let data = {
                "mobile": this.loginFrom.mobile,
                "password": this.loginFrom.password,
                "platformEntrance": 1
            }
            console.log("data========>", data)


            console.log("LoginFrom", this.LoginFrom)
            let token = window.localStorage.getItem("token")
            if (token && token != "undefined") {
                this.$router.replace('/user')
            }

            this.$post('/apiLogin.html?f=pwdLogin', data) //登录云通信平台
                .then((response) => {
                    console.log(response)
                    Toast(response.msg);
                    console.log("res.data.token", response.data.token)
                    window.localStorage.setItem('token', response.data.token)
                    window.localStorage.setItem('loginTime', new Date().getTime())
                    window.localStorage.setItem('mobile', data.mobile)
                    window.localStorage.setItem('password', data.password)
                    window.localStorage.setItem('platformEntrance', 1)
                    response.data.LoginFrom = {
                        "mobile": data.mobile,
                        "token": response.data.token
                    }

                    if (response.code != "0") {
                        window.localStorage.removeItem('token')
                        window.localStorage.removeItem('mobile')
                    }
                    this.getLoginFrom(response.data)
                    if (response.data.token && response.data.token != "undefined") {
                        this.$router.replace('/user')
                    }
                })
        },
        eyesPassword() {
            if (this.eyes) {
                this.eyes = false
            } else {
                this.eyes = true
            }
            console.log(this.eyes)
        }
    },
};