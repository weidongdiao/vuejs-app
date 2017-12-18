<template>
  <div id="app">
			<app-header :right-text=rightText @header-right="onHeaderRight"  @header-right-text="onHeaderRightText" :headerTitle="title" :rightIcon="headerRightIcon" :leftIcon="headerLeftIcon"></app-header>		
			<router-view  ref="routerView" @set-title="onSetTitle"></router-view>
  </div>
</template>

<script>
import appHeader from './components/public/header'
export default {
		name: 'app', 
		data() {
			return {
				title: "",
				headerRightIcon:"",
				headerLeftIcon:false,
				rightText:""
			}
		},
		mounted:function(){
			
		},
		methods: {
			onSetTitle(title,rightIcon,leftIcon,rightText) {
				this.title = title;
				this.headerRightIcon = rightIcon?rightIcon:false;
				this.headerLeftIcon = leftIcon?leftIcon:false;
				this.rightText = rightText?rightText:false;
			},
			onHeaderRight(){
				this.$refs.routerView.headerRightCall();
			},
			onHeaderRightText(){
				this.$refs.routerView.headerRightTextCall();
			}
		},
		watch:{
			$route(to, from) {
				this.title = "";
				this.headerRightIcon = "";
				this.headerLeftIcon = false;
      }
		},
		components: {
			'app-header': appHeader,
		}
	}
</script>

<style>
	body{
		padding: 0;
		margin: 0;
	}
</style>
