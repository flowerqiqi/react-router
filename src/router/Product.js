import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from "react-router-dom";
export default class News extends React.Component{
	constructor(props){
		super(props);
		this.state={
				list:[
			{
				aid:1,title:'我是商品111'
			},
			{
				aid:2,title:'我是商品222'
			},
			{
				aid:3,title:'我是商品333'
			},
			{
				aid:4,title:'我是商品444'
			}
			]
		}
	}
	render(){
		return  (<ul>
			{this.state.list.map((item,index)=>{
				return <li key={index}> <Link to={`/Productcontent?aid=${item.aid}`}>{item.title}</Link></li>
			})}
		</ul>)
	}
}
