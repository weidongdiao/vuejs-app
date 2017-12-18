<template>
	<div v-show='1' id="manageAddress">
		<div id="manageAddressCt">
			<div class="manageAdds">
				<ul v-if='1'>
					<li v-for='(item,index) in addressData'>
						<div class="address" @click=selectAddress(item)>
							<div class="user">
								<span class="name" v-text='item.recipient_name'></span>
								<span class="phone" v-text='item.recipient_mobilephone'>18300763552</span>
								<div class="clear"></div>
							</div>
							<div class="detailAdds">
								<p>{{item.recipient_province}} {{item.recipient_city}} {{item.recipient_district}} {{item.recipient_address}}</p>
							</div>

						</div>
						<div class="choose item-box">
							<div class="left" @click='setDefault(item,index)'>
								<span v-show="defalutIndex!=index"></span><i v-show="defalutIndex==index" class="iconfont icon-gou3"></i><b>设置为默认</b>
							</div>
							<div class="right item">
								<div>
									<span></span>
								</div>
								<div class="edit" @click="editAddress(item)">
									<span>编辑</span>
								</div>
								<div class="delet" @click='deleteAddress(item,index)'>
									<span class="deletBt">删除</span>
								</div>
							</div>
						</div>
					</li>

				</ul>
				<ul v-if="addressData&&addressData.length<=0" class="no_address">
					<li>
						<img src="" />
						<p>您还没有添加收货地址，快去添加吧</p>
					</li>
				</ul>
			</div>

		</div>
		<div id="addNewAddress" class="orange-button" @click='addAddress()'>
			+ 添加新地址
		</div>
	</div>
</template>
<script type="text/javascript">
  	import {mapGetters, mapMutations} from 'vuex'
	export default {
		props: ['addressFlag'],
		data() {
			return {
				checked: false,
				productQuentity: 1,
				money: '',
				defalutIndex:"2",
				addressData: [{
					recipient_name:"测试姓名",
					recipient_mobilephone:"13713625448",
					recipient_province:"广东",
					recipient_city:"深圳",
					recipient_district:"南山",
					recipient_address:"椅夺顶替要夺"
				},{
					recipient_name:"测试姓名",
					recipient_mobilephone:"13713625448",
					recipient_province:"广东",
					recipient_city:"深圳",
					recipient_district:"南山",
					recipient_address:"椅夺顶替要夺"
				},
				{
					recipient_name:"测试姓名",
					recipient_mobilephone:"13713625448",
					recipient_province:"广东",
					recipient_city:"深圳",
					recipient_district:"南山",
					recipient_address:"椅夺顶替要夺"
				},
				{
					recipient_name:"测试姓名",
					recipient_mobilephone:"13713625448",
					recipient_province:"广东",
					recipient_city:"深圳",
					recipient_district:"南山",
					recipient_address:"椅夺顶替要夺"
				},
				{
					recipient_name:"测试姓名",
					recipient_mobilephone:"13713625448",
					recipient_province:"广东",
					recipient_city:"深圳",
					recipient_district:"南山",
					recipient_address:"椅夺顶替要夺"
				},],
				content: 0,
				selectItem: {},
				addAddressFlags: false,
				editAddressFlags: false,
				editAddressData: {},
			}
		},
		mounted() {
			this.$emit("set-title", "地址管理",true, true);
		},
		methods: {
		      ...mapMutations([
		        'SET_EDIT_ADDRESS_DATA',
		      ]),
			 headerRightCall() {
		        console.log(2333)
		    },
			selectAddress: function(item) {
				this.$parent.defaultAddress = item;
				this.$parent.addressManageFlag = false;
				this.$parent.addressData = item;
			},
			setDefault: function(item,index) {
				this.defalutIndex = index;
				this.selectItem = item;
			},
			back: function() {
				this.$parent.addressManageFlag = false;
			},
			deleteAddress: function(item, index) {
				this.MessageBox.confirm('是否确认删除收货地址？').then(action => {
					var url = this.localHost + 'mbapi/address/' + item.id;
					this.$http.delete(url).then(
						(success) => {
							var response = success.data;
							if(response.errcode == 0) {
								this.Toast({
									message: '删除成功',
									iconClass: 'iconfont icon-iconcg',
									duration: 1500
								});
								this.addressData.splice(index, 1);
							} else {
								this.MessageBox({
									title: '提示',
									message: response.message
								});
							}
						},
						(error) => {}
					)
				});

			},
			clearMoney: function() {
				this.money = '';
			},
			editAddress: function(item) {
				this.SET_EDIT_ADDRESS_DATA(item);
				this.$router.push("/editAddress")
			},
			addAddress: function() {
				this.$router.push("/newAddress")
			},
			getData: function() {
				var url = this.localHost + 'mbapi/address';
				this.$http.get(url).then(
					(success) => {
						var res = success.data;
						if(res.errcode == 0) {
							this.addressData = res.result;
						} else {
							this.MessageBox({
								title: '提示',
								message: res.message,
							});
						}
					},
					(error) => {}
				)
			}
		},
		watch: {
			content(value) {
				var url = this.localHost + 'mbapi/address/' + this.selectItem.id + '?setdefault=1';
				this.$http.put(url).then(
					(success) => {
						var res = success.data;
						if(res.errcode == 0) {
							this.Toast({
								message: '设置成功',
								iconClass: 'iconfont icon-iconcg',
								duration: 1500
							});
						} else {
							this.MessageBox({
								title: '提示',
								message: res.message,
							});
						}
					},
					(error) => {}
				)
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/sass">
	/*.head{*/
	/*width: 100%;*/
	/*height: 88px;*/
	/*background: $mc;*/
	/*}*/
	
	@mixin font-dpr($font-size) {
		font-size: $font-size;
		[data-dpr="2"] & {
			font-size: $font-size * 2;
		}
		[data-dpr="3"] & {
			font-size: $font-size * 3;
		}
	}
	
	#addNewAddress {
		margin: 0.266666rem auto 0.533333rem;
		.address {
			position: inherit;
		}
	}
	
	#manageAddress {
		overflow-y: auto;
		.header {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 15;
		}
		.el-radio__inner {
			width: 0.5333rem;
			height: 0.5333rem;
			border: 1px solid #BFCBD9;
		}
		.el-radio__input.is-checked .el-radio__inner {
			border-color: $mc;
			background: $mc;
		}
		.el-radio__inner::after {
			width: 0.2rem;
			height: 0.2rem;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			transform: translate(0, 0) scale(1);
		}
		.el-radio,
		.el-radio__label {
			@include font-dpr(16px);
		}
		.el-radio {
			display: block;
			margin-left: 0.2rem;
			margin-bottom: 0.066666rem;
		}
		.el-radio__input {
			margin-right: 0.13333rem !important;
		}
		.el-radio__input.is-checked .el-radio__inner {
			border-color: $mc;
			background: $mc;
		}
	}
	
	#manageAddressCt {
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-top: 1.173333rem;
		ul {
			padding-bottom: 30;
			overflow: auto;
		}
		.no_address {
			position: fixed;
			width: 100%;
			height: 100%;
			background-color: white;
			li {
				width: 90%;
				height: 8rem;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				text-align: center;
			}
			img {
				display: inline-block;
			}
			p {
				color: #999;
				@include font-dpr(16px);
				margin: 0.133333rem 0;
				line-height: 0.666666rem;
			}
		}
	}
	
	.manageAdds {
		width: 100%;
		/*padding: 0 0.8rem;*/
	}
	
	.manageAdds ul li {
		background: white;
		font-family: 'PingFang-SC-Medium';
		color: #333333;
		margin-bottom: 0.266667rem;
	}
	
	.manageAdds ul li .address {
		padding: 0.533333rem 0.266667rem 0.4rem 0.266667rem;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.manageAdds ul li .address .user .name {

		float: left;
		color: #333;
		@include font-dpr(12px);
	}
	
	.manageAdds ul li .address .user .phone {
		font-size: 0.426666rem;
		float: right;
		color: #333;
		@include font-dpr(12px);
	}
	
	.manageAdds ul li .address .user .clear {
		clear: both;
	}
	
	.manageAdds ul li .address .detailAdds {
		font-size: 0.373333rem;
		margin-top: 0.4rem;
		color: rgb(160,160,160);
		@include font-dpr(12px);
	}
	
	.manageAdds ul li .address .detailAdds p {
		line-height: 0.373333rem;
	}
	
	.manageAdds ul li .choose {
		padding: 0 0.266667rem;
	}
	
	.manageAdds ul li .choose .left {
		font-size: 0.4rem;
		height: 1.093333rem;
		line-height: 1.093333rem;
		span{
			width: 0.346666rem;
			height: 0.346666rem;
			border-radius: 100%;
			border: 1px solid rgba(210,216,221,0.5);
			display: inline-block;
			vertical-align: middle;
			margin-right: 0.266666rem;
		}
		i{
			vertical-align: middle;
			color: rgb(249,141,48);
			margin-right: 0.215rem;
		}
		b{
			vertical-align: middle;
		}
	}
	
	.manageAdds ul li .choose .left .tick {
		display: inline-block;
		width: 0.533333rem;
		height: 0.533333rem;
		border-radius: 100%;
		border: 1px solid #959595;
		margin-right: 0.266667rem;
		vertical-align: middle;
	}
	
	.manageAdds ul li .choose .right {
		text-align: center;
		font-size: 0.4rem;
		height:  1.093333rem;
		line-height:  1.093333rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		width: 5.466666rem;
		div {
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			flex: 1;
			display: block;
			margin-left: 0.266666rem;
			text-align: right;
			span {
				line-height: 1.106666rem;
				padding: 0;
				display: inline-block;
			}
		}
		span {
			padding: 0.133333rem 0;
			-webkit-border-radius: 0.106666re;
			border-radius: 0.106666rem;
		}
	}
	
	.manageAdds ul li .choose .right .edit {
		float: left;
    	max-width: 2.0rem;
		margin-left: 0;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTY4ZTg1YS05YTkzLTgwNGEtOGI5OS03MjM1Nzk2MWVlZTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDJFNDlBNUZBREExMTFFN0E0OTNFQjg4N0EwRkJBQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDJFNDlBNUVBREExMTFFN0E0OTNFQjg4N0EwRkJBQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTUxNWU3MzctNWYwZS1mMTQxLTg3YmItYmI5ZmJlNjk1MGM0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTk1MWFjOTktMmZhYS0xMWU3LTg0YWEtZDliODQ0YjQzM2VhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gCNHcgAAAWVJREFUeNrs2LFOwkAYB/BSikyEhMWVR2B3EJ+A4ACbYxfj5KJPAIn6AL2JDViIo5uExFdwcTLGZ1CIBv9HjoQUKgW+774O9yX/XHNN2l+uvV7bXBRFnmSFYbjWp5S6RtNBRr6XsQLuBs09UkDOA9NfQs6QCuO5f5Bn5HMLrrPSdauBNeQJObYwQO9INS0Ol/9BX+LIEk6XvwOuqzdymCRz0/mK3DHifpEx8hHrT8TpClZ2vCE9y3PiX1zikGcFJwlMhZMCpsZJABNxmMm+NHANhyxxF2i+0Q6lgIk4U02ztLUkgNtwi+ex1D2YBrf70pMVHCeQBMcFJMNxAElx1EByHCWQBUcFZMNRAE84cRTAPCcu/ka9T02QU/M6/8LxQA0IjjGx/pWVpXJAB3RAB3RABzx8LZ4iRaSOPNoGKKU8c25dX5uA+neD/vVQRhrCA9bfBLw0X/Zt5EgINkMGyFV8x58AAwDlv2an3A4EFQAAAABJRU5ErkJggg==") no-repeat 0.603333rem center;
		background-size: 0.4rem 0.4rem;
	}
	
	.manageAdds ul li .choose .right .edit img {
		width: 0.8rem;
		height: 0.8rem;
		/*border: 1px solid #000;*/
		vertical-align: middle;
	}
	
	.manageAdds ul li .choose .right .delet {
		float: right;
		max-width: 1.733333rem;
		margin-left: 0;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTY4ZTg1YS05YTkzLTgwNGEtOGI5OS03MjM1Nzk2MWVlZTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNGQUM4RkJBREExMTFFN0JBMjVBMkJFMDgxMTQ3NjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNGQUM4RkFBREExMTFFN0JBMjVBMkJFMDgxMTQ3NjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTUxNWU3MzctNWYwZS1mMTQxLTg3YmItYmI5ZmJlNjk1MGM0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTk1MWFjOTktMmZhYS0xMWU3LTg0YWEtZDliODQ0YjQzM2VhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rrl1dAAAAYFJREFUeNrsmL9Lw0AYhhPxNyIFRxVcHAVxcOkg6CJOboKDOB2Im4qo4OTkooOgNKKDk6s6FRz0H1D0n3BTSrEgqPE5OKGEay/aNM3wvfBwX3s/8ua+fAmcXygUvATUBQEsQgk24TzORKVU3f42LxltwBK0wwCcwmgSC+sFfRg08X81ZbnxObhyTQyCoFZXid1980nxLT9mvGxK6TvNe9lVXqd1AeYTeh474Bu+ElirAvva4LWhNTlMqYqbpswbtL1aunXu4QN24NMyZlpnB07g3nGNXRiGLXi1vGZGaPbgjnSfRft9y5dEF82liWehaLnoM4zBE4zXMaf7Hk28DgeWMcewAiH0YbLiSnFPjbha/abNOXYvZ5kTVe/vZkGnFIkYFINiUAyKQTEoBsWgGBSDYlAMikHPezdt2TGubJnT8MlCHOlTglU4cox7gEMYgos0Dd4YXNKnBWuNpNhlcBuWm/yYTfzVYFgVT6ZcE2GcItGnVS8tKNiiUqoU/fNHgAEAkaxC+761Eg8AAAAASUVORK5CYII=") no-repeat 0.3233333rem center;
		background-size: 0.4rem 0.4rem;
	}
	
	.manageAdds ul li .choose .right .delet img {
		width: 0.8rem;
		height: 0.8rem;
		/*border: 1px solid #000;*/
		vertical-align: middle;
		margin-right: 0.266667rem;
	}
	/*body{*/
	/*background: #f3f3f3;*/
	/*}*/
</style>