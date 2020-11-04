export default {
    props: {
        headertitle: String
    },
    data: function() {
        return {

        };
    },
    mounted() {
        // console.log("this.$router==========>", this.$route)
        // console.log(this.headertitle)
        console.log("ssssssssssssssssssssss", this.$route.path)
        console.log(this.$route)

    },
    methods: {
        back() {
            let path = this.$route.path;
            let query = this.$route.query
            if (path == "/login/passwordLogin") {
                this.$router.push('/home')
            } else if (path == "/user") {
                this.$router.push('/home')
            } else if (path == "/information" && JSON.stringify(query) !== "{}") {
                this.$router.push('/user')
            } else {
                this.$router.go(-1); //返回上一页
            }

        }
    },
};