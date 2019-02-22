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

		<div class="info">
			<div class="title">
				{{title}}
			</div>
			<div class="price">
				￥{{price}}
			</div>
			<p>规格：14x14cm 适2-4人 18x18cm 适4-8人</p>
			<div class="introduce">
				<img :src="introduce" alt="">
			</div>
		</div>

		<div class="addButton">
			<mt-button type="primary" @click.native.stop="addCartItem(detail)">加入购物车</mt-button>
		</div>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name:"Detail",
		data(){
			return{
				swiperImgs:[],
				detail:{},
				title:"",
				price:"",
				introduce:""
			}
		},	
		methods:{
			...mapMutations(['addCartItem']),
		},
		created(){
			let id=this.$route.params.id

			this.$http.getDetailSwiper()
				.then(res=>{
					this.swiperImgs=res.data.res_body.imgs
				}),
			this.$http.getDetailList(id)
				.then(res=>{
					this.price=res.data.res_body.list.price
					this.title =res.data.res_body.list.title
					this.introduce=res.data.res_body.list.img
					// console.log(res.data.res_body.list)
					// this.detail.id=id;
					// this.detail.price=this.price
					// this.detail.title=this.title
					// this.detail.img=this.introduce
					// this.detail.amount = 1
					// console.log(this.detail)
					this.detail={
						id,
						amount:1,
						price:res.data.res_body.list.price,
						title:res.data.res_body.list.title,
						img:res.data.res_body.list.img
					}
				})	
		}
	}
</script>

<style scoped lang="scss">
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
	.info{
		margin-left: 1em;
		line-height: 2em;
		color:#666;
		.price{
			color:#2093cc;
		}
	}
	.introduce{
		margin-left:5em;
	}
	.addButton{
		position: fixed;
	    bottom: 3.2em;
	    right: 0;
	}
</style>