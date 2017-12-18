<template>
	<div id="searchOrder">
		<div class="header_select_search">
			<div class="selectHeadBox" :class="{select_show:selectShow}" @click="selectShow=!selectShow">
				<div>
					<span>{{selectLabel}}</span><i class="iconfont icon-xiala"></i>
				</div>
				<ul>
					<li v-for="(item,index) in options" @click.stop=select(item) >{{item.label}}</li>
				</ul>
			</div>
			<div class="item"  @click="selectShow=false">
				<form action="" method="post" @submit="enterTo($event)">
					<input type="text" name="" id="" v-model="keyWord" @blur="setKeyWord"/>
				</form>

			</div>
			<div class="iconfont_box" @click=search>
				<i class="iconfont icon-search"></i>
			</div>
		</div>
		<div class="mengcheng" v-show="selectShow" @click="selectShow=!selectShow">
			
		</div>
	</div>
</template>

<script>
	export default {
		props:["options"],
		data() {
			return {
				selectLabel:"订单号",
				selectValue:this.options[0].value,
				selectShow:false,
				keyWord:"",
			}
		},
		mounted() {
			
		},
		methods: {
			setKeyWord(){
				if(this.keyWord.replace(/\s+/g, "")){
					this.$parent.keyWord = this.keyWord.replace(/\s+/g, "");
				}
			},
			select(item){
				this.selectLabel = item.label;
				this.selectValue = item.value;
				this.$parent.searchType = item.value;
//				this.$parent.searchByKeyWord(item.value,this.keyWord);
				this.selectShow=false;
			},
			search(){
				if(!this.keyWord){
					this.Toast({
						message: '请输入关键字',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				}
				var value = this.selectValue;
				this.$parent.searchByKeyWord(value,this.keyWord);
				this.selectShow=false;
			},
			enterTo(event) {
				var e = event || window.event || arguments.callee.caller.arguments[0];
				e.preventDefault();
				this.search();
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#searchOrder {
		background: lightblue;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index:4;
		border-radius: 0.7rem;
		/*border-top: 0.133333rem solid #f4f4f4;*/
		border-bottom: 1px solid #f4f4f4;
		.mengcheng{
			position: absolute;
			width: 100%;
			height: 14.5rem;
		}
		.iconfont_box{
			width: 1.066666rem;
			line-height: 0.933333rem;
			text-align: center;
		}
		form{
			width: 100%;
			height: 100%;
			input{
				width: 100%;
				height: 100%;
				padding-left: 0.133333rem;
				box-sizing: border-box;
				line-height: 0.706666rem;
				@include font-dpr(12px);
			}
		}
		.selectHeadBox{
			width:3.68rem;
			height: 0.933333rem;
			-webkit-transition: height 0.3s; 
			transition: height 0.3s; 
			overflow:hidden;
			div{
				border-right: 1px solid #f4f4f4;
			}
			span{
				display: inline-block;
				width: 3.133333rem;
				padding-left: 0.4rem;
				box-sizing: border-box;
				line-height: 0.933333rem;
			}
			@include font-dpr(12px);
			color: #333;
		}
		.select_show{
			height: 14.666666rem!important;
			overflow:visible!important;
		}
		.header_select_search{
			position: relative;
			overflow: visible;
			height: 0.933333rem;
			border-bottom: 1px solid #f4f4f4;
			margin-bottom: 0;
			z-index:4;
			ul{
				margin-top: 0.2rem ;
				width:3.68rem;
				background: white;
				line-height: 0.706666rem;
				border-radius:0 0 0.053333rem 0.053333rem;
			    -webkit-box-shadow: 0 0.053333rem 0.32rem 0 rgba(0,0,0,.3);
			    box-shadow: 0 0.053333rem 0.16rem 0 rgba(0,0,0,.3);
			    li{
					width:3.68rem;
					padding-left: 0.4rem;
					box-sizing: border-box;
			    }
				li:active{
					background: #f5f5f5;
					color: #02c1df;
				}
			}
		}
	}
</style>