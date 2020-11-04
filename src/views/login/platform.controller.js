import BackTop from "@/components/header/backTop.vue"
import { Toast } from 'vant';
export default {
    data: function() {
        return {
            headertitle: "请选择您要登录的平台",
            mobile: '',
            password: ''
        };
    },
    components: {
        BackTop,
    },
    mounted() {
        this.mobile = this.$route.query.mobile
        this.password = this.$route.query.password
    },
    methods: {
        toPlatform(src) {
            if (src == 'cloud') {
                let data = {
                    "mobile": this.mobile,
                    "password": this.password,
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
                        // this.getLoginFrom(response.data)
                        if (response.data.token && response.data.token != "undefined") {
                            this.$router.replace('/user')
                        }
                    })
            }
            if (src == 'privacy') {
                let data = {
                    "mobile": this.mobile,
                    "password": this.password,
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
            }
        }
    },
};