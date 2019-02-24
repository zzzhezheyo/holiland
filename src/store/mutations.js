export default{
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
		const has = state.cart.some(curr => curr.id == item.id)
		console.log(has)
		if (has) {
			state.cart = state.cart.filter(curr => {
				if (curr.id == item.id)
					curr.amount += 1
				return true
			})
		} 
		else {
			item.amount = 1
			state.cart.push(item)
		}
	},

	// addCartItem(state,item){
	// 	const has = state.cart.some(curr=>{
	// 		if(curr.id==item.id){
	// 			curr.amount+=1
	// 			return true
	// 		}
	// 		return false
	// 	})
	// 	//如果购物车数组中不存在当前选购的item商品对象
	// 	//则将item添加保存到cart数组中
	// 	if(!has){
	// 		item.amount=1,
	// 		state.cart.push(item)
	// 	}
	// },

	//购物车添加
	addAmount(state,id){
		//some() 方法用于检测数组中的元素是否满足指定条件,some可能不动态更新
		//别使用some
		state.cart = state.cart.filter(curr => {
			if (curr.id == id)
				curr.amount += 1;
			return true
		})
	},
	// 减数量
	minusAmount(state, id) {
		state.cart = state.cart.filter(curr => {
			if (curr.id == id && curr.amount > 1)
				curr.amount -= 1;
			return true
		})
	},
	//删除操作
	deleteAmount(state,id){
		state.cart = state.cart.filter(curr=>{
			if(curr.id==id){
				return false
			}else{
				return true
			}
		})
	},

	modifyLoginState(state,isLogin){
		state.isLogin=isLogin
	}

}