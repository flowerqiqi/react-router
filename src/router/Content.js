import React from 'react';
import ReactDOM from 'react-dom';

export default class Content extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return <div>我是新闻详情组件</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.aid);
	}
}