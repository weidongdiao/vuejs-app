<template>
	<div id="setting">
		<div class="setting-header item-box">
			<div class="left" @click=uploadImage>
				<img :src="headPic"/>
			</div>
			<div class="item align-center" @click=uploadImage>
				<div >
					<h2>小明同学</h2>
					<span>联系方式：123****8910</span>
				</div>
			</div>
			<div class="right align-center">
				<div>
					<router-link to="/addressManage">
						<span>收货地址管理</span><i class="iconfont icon-youjiantou"></i>
					</router-link>
				</div>
			</div>
		</div>
		<ul class="list_box">
			<li>
				<router-link to="/accountSafety" class="item-box">
					<div class="left">账户安全</div>
					<div class="item">
						<i class="iconfont icon-youjiantou"></i>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">给我评分</div>
					<div class="item">
						吐槽获奖励<i class="iconfont icon-youjiantou"></i>
					</div>
				</router-link>
			</li>
			<li @click="clearStroage">
				<router-link to="" class="item-box">
					<div class="left">清楚本地缓存</div>
					<div class="item">
						10.19M<i class="iconfont icon-youjiantou"></i>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">关于我们</div>
					<div class="item">
						<i class="iconfont icon-youjiantou"></i>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="log_off" @click=logout>
			退出当前登录
		</div>
		<app-footer :selectIndex="4" ></app-footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	import	images from"../../common/img/login.png"
	export default {
		components:{
			"app-footer":appFooter
		},
		data() {
			return {
				headPic:images,
				stopUpload:true,
			}
		},
		mounted() {
			this.$emit("set-title", "设置",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    logout(){
		    	this.MessageBox.confirm('确定退出登录？',"").then(action => {
					var url = "";
					this.request({
						method:"post",
						url:url,
						data:{
							a:"123"
						},
						success(data){
							console.log(2334)
						},
						error(data){
							console.log(2333)
						},
					})
				});
		    },
		    clearStroage(){
		    	this.MessageBox.confirm('确定清楚缓存？',"").then(action => {
					var url = "";
					this.request({
						method:"post",
						url:url,
						data:{
							a:"123"
						},
						success(data){
							console.log(2334)
						},
						error(data){
							console.log(2333)
						},
					})
				});
		    },
		    startUpload(file){
		    	
		    },
		    uploadImage() {
				var a = [{
					title: "拍照"
				}, {
					title: "从手机相册选择"
				}];
				var that = this;
				plus.nativeUI.actionSheet({
					title: "我的相册",
					cancel: "取消",
					buttons: a	
				}, function(b) { /*actionSheet 按钮点击事件*/
					switch(b.index) {
						case 0:
							break;
						case 1:
							that.getImage(function(imageUrl, vm) {
								vm.dealImage({
									imageUrl: imageUrl,
									height: 700,
									callBack: function(dealUrl) {
										if(vm.stopUpload){
											vm.headPic=dealUrl;
											vm.startUpload(vm.dataURLtoBlob(dealUrl));
											vm.stopUpload = false;
										}
									},
								});
							}, that); /*拍照*/
							break;
						case 2:
							that.galleryImg(function(imageUrl, vm) {
								vm.dealImage({
									imageUrl: imageUrl,
									height: 700,
									callBack: function(dealUrl) {
										if(vm.stopUpload){
											vm.headPic=dealUrl;
											vm.startUpload(vm.dataURLtoBlob(dealUrl));
											vm.stopUpload = false;
										}
									},
								});
							}, that); /*打开相册*/
							break;
						default:
							break;
					}
				})
			}
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#setting{
		padding-top: 1.186666rem;
		.log_off{
			line-height: 1.093333rem;
			text-align: center;
			@include font-dpr(12px);
			background: white;
			margin-top: 0.266666rem;
			color: rgb(83,83,83);
		}
		.setting-header{
			background: white;
			padding:0.533333rem 0;
			i{
				vertical-align: middle;
				@include font-dpr(12px);
				margin-left: 0.133333rem;
			}
			.left{
				width: 1.693333rem;
			}
			img{
				width: 1.186666rem;
				height: 1.186666rem;
				display: block;
				margin: 0 auto;
				border-radius: 100%;
				border: 1px solid #E5E5E5;
			}
			.right{
				width: 2.666666rem;
			}
			a{
				display: block;
				height: 100%;
				color: rgb(160,160,160);
			}
			h2{
				@include font-dpr(14px);
				margin-bottom: 0.173333rem;
			}
			span{
				color: rgb(160,160,160);
				@include font-dpr(12px);
				vertical-align: middle;
			}
		}
			
		.list_box{
			margin-top: 0.133333rem;
			background: white;
			padding: 0 0.266666rem;
			.left{
				color: rgb(83,83,83);
			}
			li{
				border-bottom:1px solid rgba(210,216,221,0.5) ;
				line-height: 1.066666rem;
			}
			li:last-child{border: none;}
			.item{
				text-align: right;
				color: rgb(160,160,160);
			}
			i{
				vertical-align: middle;
				@include font-dpr(12px);
				margin-left: 0.133333rem;
			}
		}
	}
</style>