<template>
	<div class="detail-item">
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
	console.log(detail-item);
	export default{
		name:'DetailItem',
		props:['img','title','price','amount','id']
	}
</script>

<style lang="scss" scoped>
	
</style>