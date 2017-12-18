<template>
	<div id="personInfo">
		<ul class="info_list_box">
			<li class="item-box">
				<div class="content-left">头像</div>
				<div class="content-center item align-center">
					<div>
						<img src="../../../build/logo.png"/>
					</div>
				</div>
				<div class="content-right">
					<i class="iconfont icon-youjiantou"></i>
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">真实姓名</div>
				<div class="content-right item ">
					小明
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">手机号</div>
				<div class="content-right item ">
					13713628448
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">性别</div>
				<div class="content-center item align-center">
					<div>
						男
					</div>
				</div>
				<div class="content-right">
					<i class="iconfont icon-youjiantou"></i>
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">个性签名</div>
				<div class="content-right item">
					<i class="iconfont icon-youjiantou"></i>
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">收货地址</div>
				<div class="content-right item">
					<i class="iconfont icon-youjiantou"></i>
				</div>
			</li>
		</ul>
		<app-footer :selectIndex="4" ></app-footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	export default {
		components:{
			"app-footer":appFooter
		},
		data() {
			return {
			}
		},
		mounted() {
			this.$emit("set-title", "个人信息",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#personInfo{
		padding-top: 1.186666rem;
		
	}
</style>