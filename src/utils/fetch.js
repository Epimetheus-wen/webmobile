import axios from 'axios';
import Qs from 'qs'
import md5 from 'js-md5';
import { Toast } from 'vant';
import router from '../router/index.js';
import store from '../store';
// import router from '../router/index.js';
axios.defaults.timeout = 50000;
axios.defaults.baseURL = '';
/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === 'production') {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境
        axios.defaults.baseURL = 'https://api.caih.com';

    } else {
        //test 测试环境
        axios.defaults.baseURL = 'https://test.callas2.caih.com';
    }
} else {
    //dev 开发环境
    axios.defaults.baseURL = '';
}

//http request 拦截器
axios.interceptors.request.use(
    config => {
        let time = Math.round(new Date().getTime() / 1000).toString();
        let token = window.localStorage.getItem("token")
            // console.log("Authorization===>>>>>", token)
            // console.log("sign============>>>>", md5("DONGXINYITONG - ONLINE!" + time))
            // console.log("signtime============>>>>", time)

        // let loginTime = window.localStorage.getItem("loginTime")
        // loginTime = Number(loginTime) + 4 * 60 * 60 * 1000

        // if (new Date().getTime() > loginTime) {
        //     // 清除localStorage中的login字段
        //     window.localStorage.removeItem('token')
        //     router.push({ path: '/login/passwordLogin' })
        // }
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        // config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Authorization': token,
            // 'Authorization': '28a9b3494ee9ddf98f2c1eaa3149fcdc',
            'sign': md5("DONGXINYITONG-ONLINE!" + time),
            'signtime': time
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.data.errCode == 2) {
//             this.$router.push({
//                 path: "/login",
//                 querry: { redirect: this.$router.currentRoute.fullPath } //从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);

            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {

        axios({
                url: '/console' + url,
                // url: url,
                method: 'post',
                data: Qs.stringify(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                }
            })
            .then(response => {
                console.log(response.data)
                if (response.data.code == 99999) {
                    let platformEntrance = window.localStorage.getItem("platformEntrance")
                    updateToken(platformEntrance)
                }
                resolve(response.data);

            }, error => {
                reject(error);
            })




    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}


function updateToken(id) {
    return new Promise((resolve, reject) => {

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
    })
}