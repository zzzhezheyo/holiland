<template>
	<div class="mine">个人中心
	<br>
	计数数量：{{count}}
	</div>
</template>

<script>
	export default {
		name: "Mine",
		computed:{
			count(){
				return this.$store.state.count
			}
		}
	}
</script>

<style>
	
</style>
