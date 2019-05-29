import React from 'react';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
export class Foo extends React.Component{
    render(){
        return(
            <Row>
                <Col>
                    <p>版权信息：秦皇岛朗科科技开发有限公司</p>
                    <p>联系方式：TEL：0335-3233332,15028560112 ;QQ:863233332</p>
                    <p>地址：秦皇岛市海港区河北大街中段新天地A座19楼朗科</p>
                </Col>
            </Row>
        )
    }
}