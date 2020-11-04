export default {
    data: function() {
        return {
            product: [{
                name: "语音通知",
                url: "/product/voice"
            }, {
                name: "云客服",
                url: "/product/cloudService"
            }, {
                name: "短信",
                url: "/product/message"
            }, {
                name: "隐私号",
                url: "/product/privacy"
            }, {
                name: "号码核验",
                url: "/product/numbercheck"
            }, {
                name: "身份检验",
                url: "/product/identitycheck"
            }, {
                name: "云电销",
                url: "/product/cloudelectricpin"
            }, {
                name: "智能外呼",
                url: "/product/smartCall"
            }],
            arrSearch: [],
            productname: ""
        };
    },
    components: {

    },
    mounted() {
        // this.productSearch("云")

    },
    methods: {
        productSearch(value) {
            // var arr = [];
            value = value.replace(/(^\s*)|(\s*$)/g, "")
            if (value != "") {
                for (var i = 0; i < this.product.length; i++) {
                    if (this.product[i].name.indexOf(value) >= 0) {
                        this.arrSearch.push(this.product[i]);
                    }
                }
            } else {
                this.arrSearch = []
            }
            return this.arrSearch;
        }
    }
};