export const mutations = {
    updateUserCenterInfo(state, payload) {
        // console.log("state==>", state)
        // console.log("payload==>", payload)
        let token = window.localStorage.getItem('token')
        let mobile = window.localStorage.getItem('mobile')
        let LoginFrom = {
            "mobile": mobile,
            "token": token
        }
        state.LoginFrom = LoginFrom
        state.UserCenterInfo = payload
    }, //更新用户信息中心
    updateLoginFrom(state, payload) {
        // console.log("state==>", state)
        // console.log("payload==>", payload)
        state.LoginFrom = payload.LoginFrom
    },
    updateUserCertInfo(state, payload) {
        // console.log("state==>", state)
        // console.log("payload==>", payload)
        state.userCertInfo = payload
    },
    updateTrumpetList(state, payload) {
        // console.log("state==>", state)
        // console.log("payload==>", payload)
        state.trumpetList = payload
    }
}