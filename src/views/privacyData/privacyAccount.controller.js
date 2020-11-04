import BackTop from "@/components/header/backTop.vue"
export default {
    data: function() {
        return {
            headertitle: "账号管理",
            name: '',
            phone: '未绑定',
            email: '未绑定'
        };
    },
    components: {
        BackTop,
    },
    mounted() {
        this.getuserInfo()
            .then((res) => {
                console.log(res)

                if (res.data.NICKNAME) {
                    this.name = res.data.NICKNAME
                } else {
                    this.name = res.data.USERNAME
                }
                if (res.data.PHONE) {
                    this.phone = res.data.PHONE
                }
                if (res.data.EMAIL) {
                    this.email = res.data.EMAIL
                }
            })
            .catch(() => {

            })
    },
    methods: {
        exit() {
            console.log("退出登录")
                // 清除localStorage中的login字段
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('mobile')
            window.localStorage.removeItem('password')
            window.localStorage.removeItem('platformEntrance')
            localStorage.clear();
            // 跳转至首页
            this.$router.replace('/login/passwordLogin')
        },
        getuserInfo() {
            return new Promise((resolve, reject) => {
                this.$post('/apiLogin.html?f=getInfo')
                    .then((response) => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },
};