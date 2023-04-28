import axios from "axios";
import { useUserStore } from "../stores/user";
//创建axios实例
const instance=axios.create({
    baseURL:'http://api.jqrjq.cn/',
    timeout:6000
})
//正确解决方案
//请求拦截器
instance.interceptors.request.use((config)=>{
    
    const userStore=useUserStore();
    const {token}=userStore;
    //console.log(token);
    config.headers.token=token;

    return config
},(err)=>{
   return Promise.reject(err)
})
//响应拦截器
instance.interceptors.response.use((res)=>{
    return res.data;
},(err)=>{
    return Promise.reject(err)
})

export default instance;

//promise对象 异步处理对象

const promise=new Promise((resolve,reject)=>{
    //成功.then
    resolve()
    //失败.catch
    reject()
})