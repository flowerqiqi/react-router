import React from 'react';
import ReactDOM from 'react-dom';
import url from 'url';
export default class Productcontent extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return <div>我是新闻详情组件</div>
	}
	componentDidMount(){
		var query=url.parse(this.props.location.search,true).query.aid;
		console.log(query);
	}
	
}