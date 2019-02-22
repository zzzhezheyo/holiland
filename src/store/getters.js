export default{
	//根据state派生的新的状态，相当于computed
	//这些派生的新数据会被缓存，当依赖发生改变时再重新计算
	totalAmount(state){
		return state.cart.reduce((result,curr)=>result+curr.amount,0)
		// state.cart.reduce(function(result,curr,index,arr){
		// 	return result+curr.amount
		// },0)
	},
	//统计总价格
	totalPrice(state){
		return state.cart.reduce((result,curr)=>result+curr.amount*curr.price,0)
	}
	
}