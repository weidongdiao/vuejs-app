<template>
	<div id="serviceCategory">
		<nav id="nav" class="nav">
				<mt-navbar v-model="selected" id="index_nav">
					<mt-tab-item id='0'><span type="1" class="tab_span">推荐服务</span></mt-tab-item>
					<mt-tab-item id='1'><span  class="tab_span" type="1">保养服务</span></mt-tab-item>
					<mt-tab-item id='2'><span class="tab_span" type="2">美容服务 </span></mt-tab-item>
				</mt-navbar>
				<i class="iconfont icon-xiala" @click="loadMoreData" v-if='0'></i>
		</nav>		
		<div class="content">
			<div class="category">
				<div class="title">当前选择服务</div>
				<div class="option">
					<div class="text choose">{{ service_item1 }}</div>
				</div>
			</div>
			<div class="category">
				<div class="title">常规保养</div>
				<div class="option">
					<div @click="chooseStore()" class="text">{{ service_item1 }}</div>
					<div @click="chooseStore()" class="text">{{ service_item2 }}</div>
					<div @click="chooseStore()" class="text">{{ service_item3 }}</div>
					<div @click="chooseStore()" class="text">{{ service_item4 }}</div>
					<div @click="chooseStore()" class="text">{{ service_item5 }}</div>
					<div @click="chooseStore()" class="text">{{ service_item6 }}</div>
				</div>
			</div>
			<div class="category">
				<div class="title">深度保养</div>
				<div class="option">
					<div class="text">{{ service_item1 }}</div>
					<div class="text">{{ service_item2 }}</div>
					<div class="text">{{ service_item3 }}</div>
					<div class="text">{{ service_item4 }}</div>
					<div class="text">{{ service_item5 }}</div>
					<div class="text">{{ service_item6 }}</div>
				</div>
			</div>
			<div class="category">
				<div class="title">清洁保养</div>
				<div class="option">
					<div class="text">{{ service_item1 }}</div>
					<div class="text">{{ service_item2 }}</div>
					<div class="text">{{ service_item3 }}</div>
					<div class="text">{{ service_item4 }}</div>
					<div class="text">{{ service_item5 }}</div>
				</div>
			</div>
		</div>
		<footer>
			<app-footer :selectIndex="2"></app-footer>
		</footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	export default {
		data() {
			return {
				selected:"0",
				service_item1: "整车清洗",
				service_item2: "节气门清洗",
				service_item3: "发动机清洗",
				service_item4: "空调杀菌",
				service_item5: "蒸发箱清洗",
				service_item6: "更换防冻液",
			}
		},
		mounted() {
			this.$emit("set-title", "选择服务", true, true, {falg:0,text:"下一步",style:{color:"rgb(160,160,160)","text-align":"right"}});
		},
		methods: {
			
			chooseStore: function(store) {
				this.$router.push("/serviceStore")
			},
		},
		components: {
			'app-footer': appFooter,
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#serviceCategory {
		position: relative;
		width: 100%;
		margin-top: 1.093333rem;	
		overflow-y: hidden;		
						
		.content {
			width: 100%;
			overflow-y: hidden;
			.category {
				width: 100%;
			}
			.category .title {
				display: inline-block;
				height: 1.066666rem;
				line-height: 1.066666rem;
				@include font-dpr(15px);
				color: rgb(51,51,51);
				margin-left: 0.266666rem;
				vertical-align: middle;
			}
			.category .option {
				display: flex;
				flex-flow: row;
				flex-wrap: wrap;
				text-align: center;
				width: 100%;
				background-color: #fff;
				color: rgb(102,102,102);			
			}
			.category .option .text {
				display: block;
				width: 29%;
				height: 0.88rem;
				line-height: 0.88rem;
				text-align: center;
				vertical-align: middle;
				margin: 0.2rem;
				border: 0.013333rem solid rgb(102,102,102);
				border-radius: 0.44rem;
				font-size: 0.4rem;
				@include font-dpr(15px);
			}
			.category .option .choose {
				color: rgb(0,170,238);
				background-color: #fff;
				border: 0.013333rem solid rgb(0,170,238);
			}
		}
		footer {
			padding-top: 1.666666rem;
		}
	}
	
	
		.nav {
			position: relative;
			background: white;
			overflow: hidden;
			width: 100%;
			height: 1.173333rem;
			border-bottom: 1px solid #E5E5E5;
		}
		.mint-navbar .mint-tab-item {
			padding: 0;
			color: rgb(83,83,83);
			.tab_span {
				display: block;
				height: 1.12rem;
				line-height: 1.12rem;
				@include font-dpr(12px);
				
			}
		}
		.mint-navbar .mint-tab-item.is-selected {
			color: $mc!important;
			margin: 0;
			border-bottom: 1px solid $mc;
		}
	
</style>