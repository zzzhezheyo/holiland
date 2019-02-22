<template>
	<div class="cart">
		<CartItem
			v-for="item in cart"
			:key="item.id"
			v-bind="item"
		></CartItem>
	<!-- 这是购物车页面
	<br>
	计数数量：{{myCount}}
	<mt-button type="danger" @click="addCount(6)">+</mt-button>
	<mt-button type="danger" @click="addCountAsync(10)">+</mt-button>

	<!-- 总价和均值有问题 -->
	<!-- {{count}}--{{totalCount}}--{{avgCount}}  -->
	</div>
	
</template>

<script>
	import{
		mapState,
		mapActions,
		mapMutations,
		mapGetters
	}from"vuex"
	import CartItem from "@/components/CartItem.vue"
	export default {
		name: "Cart",
		components:{
			CartItem
		},
		computed:{
			...mapState(['cart'])
		},
		created(){
			// console.log(this.$route);
		}
		// computed:{
		// 	...mapState(['count']),
		// 	...mapGetters(['totalCount','avgCount']),

		// 	myCount(){
		// 		return this.$store.state.count
		// 	}
		// },
		// created(){
		// 	// console.log(this),
		// 	// console.log(...mapGetters('totalCount')+"k")
		// },
		// methods:{
		// 	...mapMutations(['addCount']),
		// 	...mapActions(['addCountAsync']),
		// 	// addCount(){
		// 	// 	// this.$store.state.count+=1
		// 	// 	this.$store.commit('addCount',{num:1});
		// 	// },
		// 	// addCountAsync(state){
		// 	// 	this.$store.commit('addCountAsync');
		// 	// }
		// }
	}
</script>

<style lang="scss" scoped>
	.cart{
		margin-bottom:6em;
	}
</style>
