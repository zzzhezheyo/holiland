<template>
	<div class="detail">
		<div class="detail-swiper">
			<mt-swipe :auto="4000">
			  <mt-swipe-item
			  	v-for="img in swiperImgs"
			  	:key="img.id">
				<img :src="img.url" alt="" class="banner">
			  </mt-swipe-item>
			</mt-swipe>		
		</div>

		<!-- <DetailItem>
			
		</DetailItem> -->
	</div>
</template>

<script>
	// console.log
	export default{
		name:"Detail",
		// components:{
		// 	DetailItem
		// },
		// computed:{
		// 	...mapState(['detail'])
		// },
		data(){
			return{
				swiperImgs:[]
			}
		},	
		created(){
			this.$http.getDetailSwiper()
				.then(res=>{
					this.swiperImgs=res.data.res_body.imgs
				})
		}
	}
</script>

<style>
	.detail-swiper {
		width: 100%;
		height: 300px;
		background: #ccc;
	}
	.banner{
		width:100%;
		height:100%;
	}
	.detail-item{
		width: 100%;
		height:200px;
	}
</style>