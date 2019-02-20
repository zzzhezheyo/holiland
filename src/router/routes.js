import Home from "@/pages/Home.vue"
import Category from "@/pages/Category.vue"
import Cart from "@/pages/Cart.vue"
import Mine from "@/pages/Mine.vue"
import Tabbar from "@/components/Tabbar.vue"
import AppHeader from "@/components/AppHeader.vue"

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
    	}
    }, {
    	path: "/cart",
    	name: "cart",
    	components: {
            header: AppHeader,
    		main: Cart,
    		tabbar: Tabbar
    	},
    	meta: {
    		navTitle: "和风软点",
    		isNav: true
    	}
    }, {
    	path: "/help",
    	name: "help",
    	components: {
    		main: Mine,
    		tabbar: Tabbar
    	},
    	meta: {
    		navTitle: "帮助中心",
    		isNav: true
    	}
    }
  ];

export default routes;