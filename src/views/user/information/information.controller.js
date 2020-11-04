import BackTop from "@/components/header/backTop.vue"
import { mapActions, mapMutations } from 'vuex'
import { Toast } from 'vant';
export default {
    data: function() {
        return {
            headertitle: "账号信息",

        }
    },
    components: {
        BackTop,
    },
    beforeCreate() {


    },
    mounted() {
        //判断进入路径
        let query = this.$route.query
        console.log(query)

        if (query.mobile && query.sign && query.time) {
            let data = {
                "mobile": query.mobile,
                "sign": query.sign,
                "sign_time": query.time,
            }
            this.$post('/apiLogin.html?f=initLogin', data) //
                .then((response) => {
                    console.log(response)
                    localStorage.clear();
                    if (response.code != 0) {
                        Toast(response.msg);
                        this.$router.replace('/user')
                    } else {
                        window.localStorage.setItem('token', response.data.token)
                        window.localStorage.setItem('loginTime', new Date().getTime())
                        window.localStorage.setItem('mobile', data.mobile)
                        window.localStorage.setItem('sign', data.sign)
                        window.localStorage.setItem('signTime', data.sign_time)
                        window.localStorage.setItem('platformEntrance', 1)
                        this.getUserCertInfo()
                    }


                })
        } else {
            this.getUserCertInfo()
        }
        console.log(this.UserCenterInfo)
    },
    computed: {
        UserCertInfo() {
            return this.$store.state.user.userCertInfo
        },
        UserCenterInfo() {
            return this.$store.state.user.UserCenterInfo
        },
    },
    methods: {
        ...mapActions(['getUserCertInfo']),
        ...mapMutations(['updateUserCertInfo']),
        companyTo(id) {
            this.$router.push({
                path: `/identification/company`,
                query: {
                    id: id
                }
            })
        },
        everyoneTo(id) {
            this.$router.push({
                path: `/identification/personage`,
                query: {
                    id: id
                }
            })
        },
        renzhengTo(id, data) {
            console.log(id, data)
            if (id == "1") {
                this.$router.push({
                    path: `/identification/personage`,
                    query: {
                        id: id
                    }
                })
            } else if (id == "2") {
                this.$router.push({
                    path: `/identification/company`,
                    query: {
                        id: id
                    }
                })
            }
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