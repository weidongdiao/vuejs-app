<template>
	<div class="category_box">
		<img class="kefuLogo" src="../../common/img/jixiangwukefu.png"/>
	  	<ul id="msg-box">
	  		<li id="find_log" @click=getLog v-show="findLogFlag">查看历史记录</li>
	  		<li v-if="item.type!='time'" :class="{'seller':item.from.seller_id,'buyer':item.from.buyer_id}" v-for="item in sellerArrData[sendToSeller]" >
	  			<img :src="userData.head_img" v-if="item.from.buyer_id"/>
	  			<img :src="userData.shop_head_img" v-if="item.from.seller_id"/>
	  			<div v-if="item.type=='text'" v-text="item.data">
	  			</div>
	  			<div class="img_ct"  v-if="item.type=='image'">
	  				<img :src="item.data" @click="showBigImage"/>
	  			</div>
	  		</li>
	  		<li class="time"  v-else-if="item.type=='time'" v-text="item.data"></li>
	  	</ul>
	  	<div id="chat_input_ct" class="item-box">
	  		<div class="upload_pic align-center">
	  			<label>
	  				<!--<i class="iconfont icon-yuyin-copy"></i>-->
	  				<img src="../../common/img/login.png"/><input type="file" name="uploadImage" id="uploadImage" @change=uploadImage />
	  			</label>
	  		</div>
	  		<div class="input_ct item">
	  			<input type="text" name="msgInput" id="msgInput"  v-model="msgInput" placeholder="请输入..."/>
	  		</div>
	  		<div class="send_msg" @click=sendMsg>
	  			发送
	  		</div>
	  	</div>
	  	<div class="bigImgBox" v-show="bigImageFlag" @click="hideBigImage">
	  		<img :src="bigImageUrl"/>
	  	</div>
	</div>
</template>

<script type="text/javascript">
	import { Toast, MessageBox ,Indicator} from 'mint-ui';
	export default {
		data(){
			return{
				userData:{
					buyer_id:"",
					buyer_type:"",
					head_img:"",
					nickname:"",
					seller_id:"",
					shop_head_img:"",
					shop_name:"",
				},
				shopId:"",
        		selected:1,
        		msgInput:"",
        		sendToSeller:123456,
        		buyerId:233334,
        		sentPic:"",
        		bigImageFlag:false,
        		bigImageUrl:"",
        		sentMsg:"",
        		findLogFlag:true,
        		nowDate:'',
        		flagTime:0,
        		sellerArrData:{
        		},
			}
		},
		mounted:function(){
			this.$emit("set-title", " ", true, true,{text:"帮助",style:{"text-align":"center",color:"#999","font-size":"0.4rem"}});
			var that = this;
			this.ws = new WebSocket(this.socketService);
			this.shopId = this.$route.params.id;
		    this.ws.onopen = function(e){
    			Indicator.open({
				  text: '正在链接',
				  spinnerType: 'fading-circle'
				});
		    	that.$http.get(that.localHost+'mall_buyer_api/mixin/getChatInfo?shopid='+that.shopId).then((response) => {
			        response=response.data;
    				Indicator.close();
			        if (response.errcode == 0) {
			        	that.userData=response.result;
			          	that.buyerId=response.result.buyer_id;
        				that.sendToSeller=response.result.seller_id;
		     		 	that.ws.send(JSON.stringify({"type":"auth", "buyer_type":response.result.buyer_type, "buyer_id":that.buyerId}));
		       			that.ws.send(JSON.stringify({"type":"checkonline", "seller_id":response.result.seller_id}));
			        }else{
		    			MessageBox({
			            	title: '提示',
			            	message: '联系卖家失败'
			          	});
			        }
			      },
			      (error)=>{
    				Indicator.close();
			      }
		    	)
		    }
		   	this.ws.onclose = function(e){
				MessageBox({
	            	title: '提示',
	            	message: '服务器关闭！'
	          	});
		    }
		    this.ws.onerror = function(){
				MessageBox({
	            	title: '提示',
	            	message: '连接出错！'
	          	});
		    }
		    this.ws.onmessage = function(e){
		      var res = JSON.parse(e.data);
		      switch (res.type){
	           	case "auth":if(res.message=="ok"){
	           		var authenticationFlag=true;
	           	}; 
	           	if(!authenticationFlag){
	           		ws.close();
		           	MessageBox({
		            	title: '提示',
		            	message: '用户认证失败！'
		          	});
	           	}
	           	break;
	           	case "checkonline":if(res.online){

	           	}else{
	    			MessageBox({
		            	title: '提示',
		            	message: '当前卖家离线中，您可以输入消息给卖家留言！'
		          	});
	           	};
	           	break;
	           	case "image":if(res.message=="ok"){
	    			var obj={
	    				data:that.sentPic,
	    				filename:"",
	    				"from":{
	    					buyer_id:that.buyerId,
	    					buyer_type:"1",
	    				},
	    				mid:res.mid,
	    				type:"image"
	    			}
	           		if(!that.sellerArrData[that.sendToSeller]){
		    			var arr= [];
		    			that.setDate(arr);
		    			arr.push(obj);
	           			that.$set(that.sellerArrData, that.sendToSeller,arr);
			   		}else{
		      			that.setDate2();
	   					that.sellerArrData[that.sendToSeller].push(obj);
			   		}
	   				document.querySelector(".category_box").scrollTop=document.getElementById("msg-box").offsetHeight-document.querySelector(".category_box").clientHeight+150;
	           		Indicator.close();
	           	}else if(res["from"]){
	           		var seller_id=res["from"].seller_id;
	           		if(!that.sellerArrData[that.sendToSeller]){
		    			var arr= [];
		    			that.setDate(arr);
		    			arr.push(res);
	           			that.$set(that.sellerArrData, that.sendToSeller,arr);
			   		}else{
		      			that.setDate2();
	   					that.sellerArrData[that.sendToSeller].push(res);
			   		}
	   				document.querySelector(".category_box").scrollTop=document.getElementById("msg-box").offsetHeight-document.querySelector(".category_box").clientHeight+150;
	           	}else{
	    			Toast({
	                    message: '发送失败！',
	              		iconClass: 'iconfont icon-shibai1',
	                    duration: 2000
	                });
	           	};
	           	break;
	           	case "text":if(res.message=="ok"){
	    			var obj={
	    				data:that.sentMsg,
	    				"from":{
	    					buyer_id:that.buyerId,
	    					buyer_type:"1",
	    				},
	    				mid:res.mid,
	    				type:"text"
	    			}
	           		if(!that.sellerArrData[that.sendToSeller]){
		    			var arr= [];
		      			that.setDate(arr);
		    			arr.push(obj);
	           			that.$set(that.sellerArrData, that.sendToSeller,arr);
			   		}else{
		      			that.setDate2();
	   					that.sellerArrData[that.sendToSeller].push(obj);
			   		}
	   				document.querySelector(".category_box").scrollTop=document.getElementById("msg-box").offsetHeight-document.querySelector(".category_box").clientHeight+150;
	           	}else if(res["from"]){
	           		var seller_id=res["from"].seller_id;
	           		if(!that.sellerArrData[that.sendToSeller]){
		    			var arr= [];
		      			that.setDate(arr);
		    			arr.push(res);
	           			that.$set(that.sellerArrData, that.sendToSeller,arr);
			   		}else{
		      			that.setDate2();
	   					that.sellerArrData[that.sendToSeller].push(res);
			   		}
	   				document.querySelector(".category_box").scrollTop=document.getElementById("msg-box").offsetHeight-document.querySelector(".category_box").clientHeight+150;
	           	}else{
	    			Toast({
	                    message: '发送失败！',
	              		iconClass: 'iconfont icon-shibai1',
	                    duration: 2000
	                });
	           	};
	           	break;
	           	case "msglog":
	           		if(res.data.length<=0){
	           			that.findLogFlag=false;
	           			Indicator.close();
	           			break;
	           		}
	           		var nowHieght = document.getElementById("msg-box").offsetHeight;
	           		if(nowHieght<550){
	           			nowHieght=100;
	           		}
	           		if(!that.sellerArrData[that.sendToSeller]){
	           			var arr= [];
	           			if(!that.flagTime){
			   				that.flagTime =res.data[0].create_time;
			   			}
		           	    for(var m in res.data){
			   				if(res.data[m].create_time<that.flagTime-3600){
			   					that.flagTime=res.data[m].create_time;
			      				var msgDate=that.getLocalTime(that.flagTime);
		    					arr.unshift({data:msgDate,type:'time'});
			   				}
		    				arr.unshift(res.data[m]);
		           	   	}
	           			that.$set(that.sellerArrData,that.sendToSeller,arr);
			   		}else{
			   			if(!that.flagTime){
			   				that.flagTime =res.data[0].create_time;
			   			}
			   			for(var m in res.data){
			   				if(res.data[m].create_time<that.flagTime-3600){
			   					that.flagTime=res.data[m].create_time;
			      				var msgDate=that.getLocalTime(that.flagTime);
								that.sellerArrData[that.sendToSeller].unshift({data:msgDate,type:'time'});
			   				}
			   				that.sellerArrData[that.sendToSeller].unshift(res.data[m])
		           	   	}
			   		}
	           	    setTimeout(function(){
	           	    	var scrollTop=document.getElementById("msg-box").offsetHeight - nowHieght;
	           			document.querySelector(".category_box").scrollTop=scrollTop;
	           			Indicator.close();
	           	    },16)
	           	break;
	           	case "error":
		          	Toast({
	                    message: res.message,
	              		iconClass: 'iconfont icon-shibai1',
	                    duration: 2000
	                });
	           	break;
	           	default:
	           		break;
	           }
		    }
		},
		methods:{
		    headerRightTextCall(){
				this.$router.push("/integralRule");
		    },
			//插入时间
			setDate:function(arr){
				var msgDate= (new Date()).getTime()/1000;
      			this.nowDate=msgDate;
      			msgDate=this.getLocalTime(msgDate);
    			arr.push({data:msgDate,type:'time'});
			},
			//插入时间
			setDate2:function(time){
				var time=time?time:300;
      			var msgDate= (new Date()).getTime()/1000;
      			if((msgDate - time)>this.nowDate){
      				this.nowDate=msgDate;
      				msgDate=this.getLocalTime(msgDate);
					this.sellerArrData[this.sendToSeller].push({data:msgDate,type:'time'});
      			}
			},
			//时间转换
			getLocalTime:function (nS) {     
		        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
		    } ,
			//发送消息
			sendMsg:function(){
				var msg = this.msgInput
	    		if(msg){
	    			this.sentMsg=msg;
	           	 	this.ws.send(JSON.stringify({"type":"text", "to":{"seller_id":this.sendToSeller}, "data":msg}));
	    		}else{
	    			Toast({
	                    message: '文本内容不能为空',
	              		iconClass: 'iconfont icon-shibai1',
	                    duration: 2000
	                });
	    			return false
	    		}
	       		this.msgInput="";
			},
			//上传图片
			uploadImage:function(e){
				var file = e.target.files[0];
		    	var fromData=new FormData();
	    		fromData.append('file[]', file);
	    		var that = this;
	    		var url =this.localHost+"/mall_buyer_api/upload/chat";
    			Indicator.open({
				  text: '正在发送',
				  spinnerType: 'fading-circle'
				});
	    		this.$http.post(url,fromData).then((response)=>{
	    			var  response=response.data;
			        if (response.errcode == 0) {
			        	var imageUrl = response.result.oks["file"][0].image_url;
						that.ws.send(JSON.stringify({"type":"image", "to":{"seller_id":that.sendToSeller}, "filename":"filename", "data":imageUrl}));            			
			        	that.sentPic=imageUrl;
			        }else{
						MessageBox({
			                title: '提示',
			                message: response.message
			            });
			      	}
	    		});
			},
			//获取历史记录
			getLog:function(){
				Indicator.open({
				  text: '正在加载',
				  spinnerType: 'fading-circle'
				});
				if(!this.sellerArrData[this.sendToSeller]){
		      		this.ws.send(JSON.stringify({"type":"msglog", "to":{"seller_type":1, "seller_id":this.sendToSeller}}));
		      		return true;
		    	}
				var topMid;
				for(var item in this.sellerArrData[this.sendToSeller]){
					if(this.sellerArrData[this.sendToSeller][item].type!='time'){
						topMid=this.sellerArrData[this.sendToSeller][item].mid;
						break;
					}
				}
	       		this.ws.send(JSON.stringify({"type":"msglog", "to":{"seller_type":1, "seller_id":this.sendToSeller},"mid":topMid}));
			},
			//显示大图
			showBigImage:function(e){
				this.bigImageUrl = e.target.src;
				this.bigImageFlag =true;
			},
			//隐藏大图
			hideBigImage:function(e){
				this.bigImageFlag =false;
			},
		    goback:function(){
		        window.history.go(-1);
		    },
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass" scoped>
@mixin font-dpr($font-size){
    font-size: $font-size;

    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }

    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}
#uploadImage{
	display: none;
}
.kefuLogo{
	position: fixed;
	left: 0;
	right: 0;
	top: 0.133333rem;
	margin: auto;
	width: 1.786666rem;
	height: 1.666666rem;
	z-index: 3;
}
.icon-yuyin-copy{
	font-size:0.666666rem;
	color: $mc;
}
#find_log{
	text-align: center;
	margin-top: 0!important;
	color: #02aaee;
	&:active{
		text-decoration: underline;
	}
}
.bigImgBox{
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 22;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.3);
	img{
		width: 90%;
		margin: 0 auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
}
.category_box{
	background: #f3f3f3;
	height: 15.2rem;
	overflow: auto;
	padding-bottom: 1.133333rem;
	padding-top: 1.186666rem;
}
#chat_input_ct{
	background: white;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 20;
	box-sizing: border-box;
	padding: 0.2rem 0.266666rem;
}
.upload_pic{
	width: 0.933333rem;
	height: 0.933333rem;
	margin-right: 0.133333rem;
	img{
	width: 0.933333rem;
	height: 0.933333rem;
		
	}
	label{
		width: 100%;
		display: block;
		text-align: center;
	}
}
.send_msg{
	width: 1.333333rem;
	height: 0.906666rem;
	margin-left: 0.133333rem;
	background: $mc ;
	color: white;
	@include font-dpr(15px);
	line-height: 0.906666rem;
	text-align: center;
	border-radius: 0.106666rem;
}
.input_ct{
	border-bottom: 1px solid #E5E5E5;
	input{
		width: 100%;
		height: 0.906666rem;
		line-height: 0.906666rem;
		@include font-dpr(14px);
		padding-left: 0.266666rem;
		box-sizing: border-box;
	}
}
#msg-box{
	padding:0.266666rem 0.266666rem 1.8rem;
	background: #f3f3f3;
	li{
		overflow: hidden;
		margin: 0.4rem 0;
		img{
			float: left;
			width: 1.333333rem;
			height: 1.333333rem;
			border-radius: 50%;
			display: inline-block;
			vertical-align: top;
		}
		div{
			float: left;
			vertical-align: top;
			display: inline-block;
			padding: 0.2rem;
			max-width:7.066666rem;
			line-height: 0.96rem;
			word-break: break-all;
			@include font-dpr(16px);
			color: #333;
			background: white;
			margin:0 0.266666rem;
			position: relative;
			border-radius: 0.133333rem;
			&:before{
				content: "";
				width: 0;
				height: 0;
				border: 0.133333rem solid transparent;
				position: absolute;
				top: 0.533333rem;
			}
		}
	}
	.buyer{
		img{
			float: right;
			
		}
		div{
			float: right;
			&:before{
				right:-0.266666rem;
				border-left-color:white;
			}
		}
		.img_ct{
			padding: 0;
			img{
				border-radius: 0.133333rem;
				width: 2.8rem;
				height: 2.666666rem;
			}
		}
	}
	.seller{
		div{
			float: left;
			&:before{
				left:-0.266666rem;
				border-right-color:white;
			}
		}
		img{
			float: left;
		}
		.img_ct{
			padding: 0;
			img{
				border-radius: 0.133333rem;
				width: 2.8rem;
				height: 2.666666rem;
			}
		}
	}
	.time{
		text-align: center;
		@include font-dpr(14px);
		color: #999;
		
	}
}
</style>