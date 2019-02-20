<template>
	<div class="category-list">
		商品列表页面
		{{$route.params.categoryId}}
		<div class="product"
			v-for="prod in productList"
			:key="prod.id">
			<div class="img"><img :src="prod.img" alt=""></div>
			<div class="title">{{prod.title}}</div>
			<div class="price">{{prod.price}}</div>
			<mt-button type="primary">+</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CategoryList",
		data(){
			return{
				productList:[]
			}
		},
		methods:{
			getCategoryListData(categoryId){
				this.$http.getProductList(categoryId)
					.then(res=>{
						console.log(res.data.res_body);
						this.productList=res.data.res_body.list;
					})
			}
		},
		//复用Categorylist,所以当不同分类切换，他不会销毁后重新创建，
		//可以使用watch来监视$route的变化
		//监视$route的变化，动态查询数据
		// created(){
		// 	this.getCategoryListData();
		// },
		// watch:{
		// 	$route(newValue,oldValue){
		// 		console.log(newValue,oldValue);
		// 	}
		// }

		beforeRouteEnter(to,from,next){
			next(vm=>{
				console.log(vm);
				vm.getCategoryListData(vm.$route.params.categoryId);
			})
		},
		beforeRouteUpdate(to,from,next){
			this.getCategoryListData(to.params.categoryId);
			next();
		}
	}
</script>

<style>
	
</style>
