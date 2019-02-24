<template>
	<div class="mine">
		<header>
			<h3>abc</h3>
			<div class="own"></div>
		</header>
		<main>
			<ul>
				<li><img src="/static/qb.jpg" alt="">我的钱包</li>
				<li><img src="/static/dd.jpg" alt="">我的订单</li>
				<li><img src="/static/gz.jpg" alt="">退出</li>
			</ul>
		</main>
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

<style lang="scss" scoped>
	.mine{
		header{
			width:100%;
			h3{
				margin:1em 0;
				margin-left:45%;	
				font-size:2em;
				color:#666;
			}
			.own{
				width:5em;
				height:5em;
				border-radius:50%;
				border:3em solid blue;
				margin:0 auto;
			}
		}
		main{
			margin-top:2em;
			border-top:1em solid #eee;
			ul{
				margin-top:2em;
				li{
					img{width:1em;margin-right:2em;}
					line-height:3em;
					padding-left:2em;
				}
			}
		}
	}
</style>
