<template>
	<div id="editAddressComponent">
		<div class="addres-cont">

			<ul class="list">
				<li class="first">
					<span class="lab">收货人</span>
					<input type="text" v-model="addressData.recipient_name" placeholder="请输入收货人">

				</li>
				<li class="first">
					<span class="lab">联系电话</span>
					<input type="text" v-model="addressData.recipient_mobilephone" placeholder="请输入联系电话">

				</li>
				<li class="second">
					<div class="left">
						<span class="lab">所在地区</span>
					</div>
					<div class="right" @click='showFalg()'>
						<p class="addres">{{addressData.recipient_province}} {{addressData.recipient_city}} {{addressData.recipient_district}}</p>
						<div class="choose-addres">
							<span>请选择</span>
							<i class="iconfont icon-youjiantou"></i>
						</div>

					</div>
				</li>
			</ul>
			<div class="detail-addres">
				<textarea name="" id="" cols="30" rows="10" v-model='addressData.recipient_address' class="addres-area"></textarea>
			</div>
			<div class="saveAddress orange-button">保存</div>
		</div>
		<selectAddress v-show='showFlags'></selectAddress>
	</div>
</template>
<script>
	import { mapGetters, mapMutations } from 'vuex'
	import selectAddress from './selectAddress.vue'
	export default {
		props: ['thisAddress'],
		data() {
			return {
				showFlags: false,
				addressId: 1,
			}
		},
		components: {
			selectAddress
		},
		computed: {
			...mapGetters({
				addressData: 'editAddressData'
			})
		},
		mounted: function() {
			this.$emit("set-title", "编辑地址",true, true);
		},
		methods: {
			back: function() {
				this.$parent.editAddressFlags = false;
			},
			showFalg: function() {
				this.showFlags = true;
			},
			confirm: function() {
				if(this.addressData.name == '') {
					this.MessageBox({
						title: '提示',
						message: '收货人不能为空哦~'
					})
					return false;
				}
				if(this.addressData.mobilephone == '') {
					this.MessageBox({
						title: '提示',
						message: '联系电话不能为空哦~'
					})
					return false;
				} else if(!(/^1[34578]\d{9}$/.test(this.addressData.mobilephone))) {
					this.MessageBox({
						title: '提示',
						message: '请输入正确的手机号码~'
					})
					return false;
				}
				if(this.addressData.province == '' || this.addressData.province == '请选择省') {
					this.MessageBox({
						title: '提示',
						message: '所在省份不能为空哦~'
					})
					return false;
				}
				if(this.addressData.city == '' || this.addressData.city == '请选择市') {
					this.MessageBox({
						title: '提示',
						message: '所在城市不能为空哦~'
					})
					return false;
				}
				if(this.addressData.city != "中山市" && this.addressData.city != "嘉峪关市" && this.addressData.city != "东莞市" && this.addressData.city != "香港" && this.addressData.city != "澳门" && this.addressData.city != "台湾" && this.addressData.city != "五家渠市") {
					if(this.addressData.district == '' || this.addressData.district == '请选择区') {
						this.MessageBox({
							title: '提示',
							message: '所在县区不能为空哦~'
						})
						return false;
					}
					if(this.addressData.address == '') {
						this.MessageBox({
							title: '提示',
							message: '详细地址不能为空哦~'
						})
						return false;
					}
				} else {
					this.addressData.district = "";
				}
				if(this.addressData.address == '') {
					this.MessageBox({
						title: '提示',
						message: '详细地址不能为空哦~'
					})
					return false;
				}
				Indicator.open({
					text: '正在提交',
					spinnerType: 'fading-circle'
				});
//				var url = this.localHost + 'mbapi/address/' + this.addressId;
//				var data = this.this.objTouUrl(this.addressData);
//				this.$http.put(url, data).then((response) => {
//					response = response.data;
//					Indicator.close();
//					if(response.errcode == 0) {
//						this.Toast({
//							message: '修改成功',
//							iconClass: 'iconfont icon-iconcg',
//							duration: 1500
//						});
//						this.$parent.editAddressFlags = false;
//						this.$parent.getData();
//					} else {
//						this.MessageBox({
//							title: '提示',
//							message: response.message
//						});
//					}
//				}).catch(function(error) {
//					Indicator.close();
//					this.Toast({
//						message: '请求失败',
//						iconClass: 'iconfont icon-shibai1',
//						duration: 2000
//					});
//				})
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#editAddressComponent {
		padding-top: 1.186666rem;
		.mint-popup {
			width: 100%;
			height: 100%;
		}
		
	}
</style>