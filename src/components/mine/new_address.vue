<template>
	<div id="addNewAddressComponent">
		<div class="addres-cont">
			<ul class="list">
				<li class="first">
					<span class="lab">收货人</span>
					<input type="text" v-model="addressData.name" placeholder="请输入收货人">

				</li>
				<li class="first">
					<span class="lab">联系电话</span>
					<input type="text" v-model="addressData.mobilephone" placeholder="请输入联系电话">

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
			<!-- <mt-field label="详细地址" placeholder="" type="textarea" rows="4" v-modal="introduction" class="detail-addres"></mt-field> -->
			<!--<a href="" class="btn"></a>-->
			<div class="detail-addres">
				<textarea name="" id="" cols="30" rows="10" v-model='addressData.address' class="addres-area" placeholder="请输入详细地址"></textarea>
			</div>
			<div class="orange-button saveAddress" @click=confirm>保存</div>
		</div>
		<selectAddress v-show='showFlags'></selectAddress>
	</div>
</template>
<script>
	import selectAddress from './selectAddress.vue'
	export default {
		data() {
			return {
				showFlags: false,
				addressData: {
					recipient_province: '',
					recipient_city: '',
					recipient_recipient_district: '',
					name: '',
					mobilephone: '',
					address: '',
				},
			}
		},
		components: {
			selectAddress
		},
		mounted: function() {
			this.$emit("set-title", "地址管理",true, true);
		},
		methods: {
			back: function() {
				this.$parent.addAddressFlags = false;
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
				if(this.addressData.recipient_province == '' || this.addressData.recipient_province == '请选择省') {
					this.MessageBox({
						title: '提示',
						message: '所在省份不能为空哦~'
					})
					return false;
				}
				if(this.addressData.recipient_city == '' || this.addressData.recipient_city == '请选择市') {
					this.MessageBox({
						title: '提示',
						message: '所在城市不能为空哦~'
					})
					return false;
				}
				if(this.addressData.recipient_city !="中山市" && this.addressData.recipient_city !="嘉峪关市" && this.addressData.recipient_city !="东莞市" && this.addressData.recipient_city !="香港" && this.addressData.recipient_city !="澳门" && this.addressData.recipient_city !="台湾" && this.addressData.recipient_city != "五家渠市")
				{
					if(this.addressData.recipient_district == '' || this.addressData.recipient_district == '请选择区') {
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
				}else{
					this.addressData.recipient_district="";
				}
				var url = this.localHost + 'mbapi/address';
				var data = this.this.objTouUrl(this.addressData);
				this.$http.post(url, data).then((response) => {
					response = response.data;
					if(response.errcode == 0) {
						this.Toast({
							message: '添加成功',
							iconClass: 'iconfont icon-iconcg',
							duration: 1500
						});
						this.$parent.addAddressFlags = false;
						this.$parent.getData();
					} else {
						this.MessageBox({
							title: '提示',
							message: response.message
						});
					}
				})
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#addNewAddressComponent {
		padding-top: 1.186666rem;
		.mint-popup {
			width: 100%;
			height: 100%;
		}
	}
	
	
</style>