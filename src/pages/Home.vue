<template>
	<div class="home">
		<div class="home-swiper">
			<mt-swipe :auto="4000">
			  <mt-swipe-item
			  	v-for="img in swiperImgs"
			  	:key="img.id">
				<img :src="img.url" alt="">
			  </mt-swipe-item>
			</mt-swipe>		
		</div>

		<div class="search">
			<input type="text" placeholder="商品搜索：请输入商品关键字">
		</div>

		<div class="cake">
			<img src="/static/cake1.jpg" alt=""><a href="javascript:;"></a></img>
			<img src="/static/cake2.jpg" alt=""><a href="javascript:;"></a></img>
			<ul>
				<li><a href="javascript:;"><img src="/static/cake3.jpg" alt=""></a></li>
				<li><a href="javascript:;"><img src="/static/cake4.jpg" alt=""></a></li>
				<li><a href="javascript:;"><img src="/static/cake5.jpg" alt=""></a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Home",
		data(){
			return{
				swiperImgs:[]
			}
		},
		created(){
			this.$http.getHomeSwiper()
				.then(res=>{
					console.log(res)
					this.swiperImgs=res.data.res_body.imgs
				})
		}
		
	}
</script>

<style scoped lang="scss">
	body{
		width:414px;
	}
	.home-swiper {
		width: 100%;
		height: 180px;
		background: #ccc;
		.mint-swipe img{
			width: 100%;
			height: 180px;
		}
	}
	.search{
		//border:1px solid red;
		input{
			height:38px;
			width:85%;
			margin:0 auto;
			margin: 10px 0;
			margin-left:4%;
			border:1px solid #ccc;
			border-radius:5px;
			padding-left:5%;
		}
	}
	.cake{
		width:414px;
		height:530px;
		img{
			width:414px;
		}
		ul{
			width:414px;
			//display:flex;
			//justify-content: space-between;
			//flex-direction: row;
			img{
				width:138px;
				float:left;
			}
		}
	}
</style>
