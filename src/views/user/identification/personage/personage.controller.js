import BackTop from "@/components/header/backTop.vue"
import { mapActions, mapMutations } from 'vuex'

// import { Dialog } from 'vant';
import { Toast } from 'vant';

export default {
    data: function() {
        return {
            headertitle: "个人认证",
            sublevel: true,
            from: {
                name: "",
                idCard: "",
                iphone: "",
                bankName: "",
                bankBranchName: "",
                bankAccount: "",
                idCard_img: {
                    front: [],
                    back: [],
                },
            },
            amend1: false,
            amend2: false,
            idCard_img: {
                front: "",
                back: "",
            }
        }
    },
    components: {
        BackTop,
    },
    computed: {
        UserCertInfo() {
            return this.$store.state.user.userCertInfo
        },
    },
    mounted() {
        this.getUserCertInfo()
        setTimeout(() => {
            console.log(this.$store.state.user.userCertInfo)
            let data = this.$store.state.user.userCertInfo
            if (data.user_type == "1") {
                this.from.name = data.realname
                this.from.iphone = data.company_nbr
                this.from.idCard = data.corporation_idno
                this.from.iphone = data.company_nbr
                this.from.bankName = data.bank_name
                this.from.bankBranchName = data.bank_branch_name
                this.from.bankAccount = data.bank_account
            }

            console.log(this.$store.state.user.userCertInfo)
            if (this.$store.state.user.userCertInfo != "" && this.$store.state.user.userCertInfo != undefined) {
                if (this.$store.state.user.userCertInfo.corporation_card_img != "") {
                    this.amend1 = true
                    this.amend2 = true
                    this.idCard_img.front = data.corporation_card_img[0]
                    this.idCard_img.back = data.corporation_card_img[1]
                }

            }
        }, 1000)

    },
    methods: {
        ...mapActions(['getUserCertInfo']),
        ...mapMutations(['updateUserCertInfo']),
        onSubmit(values) {
            console.log('submit', values);
            console.log('from', this.from);
            let img0 = ''
            let img1 = ''
            if (this.amend1) {
                img0 = this.idCard_img.front
            } else {
                if (this.from.idCard_img.front[0]) {
                    img0 = this.from.idCard_img.front[0].content
                }
            }
            if (this.amend2) {
                img1 = this.idCard_img.back
            } else {
                if (this.from.idCard_img.front[0] && this.from.idCard_img.back[0]) {
                    img1 = this.from.idCard_img.back[0].content
                }
            }
            // if (this.from.idCard_img.front[0] && this.from.idCard_img.back[0]) {
            //     img0 = this.from.idCard_img.front[0].content
            //     img1 = this.from.idCard_img.back[0].content
            // }

            let data = {
                "realname": this.from.name,
                "company_nbr": this.from.iphone,
                "corporation_idno": this.from.idCard,
                "bank_name": this.from.bankName,
                "bank_branch_name": this.from.bankBranchName,
                "bank_account": this.from.bankAccount,
                "img": [img0, img1]
            }
            console.log(data)
            Toast.loading({
                duration: 0,
                message: '认证中...',
                forbidClick: true,
                loadingType: 'spinner',
            });
            this.$post('/apiUserCenter.html?f=personCert', data) //个人认证
                .then((response) => {
                    console.log(response)
                    if (response.code != "0") {
                        Toast.fail(response.msg);
                    } else {
                        Toast.success(response.msg);
                        this.$router.replace('/user')
                    }
                })
        },
        back() {
            this.$router.push("/identification")
        },
        amendClear(id) {
            if (id == 1) {
                console.log(id)
                this.idCard_img.front = ""
                this.amend1 = false
            }
            if (id == 2) {
                this.idCard_img.back = ""
                this.amend2 = false
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