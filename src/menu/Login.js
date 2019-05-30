import React from 'react';
import { Redirect} from "react-router-dom";
export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			loginFlag:false
		}
	}
	render(){
		if(this.state.loginFlag){
			return <Redirect to={{pathname:'/'}} />;
		}
		return (
			<div>
			<form onSubmit={this.toLogin}>
			<input type="text" ref="username"/><br /><br />
			<input type="password" ref="password" />
			<br /><br />
			<button type="submit">执行提交</button>
			</form>
			</div>
		)
	}
	toLogin=(e)=>{
		e.preventDefault();
		let username=this.refs.username.value;
		let password=this.refs.password.value;
		console.log(username,password);
		if(username=='admin' && password=='123456'){
			this.setState({
				loginFlag:true
			})
		}else{
			alert('登录失败')
		}
	}
}
