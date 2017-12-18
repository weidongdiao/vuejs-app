<template>
	<div>
		<div class="bgWhite">
			
		</div>
		<form action="" method="post"  @submit="enterTo()">
			<div class="register">
				<img src="../../common/img/login.png" class="logo">
				<a class="mint-cell mint-field">
					<div class="mint-cell-left"></div>
					<div class="mint-cell-wrapper">
						<div class="mint-cell-title">
							<span class="mint-cell-text">账号</span>
						</div>
						<div class="mint-cell-value"><input v-model="mobilephone" placeholder="请输入手机号码" type="text" class="mint-field-core">
						</div>
					</div>
					<div class="mint-cell-right"></div>
				</a>
				
				<a class="mint-cell mint-field">
					<div class="mint-cell-left"></div>
					<div class="mint-cell-wrapper">
						<div class="mint-cell-title">
							<span class="mint-cell-text">验证码</span>
						</div>
						<div class="mint-cell-value"><input v-model="smsCode" placeholder="请输入验证码" type="text" class="mint-field-core">
						</div>
						<div class="get_sms_code" ref='captchaBtn' @click="getCaptcha">
							{{getPhoneCode}}
						</div>
					</div>
				</a>
				<!--<a class="mint-cell mint-field">
					<div class="mint-cell-left"></div>
					<div class="mint-cell-wrapper">
						<div class="mint-cell-title">
							<span class="mint-cell-text">密码</span>
						</div>
						<div class="mint-cell-value"><input  placeholder="请输入密码" type="password" class="mint-field-core" v-model="password">
						</div>
						<div class="get_sms_code showPwd" >
							<i class="iconfont icon-kejian"></i>
						</div>
					</div>
				</a>-->
				<input type="submit" class="btn-login" value="确认">
			</div>
		</form>
	</div>
</template>

<script type="text/javascript">
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				mobilephone: '',
				smsCode: '',
				itemArr: '',
				mobileStatus: 0,
				getPhoneCode: "获取验证码",
				ableSendMes: true,
				count: 60,
			}
		},
		mounted() {
			this.$emit("set-title", "注册",false, true);
		},
		methods: {
			...mapMutations([
				'SET_USER_DATA',
			]),
			
			getCaptcha: function() {
				var mobilephone = this.mobilephone.replace(/\s+/g, "");
				if(!this.ableSendMes) {
					return false;
				};
				var phoneReg = /^((13[0-9])|147|(15[^4])|(18[0-9])|(17[0,1,6-8]))\d{8}$/;
				if(!mobilephone) {
					this.Toast({
						message: '请输入手机号码',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				} else if(!phoneReg.test(mobilephone)) {
					this.Toast({
						message: '手机号码不正确',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				}
				this.request({
					method: "post",
					/*请求方式*/
					url: "/mbm/sms",
					/*请求url*/
					dataType: "urlencoded",
					data: {
						mobilephone: mobilephone /*请求参数*/ ,
						type: 2,
					},
					success(data) {
						/*请求成功回调*/
						if(data.errcode == 0) {
							this.ableSendMes = false;
							this.getPhoneCode = this.count + '秒后重发';
							this.ableSend = false;
							this.$refs.captchaBtn.style.fontSize = '0.3rem';
							this.$refs.captchaBtn.style.color = '#d2d8dd';
							var that = this;
							this.Toast({
								message: '发送成功',
								iconClass: 'iconfont icon-iconcg',
								duration: 2000
							});
							var timer = setInterval(function() {
								that.count--;
								that.getPhoneCode = that.count + '秒后重发';
								if(that.count == 0) {
									clearInterval(timer);
									that.getPhoneCode = '获取验证码';
									that.$refs.captchaBtn.style.fontSize = '0.5rem';
									that.$refs.captchaBtn.style.color = '#f6a03a';
									that.count = 60;
									that.ableSendMes = true;
								}
							}, 1000)
						} else {
							var message = data.message
							this.MessageBox.alert(message, '提示');
						}
					},
					error(data) {
						/*请求失败回调*/
						console.log(this)
					},
				})
			},
			
			goregister: function() {
				var mobilephone = this.mobilephone.replace(/\s+/g, "");
				var smsCode = this.smsCode;
				var url = this.localHost + 'mall_buyer_api/index/login';
				var phoneReg = /^((13[0-9])|147|(15[^4])|(18[0-9])|(17[0,1,6-8]))\d{8}$/;
				var smsCodeReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
				if(!mobilephone) {
					this.Toast({
						message: '请输入手机号码',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				} else if(!phoneReg.test(mobilephone)) {
					this.Toast({
						message: '手机号码不正确',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				}
				if(smsCode.replace(" ", "") == "") {
					this.Toast({
						message: '请输入验证码',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				} else if(smsCode.length > 8) {
					this.Toast({
						message: '验证码不能太长哦',
						iconClass: 'iconfont icon-shibai1',
						duration: 2000
					});
					return false;
				}
				window.localStorage["ocMobilePhone"] = mobilephone;
				this.request({
					/*请求方式*/
					method: "post",
					/*请求url*/
					url: "/mbm/index/register",				
					dataType: "urlencoded",
					data: {
						mobilephone: mobilephone /*请求参数*/ ,
						sms_code: smsCode,
					},
					success(data) {
						/*请求成功回调*/
						if(data.errcode == 0) {
							this.SET_USER_DATA(data.result);
							this.$router.push('/login');							
							this.Toast({
								message: '注册成功',
								iconClass: 'iconfont icon-iconcg',
								duration: 2000
							});
						} else {
							var message = data.message;
							this.MessageBox.alert(message, '温馨提示');
						}
					},
					error(data) {
						Toast({
							message: '请求失败',
							iconClass: 'iconfont icon-shibai1',
							duration: 2000
						});
					},
				})
			},
			
			enterTo: function(event) {
				var e = event || window.event || arguments.callee.caller.arguments[0];
				e.preventDefault();
				this.goregister();
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass" scoped>
	@mixin font-dpr($font-size) {
		font-size: $font-size;
		[data-dpr="2"] & {
			font-size: $font-size * 2;
		}
		[data-dpr="3"] & {
			font-size: $font-size * 3;
		}
	}
	.get_sms_code{
		border-radius: 0.133333rem;
		line-height: 0.8rem;
		color: $mc;
		@include font-dpr(14px);
	}
	.showPwd{
		border-radius: 0.133333rem;
		line-height: 0.8rem;
		color:#999;
		width: 1.066666rem;
		text-align: right;
		padding-right: 0.133333rem;
		box-sizing: border-box;
		i{
			@include font-dpr(20px);
		}
	}
	#cue {
		@include font-dpr(12px);
		margin: 1rem 0 0.2rem;
		text-align: center;
	}
	.mint-cell-text{
		@include font-dpr(14px);
		color: #333;
	}
	.mint-field{
		border-bottom: 1px solid rgb(210,216,221);
	}
	.mint-field-core{
		@include font-dpr(14px);
	}
	.cue {
		@include font-dpr(12px);
		margin: 1rem 0 0.2rem;
		text-align: center;
		a {
			color: $mc;
			text-decoration: underline;
		}
	}
	
	.header_login {
		background: #fff!important;
		color: #333;
		border-bottom: solid 1px #999;
	}
	
	.register {
		color: #999;
		margin: 0 0.8rem 1.8rem;
		overflow: hidden;
		min-height: 10.933333rem;
		padding-top: 1.173333rem;
		.logo {
			width: 3.8rem;
			height: 3.8rem;
			margin:1.333333-0.466666rem auto  0.8-0.466666rem;
			display: block;
			border-radius: 100%;
		}
		.positionCss {
			position: absolute;
			width: 8.4rem;
		}
		.mint-cell-wrapper {
			line-height: 1.173333rem;
		}
		.mint-cell-wrapper.font {
			@include font-dpr(15px);
		}
		.mint-cell-wrapper.upload {
			@include font-dpr(16px);
			color: #333;
			span {
				margin-right: 1.5rem;
			}
			.teshu {
				margin-right: 0.2rem;
			}
			.iconfont {
				@include font-dpr(80px);
				color: #999;
				margin-right: 0.5rem;
				background: #fff;
			}
		}
		.botton {
			width: 2.666667rem;
			height: 0.933333rem;
			border-radius: 0.133333rem;
			background: #fff;
			border: solid 1px $mc;
			color: $mc;
			text-align: center;
			line-height: 0.933333rem;
		}
		.verification {
			width: 2.666667rem;
			height: 0.933333rem;
		}
		.left {
			float: left;
			@include font-dpr(15px);
			.iconfont {
				@include font-dpr(8px);
				line-height: 0.4rem;
			}
			a {
				color: $mc;
			}
		}
		.right {
			float: right;
			@include font-dpr(15px);
			a {
				margin-top: 5px;
				color: $mc;
			}
		}
		.btn {
			display: block;
			width: 100%;
			color: #fff!important;
			padding: 0.266667rem 0;
			background: $mc;
			text-align: center;
			border-radius: 0.14rem;
			@include font-dpr(22px);
			margin: 0.7rem 0 0.6rem 0;
		}
		p {
			text-align: center;
			@include font-dpr(15px);
			a {
				color: $mc;
				text-decoration: underline;
			}
		}
	}
	
	.register .clearfix {
		margin-top: 0.266667rem;
		.left{
			color: $mc;
		}
	}
	
	.register .btn-login {
		width: 100%;
		color: #ffffff;
		/*padding: 0.266667rem 0;*/
		background: linear-gradient(to bottom,rgb(255,189,111),rgb(245,157,52));
		text-align: center;
		border-radius: 0.14rem;
		@include font-dpr(15px);
		height: 1.2rem;
		margin: 0.533333rem 0 0.466666rem 0;
		line-height: 1.2rem;
	}
	
	.register .clearfix .left .remember {
		text-align: center;
		display: inline-block;
		width:  0.4rem;
		height: 0.4rem;
		border: 1px solid #999999;
		border-radius: 0.08rem;
		margin-right: 0.133333rem;
		vertical-align: middle;
		position: relative;
		color: white;
	}
	
	.register .clearfix .left .actived {
		border-color: #FF461F;
		color: #FF461F;
	}
</style>