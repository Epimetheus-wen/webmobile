import BackTop from "@/components/header/backTop.vue"

export default {
    data: function() {
        return {
            headertitle: "账号安全",
            phone: "18688888888",
            password: "********",
            sublevel: false
        }
    },
    components: {
        BackTop,
    },
    computed: {
        newPhone: function() {
            let mobile = window.localStorage.getItem("mobile")

            let mobile1 = mobile.substr(0, 3) + '****' + mobile.substr(7)
            return mobile1;
        }
    },
    mounted() {
        let path = this.$route.path
        if (path != "/safety") {
            this.sublevel = false
        } else {
            this.sublevel = true
        }
    },
    watch: {
        $route(to) {
            if (to.path != "/safety") {
                this.sublevel = false
            } else {
                this.sublevel = true
            }
        }

    },

}