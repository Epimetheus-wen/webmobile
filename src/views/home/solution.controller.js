import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css';


export default {
    data: function() {
        return {
            arrItem: [{
                name: 'swiperSlide1',
                imgUrl: require('../../assets/images/home/commerce.png'),
                title: "电商·物流",
                text: "实现全流程全单据流的号码保护，保障双方沟通的同时提升平台对第三方卖家的服务管控力搭配扫码呼等定制服务，可大大优化配送员工作效率与工作体验",
            }, {
                name: 'swiperSlide2',
                imgUrl: require('../../assets/images/home/trip.png'),
                title: "互联网出行",
                text: "适用于隐私号业务，全程保护双方的号码安全，后台通话全程录音，有效帮助企业管控司机服务质量，查找纠纷原因，司乘人员人身安全问题",
            }, {
                name: 'swiperSlide3',
                imgUrl: require('../../assets/images/home/education.png'),
                title: "在线教育",
                text: "语音通知+挂机短信，适用于上课提醒、存量营销、用户激活等场景，帮助用户大幅提升转化",
            }],
        }
    },
    mounted: function() {
        new Swiper('#swiper-container2', {
            loop: false, // 循环模式选项
            effect: 'coverflow',
            slidesPerView: 1.08,
            centeredSlides: true,
            initialSlide: 1,
            coverflow: {
                rotate: 0,
                stretch: 10,
                depth: 40,
                modifier: 2,
                slideShadows: false
            },
        })
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