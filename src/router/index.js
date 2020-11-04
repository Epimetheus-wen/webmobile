import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/home.vue'
import User from '@/views/user/user.vue'
import Identification from '@/views/user/identification/identification.vue'
import Information from '@/views/user/information/information.vue'
import Safety from '@/views/user/safety/safety.vue'
import UpdatePhone from '@/views/user/safety/updatePhone/updatePhone.vue'
import UpdatePassword from '@/views/user/safety/updatePassword/updatePassword.vue'
import Company from '@/views/user/identification/company/company.vue'
import Personage from '@/views/user/identification/personage/personage.vue'
import Product from "@/views/product/Product.vue"
import CloudService from '@/views/product/cloudService/cloudService.vue'
import Voice from '@/views/product/voice/voice.vue'
import Privacy from '@/views/product/privacy/privacy.vue'
import Numbercheck from '@/views/product/numbercheck/numbercheck.vue'
import Identitycheck from '@/views/product/identitycheck/identitycheck.vue'
import Cloudelectricpin from '@/views/product/cloudelectricpin/cloudelectricpin.vue'
import SmartCall from '@/views/product/smartCall/smartCall.vue'

import Message from '@/views/product/message/message.vue'
import Login from '@/views/login/login.vue'
import CloudLogin from '@/views/login/cloudLogin.vue'
import PasswordLogin from '@/views/login/passwordLogin.vue'
import Register from '@/views/login/register.vue'
import Announcement from '@/views/agreement/announcement.vue'
import Agreement from '@/views/agreement/agreement.vue'
import Zhimodule from '../components/zhimodule.vue'

// 数据监控
import DataModule from '../views/dataModule/dataModule.vue'
import Income from '../views/dataModule/income/income.vue'
import IncomeParticulars from '../views/dataModule/income/incomeParticulars.vue'
import Monitoring from '../views/dataModule/monitoring/monitoring.vue'

import PrductData from '../views/dataModule/productData/productData.vue'
import VoiceData from '../views/dataModule/productData/voiceData/voiceData.vue'
import MessageData from '../views/dataModule/productData/messageData/messageData.vue'
import IdData from '../views/dataModule/productData/idData/idData.vue'
import PhoneData from '../views/dataModule/productData/phoneData/phoneData.vue'

import Platform from '../views/login/platform.vue'
import PrivacyData from '../views/privacyData/privacyData.vue'
import PrivacyAccount from '../views/privacyData/privacyAccount.vue'


const router = new VueRouter({
    // mode: 'history',
    // base: '/web/',
    routes: [{
            path: '/',
            redirect: '/home',
            name: "home",
        },
        {
            path: '/home',
            component: Home,
            name: "home",
        },
        {
            path: '/user',
            component: User,
            name: "user",
        },
        {
            path: '/identification',
            component: Identification,
            name: "identification",
            children: [{
                path: 'company',
                component: Company,
                name: "company",
            }, {
                path: 'personage',
                component: Personage,
                name: "personage",
            }]
        },
        {
            path: '/information',
            component: Information,
            name: "information",
        },
        {
            path: '/safety',
            component: Safety,
            name: "safety",
            children: [{
                    path: 'updatePhone',
                    component: UpdatePhone,
                    name: "updatePhone",
                },
                {
                    path: 'updatePassword',
                    component: UpdatePassword,
                    name: "updatePassword",
                }
            ]
        },
        {
            path: '/product',
            component: Product,
            name: "product",
            children: [{
                    path: 'cloudService',
                    component: CloudService,
                    name: "cloudService",
                },
                {
                    path: 'message',
                    component: Message,
                    name: "message",
                },
                {
                    path: 'voice',
                    component: Voice,
                    name: "voice",
                },
                {
                    path: 'privacy',
                    component: Privacy,
                    name: "privacy",
                },
                {
                    path: "numbercheck",
                    component: Numbercheck,
                    name: "numbercheck",
                },
                {
                    path: "identitycheck",
                    component: Identitycheck,
                    name: "identitycheck",
                },
                {
                    path: "cloudelectricpin",
                    component: Cloudelectricpin,
                    name: "cloudelectricpin",
                },
                {
                    path: "smartCall",
                    component: SmartCall,
                    name: "smartCall",
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            name: "login",
            children: [{
                    path: 'cloudLogin',
                    component: CloudLogin,
                    name: "cloudLogin",
                },
                {
                    path: 'passwordLogin',
                    component: PasswordLogin,
                    name: 'passwordLogin',
                }
            ]
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
        },
        {
            path: '/agreement',
            component: Agreement,
            name: 'agreement',
        },
        {
            path: '/announcement',
            component: Announcement,
            name: 'announcement',
        },
        {
            path: '/zhimodule',
            component: Zhimodule,
            name: 'zhimodule',
        },
        {
            path: '/dataModule',
            component: DataModule,
            name: 'dataModule',
            children: [{
                    path: 'income',
                    component: Income,
                    name: "income",
                    children: [{
                        path: 'incomeParticulars',
                        component: IncomeParticulars,
                        name: "incomeParticulars",
                    }]
                },
                {
                    path: 'monitoring',
                    component: Monitoring,
                    name: "monitoring",
                },
            ]
        },
        {
            path: '/productData',
            component: PrductData,
            name: 'productData',
            children: [{
                    path: 'voiceData',
                    component: VoiceData,
                    name: "voiceData",
                },
                {
                    path: 'messageData',
                    component: MessageData,
                    name: "messageData",
                },
                {
                    path: 'idData',
                    component: IdData,
                    name: "idData",
                },
                {
                    path: 'phoneData',
                    component: PhoneData,
                    name: "phoneData",
                },
            ]
        },
        {
            path: '/privacyData',
            component: PrivacyData,
            name: "privacyData",
        },
        {
            path: '/privacyAccount',
            component: PrivacyAccount,
            name: "privacyAccount",
        },
        {
            path: '/platform',
            component: Platform,
            name: "platform",
        },
    ],
})
router.beforeEach((to, from, next) => {
    // 让页面回到顶部
    document.documentElement.scrollTop = 0
        // 一定不要忘记调用 next()
    next()

})

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router