import React from 'react';
// import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/nav.css';
import Logo from '../img/logo.png';
import { Row, Col, Icon, Button} from 'antd';
export default class App extends React.Component {
    menus() {
        const mb=document.getElementById('menubar');
        // const bt=document.getElementById('bt');
        if (mb.style.display==='block') {
            mb.style.display='none';
        }else{
            mb.style.display='block';
        }
    }
    render() {
        return (
            <div>
                <Row style={{ background: 'rgba(0,0,0,0.8)', position: 'fixed', zIndex: 9,width:'100%' }}>
                    <Col xs={3} lg={4} ><img src={Logo} alt='logo' /></Col>
                    <Col xs={0} lg={2} >主页</Col>
                    <Col xs={0} lg={2} >课程介绍</Col>
                    <Col xs={0} lg={2} >师资力量</Col>
                    <Col xs={0} lg={2} >就业服务</Col>
                    <Col xs={0} lg={2} >就业圈</Col>
                    <Col xs={3} lg={0} push={18}>
                        <Button onClick={this.menus.bind(this)} style={{ marginBottom: 16}}>
                            <Icon type= 'profile' />
                        </Button>
                    </Col>
                </Row>
                <Row id='menubar'>
                    <Col >主页</Col>
                    <Col >课程介绍</Col>
                    <Col >师资力量</Col>
                    <Col >就业服务</Col>
                    <Col >就业圈</Col>
                </Row>
            </div>
        )
    }
}