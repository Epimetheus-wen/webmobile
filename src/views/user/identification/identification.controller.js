import BackTop from "../../../components/header/backTop.vue"

export default {
    data: function() {
        return {
            headertitle: "实名认证",
            sublevel: true
        }
    },
    components: {
        BackTop,
    },
    mounted() {
        let path = this.$route.path
        if (path != "/identification") {
            this.sublevel = false
        } else {
            this.sublevel = true
        }
    },
    watch: {
        $route(to) {
            if (to.path != "/identification") {
                this.sublevel = false
            } else {
                this.sublevel = true
            }
        }

    },
    methods: {
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