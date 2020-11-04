import Header from "@/components/header/header.vue";
import HeaderProduct from "./home_product.vue";
import Solution from "./solution.vue";
import Footer from "@/components/footer.vue"
import Swiper from 'swiper'

import '../../../node_modules/swiper/dist/css/swiper.css';
import { mapActions, mapMutations } from 'vuex'

export default {
    data: function() {
        return {
            product_name: "云通信",
            arrItem1: [{
                    name: 'swiperSlide1',
                    imgUrl: require('../../assets/images/home/banner.png'),
                    title: "注册享免费体验",
                    text: "新用户立即注册可享短信免费体验！",
                    botton_img: require('../../assets/images/home/register.png'),
                    to: "/register"
                },
                {
                    name: 'swiperSlide2',
                    imgUrl: require('../../assets/images/home/banner2.png'),
                    title: "语音通知+挂机短信",
                    text: "最大效率触达客户，确保用户知晓信息",
                    botton_img: require('../../assets/images/home/xiangqing.png'),
                    to: "/product/voice"
                }
            ],
            arrItem3: [{
                    name: 'swiperSlide1',
                    imgUrl: require('../../assets/images/home/case1.png'),
                    title: "应用产品：隐私号",
                },
                {
                    name: 'swiperSlide2',
                    imgUrl: require('../../assets/images/home/case2.png'),
                    title: "应用产品：易联云",
                },
                {
                    name: 'swiperSlide3',
                    imgUrl: require('../../assets/images/home/case3.png'),
                    title: "应用产品：短信服务",
                },
            ],
            screenWidth: document.body.clientWidth,
            swiper3Obj: {
                loop: false, // 循环模式选项
                effect: 'coverflow',
                slidesPerView: 1.515,
                centeredSlides: true,
                initialSlide: 1,
                coverflow: {
                    rotate: 0,
                    stretch: 10,
                    depth: 40,
                    modifier: 8,
                    slideShadows: false
                },
            },
            textArr: [{ title: "" }, { title: "" }, { title: "" }],
            number: 0
        }
    },
    computed: {
        text() {
            return {
                id: this.number,
                val: this.textArr[this.number]
            }
        },
        TrumpetList() {
            return this.$store.state.user.trumpetList
        },
    },
    components: {
        Header,
        HeaderProduct,
        Solution,
        Footer
    },
    beforeCreate() {
        // console.log("sssssssssssssssseeeeee")
    },
    mounted: function() {
        // setTimeout(() => {
        this.startMove()
            // }, 1000)

        new Swiper('#swiper-container1', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: 7000,
        })
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
                console.log(that.screenWidth)
            })()
        }
        if (0 < that.screenWidth <= 320) {
            that.swiper3Obj.slidesPerView = 1.42
        }
        if (that.screenWidth >= 320) {
            that.swiper3Obj.slidesPerView = 1.515
        }
        if (that.screenWidth >= 414) {
            that.swiper3Obj.slidesPerView = 1.575
        }
        if (that.screenWidth >= 428) {
            that.swiper3Obj.slidesPerView = 1.7
        }
        if (that.screenWidth >= 535) {
            that.swiper3Obj.slidesPerView = 1.8
        }
        if (that.screenWidth >= 650) {
            that.swiper3Obj.slidesPerView = 1.9
        }
        if (that.screenWidth >= 830) {
            that.swiper3Obj.slidesPerView = 1.925
        }
        if (that.screenWidth >= 1080) {
            that.swiper3Obj.slidesPerView = 2.02
        }
        new Swiper('#swiper-container3', that.swiper3Obj)

        // console.log("TrumpetList", this.TrumpetList)
        if (JSON.stringify(this.TrumpetList) == "{}") {
            this.getTrumpetList()
        }

    },
    methods: {
        ...mapActions(['getTrumpetList']),
        ...mapMutations(['updateTrumpetList']),
        startMove() {
            this.textArr = this.TrumpetList
                // for (let i = 0; i < this.TrumpetList.length; i++) {
                //     this.textArr.push(this.TrumpetList[i].title)
                // }
                // eslint-disable-next-line
            let timer = setTimeout(() => {
                if (this.number == this.TrumpetList.length - 1) {
                    this.number = 0;
                } else {
                    this.number += 1;
                }
                this.startMove();
            }, 6000); // 滚动停顿
        },
        goTrumpet(data) {
            console.log(data)
            this.$router.push({
                path: "announcement",
                query: { "data": JSON.stringify(data) }
            })
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