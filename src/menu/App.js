import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Content from './Content';
import Login from './Login';


export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return (
		 <Router>
      <div>
      <h2>路由传值实现无人点餐收银,商品列表及详情</h2>
      <header style={{height:'50px',background:'#000',lineHeight:'50px',textAlign:'center'}}>
      <Link to="/" style={{paddingRight:'20px'}}>首页</Link>
      <Link to="/content" style={{paddingRight:'20px'}}>列表详情</Link>
      <Link to="/login" style={{paddingRight:'20px'}}>登录</Link>
      </header>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/content" component={Content} />
         <Route path="/login" component={Login} />
        
      </div>
    </Router>)
	}
}
