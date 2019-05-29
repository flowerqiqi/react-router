demo.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Input,Button,List } from 'antd';
import 'antd/dist/antd.css';
import store from '../store/index.js';
export default class Demo extends React.Component{
	constructor(props){
		super(props)
		this.state=store.getState();
		console.log(this.state);
		this.change=this.change.bind(this);
		this.handleStoreChange=this.handleStoreChange.bind(this);
		this.handleadditem=this.handleadditem.bind(this);
		store.subscribe(this.handleStoreChange);
		this.handledel=this.handledel.bind(this);
	}
	
	render(){
		return <div style={{margin:'10px'}}>
		<Input placeholder="Enter Info" style={{width:'300px',marginRight:'10px'}} value={this.state.inputValue} onChange={this.change}/><Button type="primary" onClick={this.handleadditem}>添加</Button>
		<h3 style={{ margin: '16px 0' }}>列表清单</h3>
    <List style={{width:'400px'}}
      size="small"
      bordered
      dataSource={this.state.list}
      renderItem={(item,index) => (<List.Item onClick={this.handledel.bind(this,index)}>{item}</List.Item>)}
    />
		</div>
	}
	
	change(e){
		console.log(e.target.value);
		const action={
			type:'change_input_value',
			value:e.target.value
		}
		store.dispatch(action);
	}
	handleStoreChange(){
		this.setState(store.getState())
	}
	handleadditem(){
		const action={
			type:'add_demo_item'
		}
		store.dispatch(action);
	}
	handledel(index){
		alert(index);
		const action={
			type:'del_demo_item',
			index
			
		}
		store.dispatch(action);
	}
	
}


store index.js


import {createStore} from 'redux';
import reducer from './reducer';
const store=createStore(reducer);
export default store;


store  reducer.js


const defaultState={
	inputValue:'',
	list:[]
}
export default (state=defaultState,action)=>{
	if(action.type==='change_input_value'){
		const newState=JSON.parse(JSON.stringify(state));
		newState.inputValue=action.value;
		return newState;
	}
	if(action.type==='add_demo_item'){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue='';
		return newState;
	}
	if(action.type==='del_demo_item'){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}


saga.js

import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from '../component/actiontypes';
import {TodoList} from '../component/actioncreator';
import axios from 'axios';

function* mysaga() {
   yield takeEvery("GET_INIT_LIST", init);  //第一个参数为action的type,第二个参数为处理函数名
}
function* init(){
	const res=yield axios.get('https://api.github.com/users/octocat/gists');
	const action=TodoList(res.data[1].url);
	yield put(action);
console.log('acc');

}
export default mysaga;

actiontypes.js

export const UPDATE_STATE='update_state';
export const ADD_LIST_ITEM='add_list_item';
export const DEL_ITEM='del_item';
export const TODO_LIST='add_data_type';
export const GET_INIT_LIST='get_init_test';

actioncreator.js

import {UPDATE_STATE,ADD_LIST_ITEM,DEL_ITEM,TODO_LIST,GET_INIT_LIST} from './actiontypes.js';

export const HANDLECHANGE=(value)=>({
	type:UPDATE_STATE,
	value
})
export const ADDITEM=()=>({
	type:ADD_LIST_ITEM
})
export const DELITEM=(index)=>({
	type:DEL_ITEM,
	index
})

export const TodoList=(data)=>({
	type:TODO_LIST,
	data
})

export const getInitList=()=>({
	type: GET_INIT_LIST
})

index.JS

import reducer from './reducer';
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'; //引入创建saga中间件方法
import todoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store=createStore(reducer,enhancer);
sagaMiddleware.run(todoSagas); //让我的saga文件执行起来
export default store;


reducer.JSON

if(action.type==='add_data_item'){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(action.data);
		return newState;
	}

demo.JSON
import {UPDATE_STATE,ADD_LIST_ITEM,DEL_ITEM} from './actiontypes.js';
import {HANDLECHANGE,ADDITEM,getInitList} from './actioncreator.js';

componentDidMount(){
		const action=getInitList();
		store.dispatch(action);
		
	}