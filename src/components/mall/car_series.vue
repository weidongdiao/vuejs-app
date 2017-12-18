<template>
	<div id="carSeries">		
		<div class="list">
			<ul>
				<li>
					<div class="title">
						<img :src="car_logo">
						<span>{{ brand_name }}</span>
					</div>
				</li>		
			</ul>
			<div class="type">
				<span class="text">华晨宝马</span>
			</div>
			<ul>
				<li v-for='(item,index) in seriesData.huachen' @click="toType" class="serie-item">
					<p>{{ item.car_type_1 }}</p>
					<p>{{ item.car_type_2 }}</p>
					<p>{{ item.car_type_3 }}</p>
					<p>{{ item.car_type_4 }}</p>
				</li>		
			</ul>
			<div class="type">
				<span class="text">宝马汽车</span>
			</div>
			<ul>
				<li v-for='(item,index) in seriesData.baoma' @click="toType" class="serie-item">
					<p>{{ item.car_type_1 }}</p>
					<p>{{ item.car_type_2 }}</p>
					<p>{{ item.car_type_3 }}</p>
					<p>{{ item.car_type_4 }}</p>
				</li>		
			</ul>	
		</div>
		
	</div>
</template>

<script>
	import baoma from "../../common/img/宝马.png"
	export default {
		data() {
			return {
				car_logo: baoma,
				brand_name: "宝马",
				seriesData: {
					huachen: [{
						car_type_1:  "宝马1系", 
						car_type_2:  "X1", 
						car_type_3:  "宝马2系", 
						car_type_4:  "宝马3系", 				
					}],
					baoma: [{
						car_type_1:  "1系 （进口）", 
						car_type_2:  "2系 （进口）", 
						car_type_3:  "3系GT （进口）", 
						car_type_4:  "宝马3系", 				
					}],
				}
			}
		},
		mounted() {
			this.$emit("set-title", "选择车系", true, true);
		
		},
		methods: {
			toType: function() {
				this.$router.push("/carType");
			}
		},
		
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#carSeries {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow: hidden;	
	
		.list {
			margin: 0;
			width: 100%;
			left: 0;
			display: inline-block;
			
			ul {								
				@include font-dpr(13px);
				background-color: #FFF;
				color: rgb(102,102,102);
				
			}
			ul li {														
				vertical-align: middle;
							
				p {
					height: 1.333333rem;
					line-height: 1.333333rem;
					border-bottom: 2px solid white;	
					vertical-align: middle;
				}						
			}
			
			ul li .title {						
				height: 1.333333rem;
				padding-left: 0.266666rem;
				vertical-align: middle;
				text-align: left;
				background-color: #fff;
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
			.type {
				height: 1.066666rem;
			}
			.type .text {
				@include font-dpr(15px);
				padding-left: 0.266666rem;
				line-height: 1.066666rem;
			}
			.serie-item {
				padding-left: 0.266666rem;
				
				p {
					border-bottom: 1px solid rgb(248,248,248);
				}
				p :last-child {
					border-bottom: none;
				}
			}
		}		
	}
	
</style>