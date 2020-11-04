import DataModuleHeader from "../../../components/header/dataModuleHeader.vue";

export default {
    data: function() {
        return {
            headertitle: "收支详情",
            content: {}
        };
    },
    components: {
        DataModuleHeader
    },

    mounted() {
        this.content = JSON.parse(this.$route.query.data)

    },
    methods: {
        zhichiBtn() { //客服
            // let ZCPanel = document.getElementById("zhichiBtnBox")
            // var evObj = document.createEvent('MouseEvents');
            // evObj.initMouseEvent('click', true, true);
            // ZCPanel.dispatchEvent(evObj);
            // this.$router.push('/zhimodule')
            window.location.href = "https://dxykf.caih.com/chat/h5/index.html?sysNum=3677f2094abc4fada9b6e657de8b2cfc&hideBackFlag=false&back=1"
        }
    }
};