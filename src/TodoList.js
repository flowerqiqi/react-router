import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import {connect} from 'react-redux';
class TodoList extends React.Component{
	
	render(){
		return (
			<div>
			<div>
			<input type="text" style={{width:'300px',marginRight:'10px'}} value={this.props.inputValue} onChange={this.change}/><button onClick={this.handleAdd}>提交</button></div>
			<ul>
			<li>hello</li>
			</ul>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
	inputValue:state.inputValue	
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		change(e){
				type:'change_value',
				value:e.targat.value
			}
			dispatch(action);
		}
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

