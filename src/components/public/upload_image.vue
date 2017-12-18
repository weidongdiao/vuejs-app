<template>
	<div id="uploader-image">
		<div class="image-list">
			<div class="image-item" v-for="(item,index) in imageList" @click=removeImage(index)>
				<img :src="item" />
				<i class="iconfont icon-guanbi-copy"></i>
			</div>
			<div class="upload_pic_box" @click=uploadImage  v-if="stop">
				<i class="iconfont icon-tianjiazhaopian"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["maxUploadNum"],
		data() {
			return {
				imageList: [
					"123456"
				],
				fileList:[],
				stop:true,
				maxNum:5,
				dialogFlag:false,
				dialogConent:"",
				dialogTitle:"",
			}
		},
		mounted() {
			this.maxNum=this.maxUploadNum;
		},
		methods: {
			confirm(){
				
			},
			getImageData(){
				var arr = [];
				for(var a in this.fileList){
					arr.push(this.fileList[a]);
				}
				return arr;
			},
			setImageData(imageList){
				if(imageList instanceof Array && imageList.length>0){
					for(var a in imageList){
						this.imageList.push(imageList[a])
						this.fileList.push(imageList[a])
					}
				}
			},
			removeImage(index){
				this.dialogConent = "确认删除照片？";
				this.dialogTitle = "删除照片";
				this.dialogFlag = true;
				var that = this;
				this.confirm=function(){
					that.imageList.splice(index,1);
					that.fileList.splice(index,1);
					that.stop=true;
					that.dialogFlag = false;
				}
			},
			uploadImage() {
				var a = [{
					title: "拍照"
				}, {
					title: "从手机相册选择"
				}];
				var that = this;
				plus.nativeUI.actionSheet({
					title: "上传图片",
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
										if(vm.imageList.length<vm.maxNum){
											vm.imageList.push(dealUrl);
											vm.fileList.push(vm.dataURLtoBlob(dealUrl));
										}else{
											vm.stop=false;
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
										if(vm.imageList.length<vm.maxNum){
											vm.imageList.push(dealUrl);
											vm.fileList.push(vm.dataURLtoBlob(dealUrl));
										}else{
											vm.stop=false;
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
	#uploader-image {
		padding: 0.266666rem 0.266666rem;
		font-size: 0;
		.image-item {
			display: inline-block;
			position: relative;
			width: 1.693333rem;
			height: 1.693333rem;
			border-radius: 0.133333rem;
			margin-bottom: 0.266666rem;
			border: 1px solid rgba(98, 98, 98,0.3);
			box-sizing: border-box;
			vertical-align: middle;
			img {
				width: 100%;
				height: 100%;
				border-radius: 0.133333rem;
			}
			i {
				position: absolute;
				top: -0.16rem;
				right: -0.16rem;
       			font-size: 0.426666rem;
       			color:rgb(219,219,219);
       			background: white;
       			border-radius: 100%;
			}
		}
		.upload-image-button {
			width: 1.6rem;
			height: 1.6rem;
			border: 0.053333rem solid rgb(219, 219, 219);
			position: relative;
			margin-bottom: 0.266666rem;
			vertical-align: middle;
			display: inline-block;
			&:before {
				content: "";
				height: 0.053333rem;
				background: rgb(219, 219, 219);
				width: 80%;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				display: block;
				position: absolute;
			}
			&:after {
				content: "";
				width: 0.053333rem;
				background: rgb(219, 219, 219);
				height: 80%;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				display: block;
				position: absolute;
			}
		}
	}
</style>