<template>
	<div id="orderAssess">
		<div class="assess_star_box">
			<div class="assess_star item-box">
				<div class="align-center">
					<img src="../../common/img/login.png" alt="" />
				</div>
				<div class="left-text">
					描述相符
				</div>
				<div class="item">
					<i @click="selectIndex=index" class="iconfont icon-xihuanshoucang" :class="{colorMc:index<=selectIndex}" v-for="(item,index) in 5"></i>
				</div>
			</div>
		</div>
		<div class="textare_box">
			<textarea placeholder="请输入评价" name="" rows="" cols=""></textarea>
		</div>
		
		
		<uploader-image :maxUploadNum="maxImageLength"></uploader-image>
	</div>
</template>

<script>
	import uploaderImage from "../public/upload_image"
	export default {
		components:{
			"uploader-image":uploaderImage
		},
		data() {
			return {
				selectIndex:-1,
				maxImageLength:3
			}
		},
		mounted() {
			this.$emit("set-title", "发表评价",false, true,{text:"发布",style:{color:"#f6a03a"}});
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    headerRightTextCall(){
		        console.log(2444)
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
	#orderAssess{
		padding-top: 1.186666rem;
		background: white;
		.assess_star_box{
			.assess_star{
				margin: 0 0.266666rem;
				padding-left: 0.653333rem;
				line-height: 1.16rem;
				border-bottom: 1px solid $bd;
			}
			.align-center{
			}
			img{
				width: 0.76rem;
				height: 0.76rem;
					border: 1px solid $bd;
					border-radius: 0.266666rem;
			}
			.left-text{
				width: 2.16rem;
				text-align: center;
				@include font-dpr(12px);
				
			}
			i{
				font-size: 0.533333rem;
				margin: 0 0.133333rem;
			}
		}
		.textare_box{
			textarea{
				height: 3.733333rem;
				padding: 0.266666rem;
				width: 100%;
				box-sizing: border-box;
				display: block;
				border: none;
				outline: none;
				resize: none;
				@include font-dpr(12px);
			}
		}
	}
</style>