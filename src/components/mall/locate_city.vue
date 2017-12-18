<template>
	<div id="locateCity">
		<div class="search">
			<router-link to="/mall" slot="left" class="back">
				<i class="iconfont icon-youjiantou1"></i>
			</router-link>			
			<i class="icon iconfont icon-sousuo"></i><input type="search" placeholder="城市名 / 拼音" class="searchBar">
		</div>
		<div id="cityContent">
			<div class="locate">
				<span class="text">当前定位城市</span>
				<div class="content">
					<span class="city choose"><i class="iconfont icon-dingwei"></i>深圳</span>
				</div>
			</div>
			<div class="locate">
				<span class="text"><i class="iconfont icon-dingwei"></i>热门城市</span>
				<div class="content">
					<span class="city">北京</span>
					<span class="city">上海</span>
					<span class="city">广州</span>
					<span class="city">南京</span>
					<span class="city">杭州</span>
					<span class="city">苏州</span>
					<span class="city">成都</span>
					<span class="city">武汉</span>
					<span class="city">长沙</span>
				</div>
			</div>
			<div class="locate">
				<span class="text">A</span>
				<div class="content">
					<span class="city">北京</span>
					<span class="city">上海</span>
					<span class="city">广州</span>
					<span class="city">南京</span>
					<span class="city">杭州</span>
					<span class="city">苏州</span>
					<span class="city">成都</span>
					<span class="city">武汉</span>
					<span class="city">长沙</span>
				</div>
			</div>
			<div class="locate">
				<span class="text">B</span>
				<div class="content">
					<span class="city">北京</span>
					<span class="city">上海</span>
					<span class="city">广州</span>
					<span class="city">南京</span>
					<span class="city">杭州</span>
					<span class="city">苏州</span>
					<span class="city">成都</span>
					<span class="city">武汉</span>
					<span class="city">长沙</span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			
		},
		
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#locateCity {
		.search {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 1.173333rem;
			display: flex;	
			background-color: #fff;
			
			.back {
				vertical-align: middle;
				margin-top: 0.32rem;
			}
			.searchBar {
				position: relative;
				width: 8.8rem;
				height: 0.8rem;
				background-color: rgba(0,170,238,0.9);
				opacity: 0.3;
				border-radius: 0.4rem;
				padding-left: 0.8rem;
				margin-top: 0.186666rem;
				margin-bottom: 0.186666rem;
				margin-left: 0.453333rem;
				@include font-dpr(14px);
				color: #000;
			}
			.icon {
				position: absolute;
				left: 0.24rem;
				margin-top: 0.4rem;
				z-index:3;
				vertical-align: middle;				
				padding-left: 1.0rem;			
			}
		}
		
	}
	#cityContent {
		position: relative;
		width: 100%;
		margin-top: 1.773333rem;	
		overflow-y: hidden;		
		.locate {		
			.text {
				@include font-dpr(15px);
				padding-left: 0.533333rem;				
				height: 0.8rem;
				vertical-align: middle;
			}
			.content {
				background-color: white;
				padding: 0.4rem 0.533333rem 0.4rem 0.533333rem;
				margin-top: 0.8rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				flex-wrap: wrap;
				.city {
					width: 2.333333rem;
					height: 0.88rem;
					border: 0.013333rem solid rgb(210,216,221);
					border-radius: 1.44rem;
					@include font-dpr(17px);
					color: rgb(102,102,102);
					margin-left: 0.433333rem;
					margin-bottom: 0.213333rem;
					text-align: center;
					vertical-align: middle;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.choose {
					border: 0.013333rem solid rgb(0,170,238);
					color: rgb(0,170,238);
				}
			}
		}
	}
	
</style>