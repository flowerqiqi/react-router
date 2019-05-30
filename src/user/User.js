import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main';
import Info from './Info';
export default class User extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		console.log(this.props.routes);
	}
	render(){
		return (
		<Router>
		<div>
		<div className="content" style={{width:'100%',height:'500px',display:'flex'}}>
			<div className="left" style={{width:'200px',height:'500px',background:'#ccc'}}>
			<Link to='/user/'>个人中心</Link><br />
			<Link to='/user/info'>个人详情</Link>
			
			</div>
			<div className="right" style={{flex:1,height:'500px',background:'#eee'}}>
			{
				this.props.routes.map((route,key)=>{
					if(route.exact){
						return <Route exact path={route.path} 
						component={route.component} key={key}/>
					}else{
						return <Route path={route.path} 
						component={route.component} key={key}/>
					}
					
				})
			}
			</div>
		
		</div>
		
		</div>
		</Router>
		)
	}
}
