import Footer from "@/components/footer.vue"
// import Swiper from 'swiper'
// import '../../../../node_modules/swiper/dist/css/swiper.css';

export default {
    data: function() {
        return {
            navIndex: 0,
            searchBarFixed: false,
            // arrItem4: [{
            //         name: 'swiperSlide1',
            //         imgUrl: require('../../../assets/images/cloudService/financial.png'),
            //         title: "金融",
            //     },
            //     {
            //         name: 'swiperSlide2',
            //         imgUrl: require('../../../assets/images/cloudService/education.png'),
            //         title: "教育",
            //     },
            //     {
            //         name: 'swiperSlide3',
            //         imgUrl: require('../../../assets/images/cloudService/culture.png'),
            //         title: "文化娱乐",
            //     },
            //     {
            //         name: 'swiperSlide4',
            //         imgUrl: require('../../../assets/images/cloudService/ec.png'),
            //         title: "电商",
            //     },
            //     {
            //         name: 'swiperSlide4',
            //         imgUrl: require('../../../assets/images/cloudService/logistics.png'),
            //         title: "物流",
            //     },
            //     {
            //         name: 'swiperSlide4',
            //         imgUrl: require('../../../assets/images/cloudService/O2O.png'),
            //         title: "O2O",
            //     },
            //     {
            //         name: 'swiperSlide4',
            //         imgUrl: require('../../../assets/images/cloudService/medical.png'),
            //         title: "医疗",
            //     },
            //     {
            //         name: 'swiperSlide4',
            //         imgUrl: "#",
            //         title: "",
            //     },
            // ],
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener('scroll', this.onScroll, false)

        // new Swiper('#swiper-container4', {
        //     loop: false, // 循环模式选项
        //     slidesPerView: 2.56,
        // })
    },
    destroy() {
        // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
        window.removeEventListener('scroll', this.onScroll)
    },
    components: {
        Footer
    },
    methods: {
        onScroll() {
            // 获取所有锚点元素
            const navContents = document.querySelectorAll('.home__content_comp .comp_item')
                // console.log(navContents.length)
                // 所有锚点元素的 offsetTop
            const offsetTopArr = []
            navContents.forEach(item => {
                    offsetTopArr.push(item.offsetTop)
                })
                // 获取当前文档流的 scrollTop
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                // 定义当前点亮的导航下标
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                // 那么此时导航索引就应该是n了
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n + 1
                }
            }
            navIndex = navIndex >= navContents.length ? navIndex - 1 : navIndex;
            // console.log(navIndex)
            this.navIndex = navIndex

            // 组件吸附顶部
            try {
                var offsetTop = document.querySelector('.navigate__bar').offsetTop;
                if (scrollTop > offsetTop) {
                    this.searchBarFixed = true;
                } else {
                    this.searchBarFixed = false;
                }
            } catch (err) {
                //在此处理错误
            }

        },
        scrollTo(index) {
            // 获取目标的 offsetTop
            // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
            // const foundEl = document.querySelector(`.home__content_comp div:nth-child(${index + 1})`);
            // const elClientHeight = foundEl.clientHeight;

            const targetOffsetTop = document.querySelector(`.home__content_comp .comp_item:nth-child(${index+1})`).offsetTop - 40
                // 获取当前 offsetTop
            var offsetTop2 = document.getElementsByClassName("header")[0].clientHeight;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
            const STEP = 50
                // 判断是往下滑还是往上滑
            if (scrollTop > targetOffsetTop) {
                // 往上滑
                smoothUp()
            } else {
                // 往下滑
                smoothDown()
            }
            // 定义往下滑函数
            function smoothDown() {
                // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
                if (scrollTop < targetOffsetTop) {
                    // 如果和目标相差距离大于等于 STEP 就跳 STEP
                    // 否则直接跳到目标点，目标是为了防止跳过了。
                    if (targetOffsetTop - scrollTop >= STEP) {
                        scrollTop += STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop - offsetTop2
                    document.documentElement.scrollTop = scrollTop - offsetTop2
                        // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
                    requestAnimationFrame(smoothDown)
                }
            }
            // 定义往上滑函数
            function smoothUp() {
                if (scrollTop > targetOffsetTop) {
                    if (scrollTop - targetOffsetTop >= STEP) {
                        scrollTop -= STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop - offsetTop2
                    document.documentElement.scrollTop = scrollTop - offsetTop2
                    requestAnimationFrame(smoothUp)
                }
            }
        },
        scrollLeft() {
            console.log("左边===========>", document.querySelector('.navigate__bar').scrollLeft)
            let widthLi = document.getElementsByClassName("searchBar")[0].firstChild.firstChild.offsetWidth;
            let Left = document.querySelector('.navigate__bar').scrollLeft
            console.log(widthLi)
            document.querySelector('.navigate__bar').scrollLeft = Left - widthLi
            let navIndex = this.navIndex
            this.scrollTo(navIndex - 1)
        },
        scrollRight() {
            console.log("右边===========>", document.querySelector('.navigate__bar').scrollLeft)
            let widthLi = document.getElementsByClassName("searchBar")[0].firstChild.firstChild.offsetWidth;
            let Left = document.querySelector('.navigate__bar').scrollLeft
            console.log(widthLi)
            document.querySelector('.navigate__bar').scrollLeft = Left + widthLi
            let navIndex = this.navIndex
            this.scrollTo(navIndex + 1)
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