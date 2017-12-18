<template>
	<div id="checkLogistics">
		<div class="commodity_info item-box">
			<div class="align-center">
				<div class="info-left">
					<img src="../../../build/logo.png" />
				</div>
			</div>
			<div class="item">
				<h2>运输中</h2>
				<h3>EMS：165464654</h3>
				<h4>官方电话：</h4>
			</div>
		</div>
		<div class="address item-box">
			<div class="align-center">
				<i class="iconfont icon-dingwei"></i>
			</div>
			<div class="item">
				广东深圳南山
			</div>
		</div>
		<div class="logistics_list">
			<ul>
				<li>
					<i class="iconfont icon-"></i>
					<p class="status">运输中</p>
					<p class="time">2017-11-12 25:39</p>
					<p class="logistics_info">[深圳市]快件已到达 深圳市南山区学苑大道1001南山智园 C217层</p>
				</li>
				<li>
					<p class="time">2017-11-12 25:39</p>
					<p class="logistics_info">[深圳市]快件已到达 深圳市南山区学苑大道1001南山智园 C217层</p>
				</li>
				<li>
					<p class="time">2017-11-12 25:39</p>
					<p class="logistics_info">[深圳市]快件已到达 深圳市南山区学苑大道1001南山智园 C217层</p>
				</li>
			</ul>
		</div>
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
			this.$emit("set-title", "查看物流",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#checkLogistics{
		padding-top: 1.186666rem;
		.commodity_info {
			background: white;
			padding: 0.266666rem;
			.info-left {
					width: 1.333333rem;
					height: 1.333333rem;
				border: 1px solid rgb(160, 160, 160);
				border-radius: 0.266666rem;
				margin-right: 0.266666rem;
				img {
					width: 100%;
					height: 100%;
					border-radius: 0.266666rem;
				}
			}
			h2 {
				color: $mc;
				margin-bottom: 0.133333rem;
				height: 0.4rem;
			}
			h3 {
				color: rgb(160, 160, 160);
				margin-bottom: 0.133333rem;
				height: 0.4rem;
			}
			h4{
				color: rgb(160, 160, 160);
				height: 0.4rem;
			}
		}
		.address{
			padding-left: 1.893333rem;
			margin-top: 0.266666rem;
			background: white;
			i{
				font-size:0.533333rem;
				display: block;
				margin-top: 0.133333rem;
			}
			.item{
				margin: 0.4rem 0.266666rem;
			}
		}
		.logistics_list{
			padding-left: 1.893333rem;
			background: white;
			overflow: hidden;
			ul{
				padding-left: 0.666666rem;
				margin-top: 0.666666rem;
				position: relative;
				li:first-child{
					color: $mc;
					&:before{
						width: 0.373333rem;
						height: 0.373333rem;
						background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNGRiMmNkMC1iNzk4LTc1NDMtODkzNi05M2M2ZDZjZTU3NGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDA0MEYxMUNEQjRDMTFFNzk3MzI4RDVFRUMxQTdEQzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA0MEYxMUJEQjRDMTFFNzk3MzI4RDVFRUMxQTdEQzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2Q4MTYwMmItYTM2NC1kNjQyLWExMDEtMjgwOGMwZDk2MjhkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWVhMGZjNTctY2U5Yi0xMWU3LTkxZWEtZDUwNmY1N2YzNjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pO3v2gAAAd9JREFUeNq81ksoBVEYB/ChG1HkFRcLkTcpS64FKaWUklCUjY2NVwhXFlLII5YW6oqNpIQbShZ3IQtZICLKShYUeUbh/+m7NU0z585hrq9+NTXnnP/MfZzzBby4ChUfFQxlUAQ5LBoe4RhOYA824UG0kE1wLwD6oRnide6HQQI/CNU9uHjOs96CgQZBtMAZDBoE6VUEtMEF1JsNa4UtSFN+V3ZYgDFfYS0wpVhTnTBpFOaAacXaaocGvbAVxT81D+HqMCfEKP6rGW8YGZCcfCQ5vg5iKagcgiQm9kEeVEgG1lJYqcSELhjmazdUSswtobBciaBxvl6GDFiVCMyisGwTA7tVQTtQBRuQyIHVJtb4+c7sggEf/Of07gYH9HHwdTIcQiS/KQW+CNYKpbBbwYBLmFC9Ub7mfhTsqwLdgrVeadc/hTiDAfT0Q1CgeiNtpcAu74cOQdidjc+jYsFZ5jTxfWTyQ4nqnD5Gj/I/5QnkX9N/1CKFvfpht9fWNlx5N+IOePNjWKN61/9UnzsWVw9ca8+zZdUuYVUtwahRW9BlYVtAQTW+Gh46ypvg6Q9BvdogUSs3C6kwB18SIWuQDiO6jaiJjjiJD0rqiLO4jwyBd7jh/pI64nXe+gzrW4ABABwDV4bs50FTAAAAAElFTkSuQmCC") no-repeat 0 0;
						left: -0.833333rem;
					}
				}
				li:last-child{
					&:before{
						width: 0.373333rem;
						height: 0.373333rem;
						background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNGRiMmNkMC1iNzk4LTc1NDMtODkzNi05M2M2ZDZjZTU3NGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUY4MDVDOUVEQjRDMTFFNzk2QjZEOEM5M0Q3MTU0MjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUY4MDVDOUREQjRDMTFFNzk2QjZEOEM5M0Q3MTU0MjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2Q4MTYwMmItYTM2NC1kNjQyLWExMDEtMjgwOGMwZDk2MjhkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWVhMGZjNTctY2U5Yi0xMWU3LTkxZWEtZDUwNmY1N2YzNjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wFQjSAAAAd9JREFUeNq81ksoRFEYB/A7mogirxisyJuUpViQUkopCUWxsLHxyggjSgp5xNJCERtpSphQspiFZiELRERZiaLIMwr/T9/U7Tb3zBzuzFe/unXPOf9753HOZ3K5XIqXCoEyKIIcFgNPcAwnQItswaNoIbPgngn6oQUSPNwPh0R+EKoHmOc5L54WDNIJogXOYEgnyFNFQjtcQL2vYW2wDWnK38oCSzDuLawVphVjqgum9MIKYUYxtjqgwVPYquKfWoQIdZgNYhX/1aw7jAxITj6SHF8HcRRUDsESE/sgDyokA2sprFRighVG+NoBlRJzSygsVyJogq/tkAFrEoFZFJbtw8BuVdAuVMEmJHFgtQ9r/H5nFsGAT/5zuneDA/o4+DoZDiGK35QCXwVrhVHYnWDAJUyq3ihfcz8a9lWBDsFab7Trn0K8zgB6+mEoUL2RtlJgj/fDQkHYvZnPo2LBWWbz4fvI5IcS1Tl9jE4lMOUM4l9TIGqZwt78sNtraweu3BtxJ7z7MaxRvet/qc8dg6sHrrXnmV21SxhVKzCm1xZYDWwLKKjGW8NDR3kzPP8jqFcbJGrl5iAVFuBbImQd0mFUtkm9hSYY5IOSOuIs7iND4QNuuL+kjniDtz7d+hFgAPaOV+rfpdH8AAAAAElFTkSuQmCC") no-repeat 0 0;
						left: -0.833333rem;
					}
				}
				li{
					margin-bottom: 1.066666rem;
					position: relative;
					color: rgb(160,160,160);
					padding-right: 0.266666rem;
					&:before{
						content: "";
						display: block;
						position: absolute;
						top:0.093333rem;
						left: -0.72rem;
						border-radius: 100%;
						width: 0.133333rem;
						height: 0.133333rem;
						background: rgb(200,200,200);
					}
					p{
						line-height: 0.4rem;
					}
				}
				&:before{
					content: "";
					display: block;
					position: absolute;
					top:0.133333rem;
					left: 0;
					height: 84%;
					width: 1px;
					background: rgb(200,200,200);
				}
			}
		}
	}
</style>