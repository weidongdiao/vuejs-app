<template>
	<div id="changeSex">
		<ul class="info_list_box">
			<li class="item-box">
				<div class="content-left">男</div>
				<div class="content-right item">
					<i class="iconfont icon-gou" v-show="index==1"></i>
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">女</div>
				<div class="content-right item">
					<i class="iconfont icon-gou" v-show="index==2"></i>
				</div>
			</li>
			<li class="item-box">
				<div class="content-left">保密</div>
				<div class="content-right item" v-show="index==3">
					<i class="iconfont icon-gou"></i>
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
				index:3
			}
		},
		mounted() {
			this.$emit("set-title", "修改性别",false, true);
		},
		methods: {
			
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#changeSex{
		padding-top: 1.186666rem;
		.content-right{
			line-height: 0.8rem;
		}
		.icon-gou{
			font-size: 0.8rem;
			margin-top: 0.2rem;
			display: inline-block;
			color: $mc;
		}
	}
</style>