<template>
	<div id="conpon">
		<div class="collection_box">
			<ul>
				<li class="item-box">
					<div class="content-left-icon align-center" v-show="edatilFalg">
						<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i>
					</div>
					<div class="content-left align-center">
						<img src="../../common/temImage/1c352c1bed14dd2298c274056716fa5bcdcf36b0ac645-q97kps_fw658.jpg"/>
					</div>
					<div class="content-center item align-center">
						<div>
							<h3>大胖子汽车服务联盟</h3>
							<h4>到期时间：2017-11-12 20:45</h4>
						</div>
					</div>
					<div class="content-right align-center">
						<div>
							<h3>消费满500减200券</h3>
						</div>
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
			this.$emit("set-title", "优惠券", "icon-sousuo", true,{falg:1,text:"管理",style:{color:"#f6a03a","text-align":"right"}});
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    headerRightTextCall(){

		        if(this.edatilFalg){
					this.$emit("set-title", "优惠券", "icon-sousuo", true,{falg:1,text:"管理",style:{color:"#f6a03a","text-align":"right"}});
		       	 	this.edatilFalg = false;
		        }else{
					this.$emit("set-title", "优惠券", "icon-sousuo", true,{falg:1,text:"完成",style:{color:"#f6a03a","text-align":"right"}});
		       		this.edatilFalg = true;
		        }
		    }
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#conpon{
		padding-top: 1.186666rem;
		padding-bottom: 1.306666rem;
		.collection_box{
			margin-bottom: 0.266666rem;
		}
		.mint-popup{
			width: 100%;
		}
		ul{
			padding: 0 0.266666rem;
			li{
				border: 1px solid rgba(210,216,221,0.5);
				background: white;
				margin: 0.266666rem 0;
				padding-left: 0.266666rem;
				border-radius: 0.266666rem;
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
			padding: 0.266666rem 0;
			width: 1.333333rem;
			margin:0 0.533333rem 0 0;
			line-height:  inherit;
			img{
				width: 1.333333rem;
				height: 1.333333rem;
			}
			
		}
		.content-center{
			padding: 0.266666rem 0;
			text-align: left;
			line-height: 0.32rem;
			h3{
				@include font-dpr(15px);
				line-height: 0.373333rem;
				margin-bottom:0.266666rem ;
				color: #333;
			}
			h4{
				@include font-dpr(12px);
			}
		}
		.content-right{
			width: 2.133333rem;
			text-align: left;
			line-height: 0.32rem;
			background: linear-gradient(to right,rgb(242,152,52),rgb(218,115,13)) ;
			border-radius: 0  0.266666rem 0.266666rem 0;
			text-align: center;
			h3{
				line-height: 0.48rem;
				@include font-dpr(14px);
				font-weight: bold;
				color: white;
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