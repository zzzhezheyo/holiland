import axios from 'axios'
import { Indicator, Toast } from 'mint-ui';

// 创建一个 axios 实例
const ajax = axios.create({
	baseURL:'http://rap2api.taobao.org/app/mock/126590'
})

// 添加请求拦截器
axios.interceptors.request.use(config=> {
    // 在发送请求之前做些什么
    Indicator.open({
	  text: 'Loading...',
	  spinnerType: 'fading-circle'
	});
    return config;
  });

// 添加响应拦截器
axios.interceptors.response.use(res=>{
    // 对响应数据做点什么
    Indicator.close();
    if(res.data.res_code !==1)
    	return res.data.res_body
    else
    	Toast({
    		message:'error:数据请求异常',
    		position:'bottom',
    		duration:1000
    	});
    return response;
  });

//请求首页轮播图
export const getHomeSwiper=()=>{
	return ajax.get('/carousel')
}
//详情页轮播图
export const getDetailSwiper=()=>{
    return ajax.get('/carousel')
}

export const getCategoryList=()=>{
    return ajax.get('/api/categorylist')
}
//请求商品列表
export const getProductList=(categoryId)=>{
    return ajax.get('/api/ProductList?categoryId='+categoryId)
}