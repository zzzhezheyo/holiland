// import Home from "@/pages/Home.vue"
// import Category from "@/pages/Category.vue"
// import Cart from "@/pages/Cart.vue"
// import Mine from "@/pages/Mine.vue"
// import CategoryList from "@/pages/CategoryList.vue"
import Tabbar from "@/components/Tabbar.vue"
import AppHeader from "@/components/AppHeader.vue"
import BackHeader from "@/components/BackHeader.vue"

//路由懒加载，通常我们将页面级的实现分片打包
const Home=()=> import("@/pages/Home.vue")
const Category=()=> import("@/pages/Category.vue")
const Cart=()=> import("@/pages/Cart.vue")
const Mine=()=> import("@/pages/Mine.vue")
const CategoryList=()=> import("@/pages/CategoryList.vue")
// const AppHeader=()=> import("@/components/AppHeader.vue")
// const Tabbar=()=> import("@/components/Tabbar.vue")
const Detail=()=> import("@/pages/Detail.vue")

const routes = [
    {
	path: '/',
	redirect: "/home",
	meta: {
		isNav: false
	}
    }, {
    	path: "/home",
    	name: "home",
    	components: {
            header: AppHeader,
    		main: Home,
    		tabbar: Tabbar
    	},
    	meta: {
    		navTitle: "主页",
    		isNav: true
    	}
    }, {
    	path: "/category",
    	name: "category",
    	components: {
            header: AppHeader,
    		main: Category,
    		tabbar: Tabbar
    	},
    	meta: {
    		navTitle: "产品",
    		isNav: true
    	},
        children:[
          {
            path:":categoryId",
            name:"categorylist",
            components:{
                default:CategoryList
            }
          }
        ]
    }, {
    	path: "/cart",
    	name: "cart",
    	components: {
            header: BackHeader,
    		main: Cart,
    		tabbar: Tabbar
    	},
    	meta: {
    		navTitle: "购物车",
    		isNav: true
    	}
    }, {
    	path: "/mine",
    	name: "mine",
    	components: {
    		main: Mine,
    		tabbar: Tabbar
    	},
    	meta: {
    		navTitle: "个人中心",
    		isNav: true
    	}
    },
    {
        path:"/detail/:id",
        name:"/detail",
        components:{
            tabbar: Tabbar,
            header:BackHeader,
            main:Detail
        },
        meta:{
            isNav: false
        }
    }
  ];

export default routes;