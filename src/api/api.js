import axios from "axios";
import qs from "qs";
import router from "../router";

//生成Axios的伪实例,instance不是真正的new Axios，但拥有axios实例的所有属性和方法
const instance = axios.create({
	baseURL: "/api"
});
//添加请求拦截器，批量处理即将发出的请求，如：添加token
instance.interceptors.request.use(config => {
	if(config.url.match(/^\/xhr|topic/)){
		config.baseURL = '/you';
	}
	//config包含当前请求的所有请求信息
	//修改post请求的请求参数格式：默认的参数格式是json对象格式
	config.data = qs.stringify(config.data); //转为url-encoded格式 name=kuroko&age=7

	return config
});

instance.interceptors.response.use(
	response => response.data,
	error => {
		console.log(error.message);
		//默认返回一个成功的promise实例，但没有数据
		//请求没有真正发出去，在请求拦截器报的错
		if (!error.response) {
			alert(error.message)
			//跳转至登录页
			if (router.currentRoute.path !== '/login') {
				router.replace('/login');
			}
		} else {
			//请求发出后捕获错误对象
			if (error.response.status === 401) {
				alert('token过期，请重新登录')
				//跳转至登录页
				if (router.currentRoute.path !== '/login') {
					router.replace('/login')
				}
			} else if (error.response.status === 404) {
				alert('请求资源未找到')
			} else {
				alert('请求错误')
			}

		}
		return new Promise(() => { })
	}

)
export default instance

