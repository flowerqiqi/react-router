import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import axios from 'axios';
import './home.css';
export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
			domain:'http://a.itying.com/'
		}
	}
	componentDidMount(){
		let url=this.state.domain+"api/productlist";
		
		axios.get(url)
		.then((response)=>{
			//console.log(response);
			this.setState({
				list:response.data.result
			});
			
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	render(){
		return (
			<div className="home">
			
			   <div className="list">
			   {
			   	this.state.list.map((item,index)=>{
			   		console.log(item);
			   	return(
			   		<div className="item" key={index}>
			 		<h3 style={{position:'relative',paddingTop:'100px',float:'left'}}>{item.title}</h3>
			 		
			 		<ul style={{listStyleType:'none',width:'800px'}} className="item_list">
			 			{
			 				item.list.map((v,k)=>{
			 					
			 					return (
			 				
			 				<li  key={k}>
			 				<Link to={`/content?id=${v._id}`}>
			 						<div className="inner">
			 						<img src={`${this.state.domain}${v.img_url}`} />
			 						<p>{v.title}</p>
			 						<p className="price">{v.price}元</p>
			 						</div>
			 				</Link>		
			 						</li>
			 				
			 						
			 					)
			 				})
			 			}
			 		
			 		</ul>
			 		</div>
			   	)	
			   	})
			   }
			 		
			 
			   </div>
			</div>
		)
	}
}
