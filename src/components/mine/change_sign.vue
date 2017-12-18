<template>
	<div id="changeSign">
		<div class="inputBox">
			<form action="" method="post" @submit="enterTo($event)" class="item-box">
				<div class="item">
					<input placeholder="请输入个性签名" type="text" name="" id="" v-model="sign" />
				</div>
				<div class="content-right">
					<span class="delt-input" @click="sign=''" v-if="sign"></span>
				</div>
			</form>
		</div>
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
				sign:"",
			}
		},
		mounted() {
			this.$emit("set-title", "修改个性前面",false, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    submitData(){
		    	
		    },
			enterTo(event) {
				var e = event || window.event || arguments.callee.caller.arguments[0];
				e.preventDefault();
				this.submitData();
			},
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#changeSign{
		padding-top: 1.186666rem;
		.inputBox{
			position: relative;
			background: white;
			height: 1.16rem;
			input{
				line-height: 1.16rem;
				height: 1.16rem;
				@include font-dpr(12px);
				width: 100%;
				padding-left: 0.266666rem;
				box-sizing: border-box;
			}
			.content-right{
				width: 1rem;
			}
		}
	}
</style>