<template>
	<div id="integral">
		<div class="integral_header">
			<div>
				<i class="iconfont icon-jinbi"></i>
			</div>
			<span>10000</span>
		</div>
		<div class="integral_title item-box">
			<div class="item">
				赚积分
			</div>
			<div class="item">
				花积分
			</div>
		</div>
		<div class="integral_list_title item-box">
			<div class="item">
				类目
			</div>
			<div class="item">
				数量
			</div>
			<div class="item">
				操作
			</div>
		</div>
		<ul class="integral_list_box">
			<li class="item-box">
				<div class="item">
					<div class="item-box">
						<div class="image_box">
							<img src="../../common/temImage/1c352c1bed14dd2298c274056716fa5bcdcf36b0ac645-q97kps_fw658.jpg"/>
						</div>
						<div class="item align-center">
							<div class="cover">
								<span>签到送积分</span>
							</div>
						</div>
					</div>

				</div>
				<div class="item align-center">
					<div class="cover">
						<span>每日<i>+10</i></span>
					</div>
				</div>
				<div class="item">
						<router-link to="/2333" class="align-center">
							<span>前往</span>
						</router-link>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="item-box">
						<div class="image_box">
							<img src="../../common/temImage/1c352c1bed14dd2298c274056716fa5bcdcf36b0ac645-q97kps_fw658.jpg"/>
						</div>
						<div class="item align-center">
							<div class="cover">
								<span>签到送积分</span>
							</div>
						</div>
					</div>

				</div>
				<div class="item align-center">
					<div class="cover">
						<span>每日<i>+10</i></span>
					</div>
				</div>
				<div class="item">
						<router-link to="/2333" class="align-center">
							<span>前往</span>
						</router-link>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="item-box">
						<div class="image_box">
							<img src="../../common/temImage/1c352c1bed14dd2298c274056716fa5bcdcf36b0ac645-q97kps_fw658.jpg"/>
						</div>
						<div class="item align-center">
							<div class="cover">
								<span>签到送积分</span>
							</div>
						</div>
					</div>

				</div>
				<div class="item align-center">
					<div class="cover">
						<span>每日<i>+10</i></span>
					</div>
				</div>
				<div class="item">
						<router-link to="/2333" class="align-center">
							<span>前往</span>
						</router-link>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="item-box">
						<div class="image_box">
							<img src="../../common/temImage/1c352c1bed14dd2298c274056716fa5bcdcf36b0ac645-q97kps_fw658.jpg"/>
						</div>
						<div class="item align-center">
							<div class="cover">
								<span>签到送积分</span>
							</div>
						</div>
					</div>

				</div>
				<div class="item align-center">
					<div class="cover">
						<span>每日<i>+10</i></span>
					</div>
				</div>
				<div class="item">
						<router-link to="/2333" class="align-center">
							<span>前往</span>
						</router-link>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				indexStatus: 1,
			}
		},
		mounted() {
			this.$emit("set-title", "积分中心", true, true,{text:"积分规则",style:{"margin-left":"-0.8rem",color:"#999","font-size":"0.4rem"}});
		},
		methods: {
			headerRightCall() {
				console.log(2333)
			},
		    headerRightTextCall(){
				this.$router.push("/integralRule");
		    }
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#integral {
		padding-top: 1.186666rem;
			@include font-dpr(14px);
			text-align: center;
		.integral_header {
			background: url("../../common/img/minebg.jpg");
			background-size: cover;
			height: 2.493333rem;
			box-sizing: border-box;
			padding: 0.76rem;
			@include font-dpr(20px);
			color: white;
			i{
				font-size: 0.533333rem;
			}
			div {
				margin-bottom: 0.4rem;
				line-height: 0.32rem;
				font-weight: bold;
			}
		}
		.integral_title{
			line-height: 0.933333rem;
		}
		.integral_list_title {
			line-height: 0.933333rem;
			background: white;
				border-bottom: 1px solid $bd;
				.item:first-child{
					flex: 2;
				}
		}
		.integral_list_box{
			background: white;
			li{
				padding: 0.266666rem 0;
				line-height: 0.48rem;
				border-bottom: 1px solid $bd;
				padding-left: 0.266666rem;
			}
			li:last-child{
				border-bottom: none;
			}
			.image_box{
				width: 1.52rem;
				margin-right: 0.266666rem;
				img{
					width: 1.52rem;
					height: 1.52rem;
				}
			}
			.item-box{
				.item:first-child{
					flex: 2;
					text-align: left;
				}
			}
			i{
				color: $mc;
				font-style: inherit;
			}
			a{
				color: rgb(41,138,234);
				width: 100%;
				height: 100%;
				span{
					width: 100%;
					display: inline-block;
				}
			}
			.cover{
				width: 100%;
			}
		}
	}
</style>