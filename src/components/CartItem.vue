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
			<mt-button type="danger">-</mt-button>
			{{amount}}
			<mt-button type="danger">+</mt-button>
		</div>
		<mt-button type="danger">删除</mt-button>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name:'CartItem',
		props:['img','title','price','amount','id']
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