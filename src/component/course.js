import React from 'react';
import { Steps, Row, Col } from 'antd';
import '../css/course.css';
const Step = Steps.Step;

const steps = [
    {
        content: {
            n1:'HTML',
            n2:'CSS',
            n3:'HTML5'
        },
    }, 
    {
        content: {
            n1: 'JS',
            n2: 'jQuery',
            n3: 'PHP'
        },
    }, 
    {
        content: {
            n1: 'React',
            n2: 'Vue',
            n3: 'Angular'
        },
    }
];

export class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = 0;
    this.setState({ current });
  }
  mm(){
    const current=1;
    this.setState({current})
  }
  prev() {
    const current = 2;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div style={{margin:'60px'}}>
      <div style={{textAlign:'center',marginBottom:'30px'}}>
            <h1>想成为Web前端工程师,来Link朗科,你只能成为大牛！</h1>
            <h3>专业度高：精准定位核心知识和技术</h3>
      </div>
        <Steps current={current} >
          <Step title='第一阶段' onClick={this.next.bind(this)} />
          <Step title='第二阶段' onClick={this.mm.bind(this)} /> 
          <Step title='第三阶段' onClick={this.prev.bind(this)} />  
        </Steps>
        <Row className="steps-content" type='flex' justify='space-around'>
          <Col sm={8} xs={24}>
            <span className='c1'>{steps[current].content.n1}</span>
          </Col>
          <Col sm={8} xs={24}>
            <span className='c1'>{steps[current].content.n2}</span>
          </Col>
          <Col sm={8} xs={24}>
            <span className='c1'>{steps[current].content.n3}</span>
          </Col>
        </Row>
        {/* <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div> */}
      </div>
    );
  }
}