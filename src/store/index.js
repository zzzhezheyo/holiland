import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict:true,
	state:{//数据
		// count:1,
		cart:[
			// {id:1,title:"abc",price:200,img:"xxx.jpg",amount:1},
			// {id:2,title:"bcd",price:300,img:"xxx.jpg",amount:1},
			// {id:3,title:"def",price:400,img:"xxx.jpg",amount:1}
		],
		// detail:[]
	},
	getters:{
		//根据state派生的新的状态，相当于computed
		//这些派生的新数据会被缓存，当依赖发生改变时再重新计算
		// totalCount(state){
		// 	return state.count*5;
		// },
		// avgCount(state){
		// 	return state.count/3;
		// }
	},
	mutations:{
		//同步修改state的方法
		// addCount(state,payload){
		// 	// state.count+=(state.count +payload.num)
		// 	state.count+=payload;
		// }

		//向购物车数组中保存购物车的商品对象
		// addDetailItem(state,item){
			
		// 	state.cart.push(item)
			
		// },

		addCartItem(state,item){
			const has = state.cart.some(curr=>{
				if(curr.id==item.id){
					curr.amount+=1
					return true
				}
				return false
			})
			//如果购物车数组中不存在当前选购的item商品对象
			//则将item添加保存到cart数组中
			if(!has){
				item.amount=1,
				state.cart.push(item)
			}
		}
	},
	actions:{
		//异步修改state,参数传递的是store对象
		// addCountAsync(store){
		// 	setTimeout(()=>{
		// 		// store.state.count+=100
		// 		store.commit("addCount",100)
		// 	},2000)	
		// }
	}
})
