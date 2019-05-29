import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import B1 from '../img/1.jpg';
import B2 from '../img/2.jpg';
import B3 from '../img/3.jpg';

export class Banner extends React.Component{
    render(){
        return(
            <Carousel autoplay>
                <div><img src={B1} style={{width:'100%'}} alt='1' /></div>
                <div><img src={B2} style={{ width: '100%' }} alt='2' /></div>
                <div><img src={B3} style={{ width: '100%' }} alt='3' /></div>
            </Carousel>
        )
    }
}