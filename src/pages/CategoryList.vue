<template>
	<div class="category-list">
		商品列表页面
		{{$route.params.categoryId}}
		<ul class="list">
			<li>
				<div class="product"
					v-for="prod in productList"
					:key="prod.id" @click="toDetail(prod.id)">
					<div class="img"><img :src="prod.img" alt=""></div>
					<div class="title">{{prod.title}}</div>
					<div class="price">{{prod.price}}</div>
					<mt-button type="primary" id="add-list" @click.native.stop="addCartItem(prod)">+</mt-button>
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import{
		mapMutations
	}from 'vuex'

	//缓存对象，用于缓存查询到的列表数据ProductList
	//key:使用ctegoryId
	//value：使用根据caategoryid查询到的值
	const cache={}

	//页面级数据缓存
	export default {
		name: "CategoryList",
		data(){
			return{
				productList:[]
			}
		},
		methods:{
			...mapMutations(['addCartItem']),
			// ...mapMutations(['addDetailItem']),

			// detail(categoryId){
			// 	console.log(res.data.res_body.list.id)
			// }

			//查询数据
			getCategoryListData(categoryId){
				//判断是否在缓存中保存对应的数据
				if(Object.keys(cache).includes(categoryId)){
					this.productList=cache[categoryId]
				}else{
					//缓存中不存在发起ajax请求
					this.$http.getProductList(categoryId)
						.then(res=>{
							// console.log(res.data.res_body);
							this.productList=res.data.res_body.list;
							//请求到的数据加入缓存
							cache[categoryId]=res.data.res_body.list;
						})
				}	
			},
			//查看商品详情
			toDetail(id){
				this.$router.push("/detail/"+id)
				// console.log(id);
			},
			addToCart(id){
				console.log("add");
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
	.product{
		width: 42%;
	    margin: 3%;
	    border-radius:3px;
	    border: 1px solid #eaeaea;
	    float: left;
	    #add-list{
	    	margin-left: 75%;
		    width: 32px;
		    border-radius: 50%;
		    height: 30px;
	    }
	}
</style>
