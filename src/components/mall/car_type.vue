<template>
	<div id="carType">
		<div class="title" v-for='(item,index) in carData.baoma'>
			<img :src="item.car_logo" >
			<span>{{ item.car_name }}</span> |
			<span>{{ item.car_series }}</span>
		</div>
		<div class="list">
			<div class="type">
				<span class="text">2017车款</span>
				<span @click="select(1)" class="btn" v-if="!click1"><i class="iconfont icon-pull-up"></i></span>
				<span @click="select(1)" class="btn" v-if="click1"><i class="iconfont icon-caret"></i></span>
			</div>
			<ul v-if="!click1">
				<li v-for='(item,index) in carData.baoma'>
					<p>{{ item.car_type_1 }}</p>
					<p>{{ item.car_type_2 }}</p>
					<p>{{ item.car_type_3 }}</p>
					<p>{{ item.car_type_4 }}</p>
				</li>		
			</ul>
			<div class="type">
				<span class="text">2016车款</span>
				<span @click="select(2)" class="btn"><i class="iconfont icon-pull-up" v-if="click2"></i></span>
				<span @click="select(2)" class="btn" v-if="!click2"><i class="iconfont icon-caret"></i></span>
			</div>
			<ul v-if="!click2">
				<li v-for='(item,index) in carData.baoma'>
					<p>{{ item.car_type_1 }}</p>
					<p>{{ item.car_type_2 }}</p>
					<p>{{ item.car_type_3 }}</p>
					<p>{{ item.car_type_4 }}</p>
				</li>		
			</ul>
			<div class="type">
				<span class="text">2015车款</span>
				<span @click="select(3)" class="btn"><i class="iconfont icon-pull-up" v-if="click2"></i></span>
				<span @click="select(3)" class="btn" v-if="!click2"><i class="iconfont icon-caret"></i></span>
			</div>
			<div class="type">
				<span class="text">2014车款</span>
				<span @click="select(4)" class="btn"><i class="iconfont icon-pull-up" v-if="click2"></i></span>
				<span @click="select(4)" class="btn" v-if="!click2"><i class="iconfont icon-caret"></i></span>
			</div>
		</div>
	</div>
</template>

<script>
	import baoma from "../../common/img/宝马.png"
	export default {
		data() {
			return {
				click1: false,
				click2: false,
				click3: false,
				click4: false,
				carData: {
					baoma: [{
						car_logo: baoma,
						car_name: "宝马",
						car_series: "3系GT（进口）",
						car_type_1:  "GT 320i 2.0T 手自一体 豪华设计套装", 
						car_type_2:  "GT 320i 2.0T 手自一体 时尚型", 
						car_type_3:  "GT 320i xDrive 2.0T 手自一体 M运动型", 
						car_type_4:  "GT 320i 手自一体 豪华设计套装", 				
					}],
				}
			}
		},
		mounted() {
			this.$emit("set-title", "选择车款", true, true)
		},
		methods: {
			select(index) {
				if(index == 1) {
					this.click1 = !this.click1;
				}
				if(index == 2) {
					this.click2 = !this.click2;
				}
			}
		},
		
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#carType {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow: hidden;	
		
		.title {		
			width: 100%;
			height: 1.333333rem;
			padding-left: 0.533333rem;
			vertical-align: middle;
			text-align: left;
			background-color: white;
			@include font-dpr(17px);
			
			img {
				width: 0.8rem;
				height: 0.8rem;
				vertical-align: middle;
			}
			span {
				display: inline;
				line-height: 1.333333rem;
				padding-left: 0.386666rem;
				padding-right: 0.386666rem;						
			}
		}
		.list {
			background-color: white;
			margin: 0;
			width: 100%;
			left: 0;
			display: inline-block;
			.type {
				@include font-dpr(14px);
				display: flex;
				flex-direction: row;
				justify-content: space-between;	
				right: 0;
				width: 100%;	
			}
			.text {
				display: inline-block;
				margin: 0.333333rem 0.346666rem 0 0.546666rem;
				@include font-dpr(15px);
			}
			.btn {
				color: grey;
				width: 0.5rem;
				padding: 0.3rem 0 0.3rem 0;
				
			}
			ul {								
				@include font-dpr(13px);
				background-color: rgb(248,248,248);
				color: rgb(102,102,102);
				li {														
					vertical-align: middle;
					padding-left: 0.533333rem;
					p {
						height: 1.333333rem;
						line-height: 1.333333rem;
						border-bottom: 2px solid white;	
						vertical-align: middle;
					}						
				}
				
			}
		}	
	}
</style>