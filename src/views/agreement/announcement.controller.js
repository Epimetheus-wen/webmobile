import BackTop from "@/components/header/backTop.vue"
export default {
    data: function() {
        return {
            headertitle: "公告详情",
            content: ""
        };
    },
    components: {
        BackTop,
    },
    mounted() {
        console.log(this.$route.query.data)
        this.content = JSON.parse(this.$route.query.data)
    },
};