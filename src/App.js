import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Nav from './component/Nav';
import {Banner} from './component/banner';
import {Course} from './component/course';
import {Teacher} from './component/teacher';
import {Foo} from './component/Foo.js';


const {Header,Content,Footer}=Layout;
export default class App extends React.Component{
  render(){
    return(
      <Layout> 

          <Header style={{padding: 0 ,color:'#fff',fontSize:'16px',fontWeight:'bold'}}>
              <Nav />
          </Header>

          <Content>
            <Banner />
            <Course />
            <Teacher />
          </Content>

          <Footer style={{ color:'#fff',background:'#a00',textAlign:'center'}}>
            <Foo />
          </Footer>

      </Layout>
    )
  }
}
  
