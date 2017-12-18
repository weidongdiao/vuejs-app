//h5+ plus对象准备完成出发
import Vue from 'vue'

function plusReady() {

	/*//获取支付通道
	plus.payment.getChannels(function(channels){
		for(var a in channels){
			if(channels[a].id=="alipay"){
				window.aliChannel=channels[a]; 
			}else if(channels[a].id=="wxpay"){
				window.wxChannel=channels[a]; 
			}
		}
    },function(e){
        alert("获取支付通道失败："+e.message);
    });
    
	//微信分享
	plus.share.getServices(function(s) {
	    window.sharesList = {};
	    for (var i in s) {
            var t = s[i];
            window.sharesList[t.id] = t;
        }
	}, function(e) {
	    alert("获取分享服务列表失败：" + e.message);
	});*/

	//监听android返回按键
	var quitFlag = false;
	plus.key.addEventListener('backbutton', function() {
		var url = document.URL;
		var val = url.split('#')[1];
		if(val == '/orderInformation' || val == '/statementMain' || val == '/collectionMain' || val == '/mineMain') {
			if(quitFlag) {
				plus.runtime.quit();
			} else {
				plus.nativeUI.toast("再按一次退出运营中心");
			}
			quitFlag = true;
			setTimeout(function() {
				quitFlag = false;
			}, 3000);
		} else {
			// 事件处理
			window.history.go(-1);
		}
	}, false);

	//获取当前应用的版本号
	var wgtVer = null;
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		wgtVer = inf.version;
		console.log("当前应用版本：" + wgtVer);
	});
	//获取用户地理位置信息
	plus.geolocation.getCurrentPosition(function(p){
		window.userLat = p.coords.latitude;
		window.userLng = p.coords.longitude;
	}, function(e){
		
	} );
}
if(window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}
// 检测更新
Vue.prototype.checkUpdate = function(checkUrl) {
	plus.nativeUI.showWaiting("检测更新...");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		switch(xhr.readyState) {
			case 4:
				plus.nativeUI.closeWaiting();
				if(xhr.status == 200) {
					console.log("检测更新成功：" + xhr.responseText);
					var newVer = xhr.responseText;
					if(wgtVer && newVer && (wgtVer != newVer)) {
						downWgt(); // 下载升级包
					} else {
						plus.nativeUI.alert("无新版本可更新！");
					}
				} else {
					console.log("检测更新失败！");
					plus.nativeUI.alert("检测更新失败！");
				}
				break;
			default:
				break;
		}
	}
	xhr.open('GET', checkUrl);
	xhr.send();
}
// 下载wgt文件
Vue.prototype.downWgt = function(downUrl) {
	plus.nativeUI.showWaiting("正在下载资源包...");
	plus.downloader.createDownload(downUrl, {
		filename: "_doc/update/"
	}, function(d, status) {
		if(status == 200) {
			console.log("下载资源包成功：" + d.filename);
			installWgt(d.filename); // 安装wgt包
		} else {
			console.log("下载资源包失败！");
			plus.nativeUI.alert("下载资源包失败！");
		}
		plus.nativeUI.closeWaiting();
	}).start();
}
// 更新应用资源
Vue.prototype.installWgt = function(path) {
	plus.nativeUI.showWaiting("正在更新...");
	plus.runtime.install(path, {}, function() {
		plus.nativeUI.closeWaiting();
		console.log("更新完成！");
		plus.nativeUI.alert("更新完成！", function() {
			plus.runtime.restart();
		});
	}, function(e) {
		plus.nativeUI.closeWaiting();
		console.log("安装资源包文件失败[" + e.code + "]：" + e.message);
		plus.nativeUI.alert("安装资源文件失败[" + e.code + "]：" + e.message);
	});
}

//本地相册选择
Vue.prototype.galleryImg = function(imageCallBack, vm) {
	plus.gallery.pick(function(a) {
		for(var i = 0, len = a.files.length; i < len; i++) {
			plus.io.resolveLocalFileSystemURL(a.files[i], function(entry) {
				var s = entry.toLocalURL() + "?version=" + new Date().getTime();
				imageCallBack(s, vm)
			}, function(e) {
				plus.nativeUI.alert("读取相册文件错误" + e.message);
			});
		}
	}, function(a) {}, {
		filter: "image",
		multiple: true,
	})
};
//拍照
Vue.prototype.getImage = function(imageCallBack, vm) {
	var c = plus.camera.getCamera();
	c.captureImage(function(e) {
		plus.io.resolveLocalFileSystemURL(e, function(entry) {
			var s = entry.toLocalURL() + "?version=" + new Date().getTime();
			imageCallBack(s, vm)
		}, function(e) {
			plus.nativeUI.alert("读取拍照文件错误" + e.message);
		});
	}, function(s) {
		plus.nativeUI.alert("error" + s);
	}, {
		filename: "_doc/head.png"
	})
}
Vue.prototype.dealImage = function(data) {
	this.Indicator.open({
		text: '正在上传',
		spinnerType: 'fading-circle'
	});
	var imgPath = data.imageUrl;
	var callBack = data.callBack;
	var NEW_HEIGHT = data.height ? data.height : null;
	var image = new Image();
	image.src = imgPath;
	var that = this;
	image.onload = function() {
		var canvas = document.createElement("canvas");
		if(NEW_HEIGHT) {
			var new_height = NEW_HEIGHT,
				new_width = parseInt(this.width * NEW_HEIGHT / this.height);
		} else {
			var new_height = this.height,
				new_width = this.width;
		}
		canvas.width = new_width; /*设置新的图片的宽度*/
		canvas.height = new_height; /*设置新的图片的长度*/
		var ctx = canvas.getContext("2d");
		ctx.drawImage(this, 0, 0, new_width, new_height); /*绘图*/
		var dataURL = canvas.toDataURL("image/png", 0.8);
		callBack(dataURL);
		canvas = null;
		that.Indicator.close();
	}
}

Vue.prototype.dataURLtoBlob=function (dataurl) {
    var arr = dataurl.split(','), 
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}