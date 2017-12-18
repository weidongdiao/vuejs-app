<template>
	<div id="accountSafty">
		<div class="item-box">
			<div class="content-left">
				登录密码：
			</div>
			<div class="content-center item">
				***************
			</div>
			<div class="content-right">
				<router-link to="">
					<span>修改</span><i class="iconfont icon-youjiantou"></i>
				</router-link>
			</div>
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
			this.$emit("set-title", "账户安全",false, true);
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
	#accountSafty{
		padding-top: 1.186666rem;
		.item-box{
			background: white;
			line-height: 1.16rem;
			padding:0 0.266666rem;
			.content-center{
				text-align:left;
			}
			.content-right{
				width: 1.833333rem;
				a{
					display: block;
				}
			}
			i{
    			vertical-align: middle;
    			margin-left: 0.133333rem;
			}
		}
	}
</style>