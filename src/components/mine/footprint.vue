<template>
	<div id="footprint">
		<div class="footprint_box">
			<ul>
				<li class="item-box">
					<div class="content-left-icon align-center" v-show="edatilFalg">
						<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i>
					</div>
					<div class="content-left align-center">
						<img src="../../common/temImage/5ec91de231e182b6566acb9849dacf89866ec2854c97b-xI4Jd0_fw658.jpg"/>
					</div>
					<div class="content-right item">
						<h3>大胖子汽车服务联盟</h3>
						<h4 class="item-box"><span><i class="iconfont icon-jiage1"></i>49.00</span><div class="item">2017-11-23 12：39：39</div></h4>
					</div>
				</li>
				<li class="item-box">
					<div class="content-left-icon align-center" v-show="edatilFalg">
						<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i>
					</div>
					<div class="content-left align-center">
						<img src="../../common/temImage/5ec91de231e182b6566acb9849dacf89866ec2854c97b-xI4Jd0_fw658.jpg"/>
					</div>
					<div class="content-right item">
						<h3>大胖子汽车服务联盟</h3>
						<h4><i class="iconfont icon-jiage1"></i>49.00</h4>
					</div>
				</li>
				<li class="item-box">
					<div class="content-left-icon align-center" v-show="edatilFalg">
						<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i>
					</div>
					<div class="content-left align-center">
						<img src="../../common/temImage/5ec91de231e182b6566acb9849dacf89866ec2854c97b-xI4Jd0_fw658.jpg"/>
					</div>
					<div class="content-right item">
						<h3>大胖子汽车服务联盟</h3>
						<h4><i class="iconfont icon-jiage1"></i>49.00</h4>
					</div>
				</li>
			</ul>
		</div>
		<mt-popup
		  v-model="edatilFalg"
		  :modal="modalFlag" position="bottom">
		  <div class="edit_bottom item-box">
				<div class="content-left-icon item">
					<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i><div class="text">全选</div>
				</div>
				<div class="deletBox">
					删除
				</div>
		  </div>
		</mt-popup>
	</div>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				edatilFalg:false,
				modalFlag:false
			}
		},
		mounted() {
			this.$emit("set-title", "我的足迹", false, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    }
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#footprint{
		padding-top: 1.186666rem;
		padding-bottom: 1.306666rem;
		.footprint_box{
			margin-bottom: 0.266666rem;
		}
		.mint-popup{
			width: 100%;
		}
		h2{
			@include font-dpr(16px);
			line-height: 0.4rem;
			padding-top: 0.4rem;
			background: white;
			padding-left: 0.266666rem;
		}
		ul{
			padding: 0 0.266666rem;
			background: white;
			li{
				padding: 0.4rem 0;
				border-bottom: 1px solid rgba(210,216,221,0.5);
			}
			li:last-child{
				padding: 0.4rem 0;
				border-bottom:none;
			}
			
		}
		.edit_bottom{
			background: white;
			border-top: 1px solid $bd;
			line-height: 1.306666rem;
			@include font-dpr(14px);
			padding-left: 0.266666rem;
			.text{
				margin-left: 0.266666rem;
				display: inline-block;
				vertical-align: middle;
			}
			.deletBox{
				width: 2.8rem;
				color: white;
				text-align: center;
				background: linear-gradient(to bottom,rgb(255,189,110),rgb(244,157,53));
			}
		}
		.content-left-icon{
			width: 0.8rem;

			i{
				font-size:0.533333rem;
				color: $mc;
				vertical-align: middle;
			}
			span{
				display: inline-block;
				width: 0.506666rem;
				height: 0.506666rem;
				border: 1px solid $bd ;
				border-radius: 100%;
				vertical-align: middle;
			}

		}
		.content-left{
			width: 1.84rem;
			margin-right: 0.333333rem;
			line-height:  inherit;
			img{
				width: 1.84rem;
				height: 1.84rem;
				border-radius: 0.266666rem;
				border: 1px solid rgb(160,160,160);
			}
			
		}
		.content-right{
			text-align: left;
			line-height: 0.32rem;
			h3{
				@include font-dpr(15px);
				line-height: 0.373333rem;
				margin-bottom:0.133333rem ;
				height: 1.4rem;
			}
			h4{
				@include font-dpr(14px)
				span{
					
					color: $mc;
					i{
						color: $mc;
					}
				}
				div{
					text-align: right;
				}
			}
		}
		.distance{
			@include font-dpr(13px)
			div:last-child{
				text-align: right;
			}
		}
	}
</style>