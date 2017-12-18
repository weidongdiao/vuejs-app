import Vue from 'vue'
import { Toast, MessageBox, Indicator } from 'mint-ui'
import axios from 'axios'
Vue.prototype.Toast=Toast;
Vue.prototype.MessageBox=MessageBox;
Vue.prototype.Indicator=Indicator;

/*挂载公共变量到Vue*/
//Vue.prototype.localHost = "http://test2.dapangzi.com:60022";//接口域名
//Vue.prototype.socketService='ws://test2.dapangzi.com:8282';//so
//Vue.prototype.apiVersion = "1.0";//接口域名
var ua = window.navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    Vue.prototype.isWeiXin=1;
}else{
    Vue.prototype.isWeiXin=0;
}
/*数组对象拼接函数，进行post提交数据*/
Vue.prototype.objTouUrl=function(param, key, encode) {
	if(param == null) return '';
	var paramStr = '';
	var t = typeof(param);
	if(t == 'string' || t == 'number' || t == 'boolean') {
		paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
	} else {
		for(var i in param) {
			var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
			paramStr += this.objTouUrl(param[i], k, encode);
		}
	}
	return paramStr;
}

Vue.prototype.checkTokenTime = function(){
	var oldTime = localStorage.getItem('OC-Token-Time') ? localStorage.getItem('OC-Token-Time') : 0;
	var nowTime = (new Date()).getTime();
	var tokenExpireTime = this.tokenExpireTim?this.tokenExpireTim:7200000;
	if(nowTime - oldTime > tokenExpireTime) {
		var xhr = new XMLHttpRequest();
		var urlToken = this.localHost + '/token/get';
		xhr.open("GET", urlToken, false);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					var data = JSON.parse(xhr.response);
					localStorage.setItem('OC-X-Token', data.result['X-Token']);
					/*更新OC-Token-Time*/
					var time = (new Date()).getTime();
					localStorage.setItem('OC-Token-Time', time);
				} else {
	
				}
			}
		}
		xhr.send(null);
	}
}

/*自定义请求*/
Vue.prototype.request = function(data){
	/*loading窗口*/
	this.Indicator.open({
		text: '正在加载',
		spinnerType: 'fading-circle'
	});
	//验证OC-Token-Time是否超时
	this.checkTokenTime();
	var token = localStorage.getItem('OC-X-Token');
	var requestdata ;
	data.dataType=="urlencoded"?requestdata =this.objTouUrl(data.data):data.data;
	data.method=="get" || data.method=="GET"? data.url+="?"+this.objTouUrl(data.data):data.url=data.url;
	axios({
		  method: data.method,
		  url:data.url,
		  data: requestdata,
	  	  baseURL: this.localHost,
	  	  headers: {'X-token': token,"X-Version":this.apiVersion},
	}).then(
		(success)=>{
			/*loadingclose*/
			this.Indicator.close();
			/*更新OC-Token-Time*/
			if(success.data.errcode || success.data.errcode==0){
				var time = (new Date()).getTime();
				localStorage.setItem('OC-Token-Time', time);
				/*进行响应拦截处理数据*/
				this.requestInterceptors(success,data,this);
			}else{
				this.Toast({
					message: '数据格式错误',
					iconClass: 'iconfont icon-shibai1',
					duration: 2000
				});
			}
		},
		(error)=>{
			/*loadingclose*/
			this.Indicator.close();
			data.error.call(this,error)
		},
	).catch((error)=>{
			/*loadingclose*/
			console.log(error)
		this.Indicator.close();
//		this.Toast({
//			message: '网络错误',
//			iconClass: 'iconfont icon-shibai1',
//			duration: 2000
//		});
	});
}
/*自定义请求拦截器*/
Vue.prototype.requestInterceptors = function(response,requestData,vm){
	var data = response.data;
	if(data.errcode == 40007) {
		/*重置x-token,OC-Token-Time*/
		localStorage.setItem('OC-X-Token', '');
		localStorage.setItem('OC-Token-Time', 0);
		if(this.isWeiXin) {
			/*微信下未登录要做登录*/
//			location.replace(localHost + 'mall_buyer_api/wxlogin?redirect_url=' + encodeURIComponent(location.href));
		} else {
			location.href = '#/login';
		}
		return false;
	}else if(data.errcode == 40002) {
		localStorage.setItem('OC-X-Token', '');
		localStorage.setItem('OC-Token-Time', 0);
		this.request(requestData);
		return false;
	}
	requestData.success.call(vm,response.data,response);
}
/*获取token过期时间*/
/*(function getTokenExpireTime(){
	var xhr = new XMLHttpRequest();
	var urlToken = this.localHost + '/mall_buyer_api/token/get';
	xhr.open("GET", urlToken, false);
	var that = this;
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var data = JSON.parse(xhr.response);
				//Vue.prototype.tokenExpireTime=data.result.time；
			} else {

			}
		}
	}
	xhr.send(null);
})();*/
