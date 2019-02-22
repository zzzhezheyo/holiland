<template>
	<div class="back-header">
	     <mt-header title="好利来">
		  <div slot="left" @click="back">
		    <mt-button icon="back">返回</mt-button>
		  </div>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script>
	export default{
		name:"BackHeader",
		methods:{
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
