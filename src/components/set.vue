<template>
	<div id="setting">
		
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
			this.$emit("set-title", "设置",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#setting{
		
	}
</style>