<template>
		<header id="app-header" class="item-box"  v-if="title">
			<div class="header-left">
				<div v-if="headerBackIcon" @click=goback >
					<i class="iconfont icon-youjiantou1"></i>
				</div>
			</div>
			<div class="header-left" v-if="rightText && rightText.falg">
			</div>
			<div class="header-center item" v-text="title">
				
			</div>
			<div class="header-right-text" v-if="rightText">
				<div @click=rightTextCallBack :style="rightText.style"  v-text="rightText.text">
					
				</div>
			</div>
			<div class="header-right" v-if="!rightText || rightText.falg">
				<div v-if="headerRightIcon" @click=rightCallBack >
					<i class="iconfont" :class="[headerRightIcon]" >
					</i>
				</div>
			</div>
		</header>
</template>

<script>
	export default {
		props:["headerTitle","rightIcon","leftIcon","rightText"],
		name: 'app-header',
		data() {
			return {
				title:"",
				headerRightIcon:"",
				headerBackIcon:"",
			}
		},
		watch:{
			headerTitle(value){
				this.title=value;
			},
			rightIcon(value){
				this.headerRightIcon=value;
			},
			leftIcon(value){
				this.headerBackIcon=value;
			}
		},
		methods:{
			goback(){
				window.history.go(-1);
			},
			rightCallBack(){
				this.$emit("header-right");
			},
			rightTextCallBack(){
				this.$emit("header-right-text");
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	header{
		color: rgb(51,51,51);
		@include font-dpr(18px);
		text-align: center;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
		border-bottom: 1px solid rgb(210,216,221);
		box-sizing: border-box;
		background: white;
		div{
			
			@include font-dpr(18px);
		}
		.header-right-text{
			width: 1.333333rem;
			line-height: 1.16rem;
			div{
				@include font-dpr(16px);
			}


		}
	}
	.header-left, .header-right{
		width: 1.333333rem;
		line-height: 1.173333rem;
	}
	.header-center{
		line-height: 1.173333rem;
	}
	.header-right{
		i{
			@include font-dpr(18px);
		}
	}
</style>