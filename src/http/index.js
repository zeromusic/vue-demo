//统一api管理
import instance from "./axios";
//data json参数
const userLogin=(data)=>{

    //返回的是promise对象
    return instance.request({
        url:'api/mobile/elogin',//访问路径   url=baseURL+url
        method:'post',
        data
    })
}
const adminLogin=(data)=>{
    return instance.request({
        url:'',
        method:'post',
        data
    })
}
const adCatePage=(data)=>{
    return instance.request({
        url:'api/adcate/page',
        method:'post',
        data
    })
}
const adCateDelId=(params)=>{
    return instance.request({
        url:'api/adcate/delete',
        params
    })
}
const adCateAdd=(data)=>{
    return instance.request({
        url:'api/adcate/add',
        method:'post',
        data
    })
}
const adCateEdit=(data)=>{
    return instance.request({
        url:'api/adcate/edit',
        method:'post',
        data
    })
}
// export default userLogin  用default的话只能一个api

export {
    userLogin,
    adminLogin,
    adCatePage,
    adCateDelId,
    adCateAdd,
    adCateEdit
}