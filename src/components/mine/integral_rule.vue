<template>
	<div id="integralRule">
		<div class="bgWhite">
			
		</div>
		<p>1.因可能存在系统缓存、页面更新导致价格 变动异常等不确定性情况出现，商品售价以 本结算页商品价格为准；
		</p>
		<p>2.因可能存在系统缓存、页面更新导致价格 变动异常等不确定性情况出现，商品售价以 本结算页商品价格为准；
		</p>
		<p>3.因可能存在系统缓存、页面更新导致价格 变动异常等不确定性情况出现，商品售价以 本结算页商品价格为准；
		</p>
	</div>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
			}
		},
		mounted() {
			this.$emit("set-title", "积分规则",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#integralRule{
		padding-top: 1.66666rem;
		p{
			padding:  0 0.4rem;
			text-indent: 2em;	
			@include font-dpr(14px);
			line-height: 0.666666rem;
			color: #333333;
			margin-bottom: 0.133333rem;
		}
	}
</style>