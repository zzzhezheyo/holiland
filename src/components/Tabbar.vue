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
			    <div @click="show(nav.name)" class="moreheight">{{nav.meta.navTitle}}
					<ul :class="[{'moreul':flag1,'nomoreul':flag2}]" v-if="nav.name == 'category'">
                        <li><router-link 
							v-for="cat in categoryList"
							:key="cat.id"	
                        	:to="`/category/${cat.id}`"
                        	tag="li">{{cat.name}}</router-link></li>
                       <!--  <li><router-link to="/category/101">儿童系列</router-link></li>
                        <li><router-link to="/category/102">珍爱系列</router-link></li>
                        <li><router-link to="/category/103">尊爱系列</router-link></li>
                        <li><router-link to="/category/104">和风软点</router-link></li>  -->
                    </ul>
			   </div> 
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import routes from "../router/routes.js"

	export default {
		name: "Tabbar",
		created(){
			//异步加载分类列表数据
			this.$http.getCategoryList()
			.then(res=>{
				console.log(res.data.res_body.list);
				this.categoryList=res.data.res_body.list,
				console.log("loading....")
				// this.$nextTick(()=>{
				// 	this.$route.push(`category/${this.categoryList[0].id}`)
				// })
			})
		},
		beforeUpdate(){
			console.log("beforeUpdate")
		},
		data() {
			return {
				selected: this.$route.name,
				navs: routes.filter(curr => curr.meta.isNav),
				flag1: false,
	            flag2: true,
	            categoryList:[]
			}
		},
		watch: {
			// 监视 selected 数据变化，当有变化时，跳转路由
			selected(newValue, oldValue) {
				// newValue 是变化后的数据 
				// oldValue 是变化前的数据
				console.log(newValue, oldValue)
				if(newValue=="category"){
					// alert(newValue)
					// this.$router.push({name: newValue});
				}else if(newValue=="help"){
					alert(newValue)
				}
				else{
					this.$router.push({name: newValue});
				}	
			}
		},
		methods:{
	        show(thisname){
	            if(this.flag2 && thisname === "category"){
	                this.flag1 = true
	                this.flag2 = false
	            }else{
	                this.flag1 = false
	                this.flag2 = true
	            }
	        }
	    }
	}
</script>

<style scoped lang="scss">
	.moreheight {
        height: 2.4em;
        line-height: 2.4em;
        color: #626262;
        font-size: 14px;
        position: relative;
    }
    .moreul1,
    .moreul {
        position:absolute;
        left: 2%;
        bottom:3.2em ;
        width: 96%;
        display: block;
        background-color: #fff;
        padding: 0;
        border: 0.1em solid #ccc;
        border-radius: 5%;
        display: flex;
        flex-direction: column;
    }
    .moreul1 li,
    .moreul li{
        list-style: none;
        text-align: center;
        border-bottom: 0.1em solid #ccc;
        flex: 1;
        line-height: 200%;
        box-sizing: border-box;
    }
    .moreul1 li:last-child,
    .moreul li:last-child{
        border-bottom: none;
    }
     .moreul1 li a,
    .moreul li a{
        color: #626262;
        font-size: 0.8em;
        text-decoration: none;
    }
    .nomoreul1,
    .nomoreul {
        display: none;
    }
</style>
