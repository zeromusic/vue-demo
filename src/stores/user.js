import { defineStore } from "pinia"
import { reactive, ref } from 'vue'
//选项式
/**
 * user 是 storeId 唯一
 * 核心：state 其他属性都是为了state服务 是个箭头函数=> 并且return返回 数值要赋值
 * getter对象 主要作用是对state的数据进行过滤 ，方法
 * actions对象 修改state里面的数据 方法
 */
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            count: 0,
            token: '',
            userinfo: {
                state: 1,
                id: 0,
                userName: "",
                userType: "",
                token: "",
                binding: 0,
                createTime: "",
                updateTime: "",
                email: ""
            }
        }
    },
    getters: {
        getToken() {
            return this.token
        }

    },
    actions: {
        setToken(token) {
            this.token = token
        },
        /*
        填充userinfo数据
        user 用户登录时获得数据
        */
        fillUserinfo(user) {
            this.userinfo = user
        }
    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'userinfo',
            Storage:localStorage,//本地存储 sessiontorge:会话存储
            paths:['token']//部分存储
        }]
    }
})

//组合式
// export const useUserStore = defineStore('user', () => {
//     let token = ref('');
//     let userinfo = ref({})
//     // let count = reactive({count:0});
//     const setToken = (token) => {
//         token = token
//     }
//     const fillUserinfo = (user) => {
//         userinfo = user
//     }

//     return { token, userinfo, fillUserinfo, setToken }
// })