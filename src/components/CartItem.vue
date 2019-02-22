<template>
	<div class="cart-item">
		<div class="item-img">
			<img :src="img" alt="">
		</div>
		<div class="item-title">
			{{title}}
		</div>
		<div class="item-price">
			{{price}}
		</div>
		<div class="item-amount">
			<mt-button type="danger" :disabled="amount<=1" @click="minusAmount(id)">-</mt-button>
			{{amount}}
			<mt-button type="danger" @click="addAmount(id)">+</mt-button>
		</div>
		<mt-button type="danger" @click="deleteAmount(id)">删除</mt-button>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name:'CartItem',
		props:['img','title','price','amount','id'],
		created(){
			console.log(this.amount)
		},
		methods:{
			...mapMutations(['addAmount','minusAmount','deleteAmount'])
		}
	}
</script>

<style lang="scss" scoped>
	.cart-item{
		height:8em;
		border:1px solid red;
		margin:1em;
		div{
			display:inline-block;
		}
		.item-img{
			width:60px;
			img{
				width:100%;
			}
		}
	}
</style>