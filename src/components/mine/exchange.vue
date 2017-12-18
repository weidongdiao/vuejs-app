<template>
	<div id="exchange">
		<div class="bgWhite">
			
		</div>
		<h2>优惠券兑换</h2>
		<div class="input-box">
			<input type="text" name="" id="" placeholder="请输入兑换码" />
		</div>
		<div class="orange-button">
			确认兑换
		</div>
		<div class="exchange_explain">
			<h3>兑换说明</h3>
			<p>1.输入优惠券兑换码，点击“确认兑换”，立刻获得优惠券；</p>
			<p>2.所有优惠券只能使用一次，过期/已兑换则无法再次兑换；</p>
			<p>3.兑换成功后优惠券将直接进入您的账户，请前往我>优惠。</p>
		</div>
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
			this.$emit("set-title", "兑换专区",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#exchange{
		h2{
        	@include font-dpr(18px);
			line-height: 3.466666rem;
			text-align: center;
		}
		.input-box{
			width: 8.24rem;
			margin: 0 auto;
			border-radius: 0.266666rem;
			border:1px solid $bd;
        	@include font-dpr(15px);
			input{
				width: 100%;
				line-height: 0.906666rem;
				border-radius: 0.266666rem;
				padding-left: 0.266666rem;
				box-sizing: border-box;
				text-align: center;
			}
		}
		padding-top: 1.186666rem;
		.orange-button{
			margin: 0.266666rem auto;
			width: 8.266666rem;
        	@include font-dpr(15px);
		}
		.exchange_explain{
			color: rgb(201,201,201);
			h3{
				margin:3.733333rem 0 0.4rem 0;
				text-align: center;
        		@include font-dpr(14px);
        			position: relative;
        		&:before{
        			content: "";
        			display: block;
        			height: 1px;
        			width: 3.2rem;
        			position: absolute;
        			top: 0;
        			left: 0.8rem;
        			margin: auto;
        			bottom: 0;
        			background: #c9c9c9;
        		}
        		&:after{
        			content: "";
        			display: block;
        			height: 1px;
        			width: 3.2rem;
        			position: absolute;
        			top: 0;
        			right: 0.8rem;
        			margin: auto;
        			bottom: 0;
        			background: #c9c9c9;
        		}
			}
			p{
				padding-left: 0.866666rem;
        		@include font-dpr(12px);
        		margin-bottom: 0.266666rem;
			}
		}
	}
</style>