import React from 'react';
import '../css/teacher.css';
import { Popover, Button, Row,Col } from 'antd';
export class Teacher extends React.Component{
    constructor(props){
        super();
        this.state={
            flag:false,
            con:null
        }
    }
    componentDidMount(){
        this.loadInfo();
    }
    loadInfo() {
        fetch('http://www.qhdlink.com/stutest/teacher.php', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            body: "username=admin&pwd=admin"
        }).then((res) => res.json())
            .then((json) => {
                this.setState(
                    { flag: true, con: json })
            })
            .catch((e) => {
                console.log(e);
            });
    } 
    render(){
        return(
            <Row className='teacher'>
                <h1>配得上大牛的讲师来教你</h1>
                <h3>来自名企的技术主管，BAT核心技术</h3>
                {/* <div className='container-box'> */}
                <Row type='flex' justify="space-around">
                    {
                        this.state.flag ? this.state.con.map((tv)=> {
                            return( 
                            <Col key={tv.names} md={6} sm={12} xs={24} className='card'>
                                    <Popover title={tv.names} content={<div><p>{tv.title}</p><h2>{tv.info}</h2></div>}>
                                    <Button style={{background:'none',border:'none'}}>
                                        <img src={tv.pic} alt={tv.names} />
                                        <h2 style={{color:'#fff'}}>{tv.names}</h2>
                                    </Button>
                                </Popover>
                            </Col>) 
                        }) : '加载中。。。'
                    }
                </Row>
                {/* </div> */}
                
            </Row>
        )
    }
}