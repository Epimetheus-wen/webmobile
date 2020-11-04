import { post } from '../../utils/fetch.js'
// import router from '../../router/index.js';
export const actions = {
    getDataModule(store) { //用户中心信息
        post('/apiDataOverview.html?f=consumption')
            .then((response) => {
                let data = {
                    remainingSum: (response.data.balance).toFixed(2).toLocaleString(),
                    noPayment: (response.data.unpaid).toFixed(2).toLocaleString(),
                    todayConsume: (response.data.payMoney).toFixed(2).toLocaleString()
                }
                store.commit('updateDataModule', data)
                console.log(response)
            })
    },
    getRecord(store, src) {
        let data = {
            eventId: src.id
        }
        post('/apiDataOverview.html?f=' + src.src, data)
            .then((response) => {
                // console.log(response.data)
                console.log(src)
                response.src = src
                store.commit('updateRecord', response)
            })
    }
}