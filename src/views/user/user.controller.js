import BackTop from "@/components/header/backTop.vue"
import Userinfo from "./userinfo.vue"
import { mapActions, mapMutations } from 'vuex'
// import { Dialog } from 'vant';
import router from '../../router/index'
export default {
    data: function() {
        return {
            headertitle: "我的账户",
        };
    },
    components: {
        BackTop,
        Userinfo,
    },
    beforeRouteEnter(to, from, next) {

        let res = window.localStorage.getItem("token")
        let platformEntrance = window.localStorage.getItem("platformEntrance")
            // 1-如果res不存在，则表示用户未登录
        if (res) {
            if (res != "" && platformEntrance == 1) {
                console.log("登录成功", res)
                next()
            } else if (res != "" && platformEntrance == 2) {
                router.push('/privacyData', () => {}, () => {})
            } else {
                // 跳转至登录页
                router.push('/login/passwordLogin', () => {}, () => {})
                    // next('/login/passwordLogin',)
            }
        } else {
            // 跳转至登录页
            next('/login/passwordLogin')
        }
    },
    computed: {
        UserCenterInfo() {
            return this.$store.state.user.UserCenterInfo
        },
        LoginFrom() {
            return this.$store.state.user.LoginFrom
        }
    },
    mounted() {
        console.log("更新登录")
        this.$updateToken(1)
            .then(() => {
                this.getUserCenterInfo()
            })
            .catch(() => {
                this.getUserCenterInfo()
            })
        setInterval(() => {
            console.log("更新登录")
            this.$updateToken(1)
                .then(() => {
                    this.getUserCenterInfo()
                })
                .catch(() => {
                    this.getUserCenterInfo()
                })
        }, (4 * 60 * 60 * 1000))

        console.log("this.UserCenterInfo=====>", this.UserCenterInfo)

    },
    updated() {
        console.log('UserCenterInfo', this.UserCenterInfo)
    },
    methods: {
        ...mapActions(['getUserCenterInfo']),
        ...mapMutations(['updateUserCenterInfo', 'updatedataModulefirst']),
        // 退出登录
        logout() {
            // 清除localStorage中的login字段
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('mobile')
            window.localStorage.removeItem('password')
            window.localStorage.removeItem('platformEntrance')
            localStorage.clear();
            // 跳转至首页
            this.$router.replace('/login/passwordLogin')
            this.updatedataModulefirst()
            window.location.reload()
        },
        // userinfo() {
        //     this.$post('/apiLogin.html?f=getInfo')
        //         .then((response) => {
        //             console.log(response)
        //         })
        // },
        reminder(src) {
            // Dialog.alert({
            //         title: '提示',
            //         message: '即将上线  敬请期待',
            //         confirmButtonText: "我知道了"
            //     })
            //     .then(() => {
            //         // on confirm
            //     })
            if (src == 'income') {
                this.$router.push('/dataModule/income')
            }
            if (src == 'monitoring') {

                this.$router.push('/dataModule/monitoring')
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
    }
};