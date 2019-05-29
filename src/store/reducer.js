const defaultState={
	inputValue:'hello world,nihao',
	list:[]
}
export default (state=defaultState,action)=>{
	if(action.type==='change_value'){
		const newState=JSON.parse(JSON.stringify(state));
		newState.inputValue=action.value;
		return newState;
	}
	if(action.type==='handle_add'){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue='';
		return newState;
	}
	return state;
}