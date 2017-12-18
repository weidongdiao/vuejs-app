<template>
	<div id="about">
		<div class="bgWhite"></div>
		<div class="logo_box">
			<img src="../../common/img/officialWebsiteLogo2.png"/>
		</div>
		<p>大胖子汽车服务联盟，希望成为中国最大的汽车后服务企业，让高品质的汽车服务随时随地、随心所欲！</p>
		<p>大胖子汽车服务联盟，希望成为中国最大的汽车后服务企业，让高品质的汽车服务随时随地、随心所欲！</p>
		<p>大胖子汽车服务联盟，希望成为中国最大的汽车后服务企业，让高品质的汽车服务随时随地、随心所欲！</p>
		<div class="qr_box">
			<img src="../../../build/logo.png"/>
		</div>
		<div class="cue">扫描二维码，您的朋友也可以下载此软件！</div>
	</div>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
			}
		},
		mounted() {
			this.$emit("set-title", "关于我们",false, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#about{
		padding-top: 1.173333rem;
		.logo_box{
			width:6.32rem;
			margin: 0.4rem auto;
			height:1.28rem;
			img{
				width: 100%;
				height: 100;
			}
		}
		.qr_box{
			width:1.866666rem;
			margin: 0.96rem auto 0;
			height:1.866666rem;
			img{
				width: 100%;
				height: 100;
			}
		}
		.cue{
			text-align: center;
			@include font-dpr(12px);
			margin-top: 0.4rem;
		}
		p{
			width: 7.466666rem;
			margin: 0 auto;
			text-indent: 2em;
			@include font-dpr(12px);
			line-height: 0.6rem;
			margin-bottom: 0.4rem;
		}
	}
</style>