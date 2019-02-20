<template>
	<div class="app-header">
	     <mt-header>
	        <router-link to="/" slot="left">
	          <a href=""><img src="/static/logo.png" alt=""></a>
	        </router-link>
	        <div slot="right">
	        	<ul>
	        		<li><a href="#">登录</a></li>
	        		<li class="register"><a href="#">注册</a></li>
	        		<li><a href="#">购物车</a></li>
	        	</ul>
	        </div>
	      </mt-header>
	</div>
</template>

<script>
	export default{
		name:"AppHeader"
	}
</script>

<style scoped lang="scss">
ul li a{list-style:none;text-decoration: none;}
.mint-header{
	width: 100%;
	height: 60px;
	background-color: #fff;
	img{
		width:80px;
	}
	ul{
		width:160px;
		float:right;
		heght:60px;
		.register a{
			border-left:1px solid #6dc2df;
			border-right:1px solid #6dc2df;
		}
		li{
			line-height:60px;
			float:left;
			a{color: #6dc2df;padding: 0 7px;font-size:16px;}
		}
	}
}
</style>
