import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import News from './News';
import Product from './Product';
import Content from './Content';
import Productcontent from './Productcontent';


export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return (
		 <Router>
      <div>
      <header style={{height:'50px',background:'#000',lineHeight:'50px',textAlign:'center'}}>
      <Link to="/" style={{paddingRight:'20px'}}>首页</Link>
      <Link to="/news" style={{paddingRight:'20px'}}>新闻</Link>
      <Link to="/product">产品</Link>
      </header>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/product" component={Product} />
        <Route path="/content/:aid" component={Content} />
        <Route path="/Productcontent" component={Productcontent} />
      </div>
    </Router>)
	}
}
