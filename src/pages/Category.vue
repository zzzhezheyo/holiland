<template>
	<div class="category">
		<!-- <div class="sidebar">
			<router-link to="/category/100" tag="div">1</router-link>
			<router-link to="/category/101" tag="div">2</router-link>
			<router-link to="/category/102" tag="div">3</router-link>
			<router-link to="/category/103" tag="div">4</router-link>
		</div> -->

		<div class="category-list">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Category",
		// data(){
		// 	return{
		// 		categoryList:[]
		// 	}
		// },
		// created(){
		// 	this.$http.getCategoryList()
		// 	.then(res=>{
		// 		console.log(res.data.res_body);
		// 		this.categoryList=res.data.res_body;
		// 	})
		// }
	}
</script>

<style lang="scss">
	.category{
		display: flex;
		.sidebar{
			width:100px;
			height:90vh;
			div{
				height:50px;
				line-height:50px;
				padding:5px 10px;
				&.router-link-exact-active.router-link-active{
					color:#6dc2df;;
				}
			}
		}
		.category-list{
			flex:1;
		}
	}
</style>
