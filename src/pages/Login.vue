<template>
	<div class="login">	
		<input type="text" placeholder="请输入用户名"><br>
		<input type="password" placeholder="请输入密码"><br>
		<mt-button type="primary" @click="login">登录</mt-button>	
	</div>
</template>

<script>
	import{
		mapMutations
	}from 'vuex'
	export default{
		name:'Login',
		data(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			...mapMutations(['modifyLoginState']),
			login(){//登录
				this.$http.postLogin({})
					.then(res=>{//登录成功
						// console.log(res)
						this.modifyLoginState(true)
						console.log(res)
						window.localStorage.setItem("loginUsername",res.data.res_body.username)
						window.localStorage.setItem("token",res.data.res_body.token)
					})
			}
		}
	}
</script>

<style>
	
</style>