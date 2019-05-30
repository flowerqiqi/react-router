import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import User from './User';
import Shop from './Shop';
import Main from './Main';
import Info from './Info';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let routers=[
{
	exact:true,
	path:'/',
	component:Home
},
{
	path:'/shop',
	component:Shop
},
{
	path:'/user',
	component:User,
	routes:[
	{
		path:'/user/',
		component:Main,
		exact:true
	},
	{
		path:'/user/info',
		component:Info
	}
	]
}
]
export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return (
			<Router>
			
			<div >
			<header style={{height:'50px',background:'#000',color:'#fff',textAlign:'center',lineHeight:'50px'}}>
			<Link to='/' style={{paddingRight:'30px'}}>首页</Link>
			<Link to='/user' style={{paddingRight:'30px'}}>用户</Link>
			<Link to='/shop' >商户</Link>
			</header>
			{
				routers.map((route,index)=>{
				if(route.exact){
					return <Route exact path={route.path} key={index}
					render={props =>(
						<route.component {...props} routes={route.routes} />
					)}
					/>
					
				}else{
					return <Route  path={route.path} key={index}
					render={props =>(
						<route.component {...props} routes={route.routes} />
					)}
					/>
					
				}
			})
			}
			
			</div>
			</Router>)
	}
}
