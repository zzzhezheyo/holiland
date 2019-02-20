<template>
	<div class="tabbar">
		<!-- <router-link :to="{name: 'home'}">首页</router-link>
		<router-link :to="{name: 'category'}">分类</router-link>
		<router-link :to="{name: 'cart'}">购物车</router-link>
		<router-link :to="{name: 'mine'}">我的</router-link> -->

		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item
				v-for="nav in navs"
				:key="nav.path"
				:id="nav.name">
			    <!-- <img slot="icon" src="../assets/100x100.png"> -->
			   <div class="myfooter">{{nav.meta.navTitle}}</div> 
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import routes from "../router/routes.js"

	export default {
		name: "Tabbar",
		data() {
			return {
				selected: "home",
				navs: routes.filter(curr => curr.meta.isNav)
			}
		},
		watch: {
			// 监视 selected 数据变化，当有变化时，跳转路由
			selected(newValue, oldValue) {
				// newValue 是变化后的数据 
				// oldValue 是变化前的数据
				console.log(newValue, oldValue)
				if(newValue=="category"){
					alert(newValue)
				}else if(newValue=="help"){
					alert(newValue)
				}
				else{
					this.$router.push({name: newValue});
				}	
			}
		}
	}
</script>

<style scoped lang="scss">
	.mint-tabbar{
		width:414px;
		height:45px;
		color:#626262;
		.myfooter{
			line-height:30px;
			font-size:14px;
		}
	}
	
</style>
