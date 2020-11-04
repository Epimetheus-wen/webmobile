import { post } from '../../utils/fetch.js'
// import router from '../../router/index.js';
export const actions = {
    getUserCenterInfo(store) { //用户中心信息
        post('/apiUserCenter.html?f=userCenterInfo')
            .then((response) => {
                if (response.code === 0) {
                    store.commit('updateUserCenterInfo', response.data)
                } else {
                    // window.localStorage.removeItem('token')
                    // router.push({ path: '/login/passwordLogin' })
                }


            })
    },
    getLoginFrom(store, data) { //登录状态
        store.commit('updateLoginFrom', data)
    },
    getUserCertInfo(store) { //账户认证信息
        post('/apiUserCenter.html?f=userCertInfo')
            .then((response) => {
                store.commit('updateUserCertInfo', response.data)
            })
    },
    getTrumpetList(store) {
        if (!window.localStorage.getItem('token')) {
            window.localStorage.setItem('loginTime', new Date().getTime())
        }
        post('/apiNoLogin.html?f=getNoticeList')
            .then((response) => {
                store.commit('updateTrumpetList', response.data)
            })
    }
}