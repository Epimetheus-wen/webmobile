import axios from 'axios';
import Qs from 'qs'
import { Toast } from 'vant';
import router from '../router/index.js';
import store from '../store';

export function updateToken(id) {
    return new Promise((resolve, reject) => {
        let loginTime = window.localStorage.getItem("loginTime")
            // loginTime = Number(loginTime) + (10 * 1000)
        loginTime = Number(loginTime) + (3 * 60 * 60 * 1000)
        if (new Date().getTime() > loginTime) {
            let password = window.localStorage.getItem("password")
            let sign = window.localStorage.getItem("sign")
            if (password) {
                // 密码登录，每隔4小时自动更新token
                let data = {
                    "mobile": window.localStorage.getItem("mobile"),
                    "password": window.localStorage.getItem("password"),
                    "platformEntrance": id
                }

                axios({
                        url: '/console/apiLogin.html?f=pwdLogin',
                        // url: '/apiLogin.html?f=pwdLogin',
                        method: 'post',
                        data: Qs.stringify(data),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                        }
                    })
                    .then(response => {
                        console.log(response.data.data.token)
                        window.localStorage.setItem('loginTime', new Date().getTime())
                        window.localStorage.setItem('token', response.data.data.token)
                        response.data.LoginFrom = {
                            "mobile": data.mobile,
                            "token": response.data.token
                        }
                        store.dispatch('getLoginFrom', response.data)
                        resolve(response.data);
                        console.log("4小时自动登录")
                        window.location.reload()
                    }, error => {
                        reject(error);
                    })
            } else if (sign) {
                // 模板消息通知登录，每隔4小时自动更新token
                let data = {
                    "mobile": window.localStorage.getItem("mobile"),
                    "sign": window.localStorage.getItem("sign"),
                    "sign_time": window.localStorage.getItem("signTime")
                }

                axios({
                        url: '/console/apiLogin.html?f=initLogin',
                        // url: '/apiLogin.html?f=initLogin',
                        method: 'post',
                        data: Qs.stringify(data),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                        }
                    })
                    .then(response => {
                        console.log(response.data.data.token)
                        window.localStorage.setItem('loginTime', new Date().getTime())
                        window.localStorage.setItem('token', response.data.data.token)
                        response.data.LoginFrom = {
                            "mobile": data.mobile,
                            "token": response.data.token
                        }
                        store.dispatch('getLoginFrom', response.data)
                        resolve(response.data);
                        console.log("4小时自动登录")
                        window.location.reload()
                    }, error => {
                        reject(error);
                    })
            } else {
                // 验证码登录，每隔4小时提醒超时
                Toast('登录超时请重新登录');
                router.push({ path: '/login/cloudLogin' })
            }
        } else {
            reject();
        }


    })
}