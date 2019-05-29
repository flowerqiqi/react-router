import React from 'react';
import {Link } from "react-router-dom";
export default class News extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[
			{
				aid:1,title:'我是新闻111'
			},
			{
				aid:2,title:'我是新闻222'
			},
			{
				aid:3,title:'我是新闻333'
			},
			{
				aid:4,title:'我是新闻444'
			}
			]
		}
	}
	render(){
		return (<ul>
			{this.state.list.map((item,index)=>{
				return <li key={index}> <Link to={`/content/${item.aid}`}>{item.title}</Link></li>
			})}
		</ul>)
	}
}
