export const mutations = {
    updateDataModule(state, payload) {
        console.log("state==>", state)
        console.log("payload==>", payload)
        state.dataModule = payload
    }, //更新用户信息中心
    updatedataModulefirst(state) {
        if (state.dataModulefirst == true) {
            state.dataModulefirst = false
        } else {
            state.dataModulefirst = true
        }

    },
    updateRecord(state, payload) {
        console.log(payload)
        if (payload.src.src == "getSmsToday" && payload.src.id == 2) {
            state.codeNote = payload.data
        }
        if (payload.src.src == "getSmsToday" && payload.src.id == 3) {
            state.informNote = payload.data
        }
        if (payload.src.src == "getSmsToday" && payload.src.id == 4) {
            state.vipNote = payload.data
        }
        if (payload.src.src == "getVoiceToday") {
            state.voice.is_activate = payload.data.is_activate
            state.voice.count = payload.data.count
        }
        if (payload.src.src == "getPhoneVerifyToday") {
            state.phoneData.is_activate = payload.data.is_activate
            state.phoneData.count = payload.data.count
        }
        if (payload.src.src == "getIdentityVerifyToday") {
            state.idData.is_activate = payload.data.is_activate
            state.idData.count = payload.data.count
        }
        // state.dataModulefirst = false
    },

}