import React, { Component } from 'react'

export default class RCComponents extends Component {

    //생성자 : state, 변수, 함수 값들을 초기화할 때 사용 
    //화면이 렌더링 되기 전 실행
    constructor(){
        //state 초기화
        super();
        this.state = { num: 0 }

        //실행할 함수 연결
        this.handleIncrement = this.handleIncrement.bind(this)

        console.log("1.consturtor - 컴포넌트생성");
    }

    handleIncrement(){
        this.setState({
            num : this.state.num+1
        })
    }

    //Mount되었을 떄(처음 그림이 그려졌을때)
    componentDidMount(){
        console.log('화면 첫 렌더링!')
    }

    //upate 되었을때
    componentDidUpdate(){
        console.log('화면 업데이트!')
    }


  render() {

    console.log('2.render - 화면이 렌더링 되는 중...')
    return <div>
            RCComponents:{this.state.num}<br/>
           <button onClick={this.handleIncrement}>증가</button>
          
      </div>
  
  }
}
