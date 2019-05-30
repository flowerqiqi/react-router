import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import url from 'url';
import {Link} from "react-router-dom";

export default class Content extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[],
			domain:'http://a.itying.com/'
		}
	}
	render(){
		return (
			
			<div className="inner">
									<div className="back"><Link to='/'>返回</Link></div>
									{this.state.list.img_url?<img src={`${this.state.domain}${this.state.list.img_url}`} />:''}
			 						
			 						<div dangerouslySetInnerHTML={{__html:this.state.list.content}}></div>
			 						<p className="price">{this.state.list.price}元</p>
			 						</div>
			
			
		)
	}
	
	dataFrom=(id)=>{
		let api=this.state.domain+'api/productcontent?id='+id;
		console.log(api);
		axios.get(api)
		.then((response)=>{
			console.log(response);
			this.setState({
				list:response.data.result[0]
			})
		})
		.catch((error)=>{
			console.log(error)
		})
	}
	componentDidMount(){
		let id=url.parse(this.props.location.search,true).query.id;
		this.dataFrom(id);
	}
}
