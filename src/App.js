import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  var [functionShow, setFunctionShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="App container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>React class Vs function</h1>
      {/* <FunctionComponent initNum="1" />
      <ClassComponent initNum="2" /> */}
      <input type="button" value="remove function" onClick={()=>{
        setFunctionShow(false);
        }}></input>
      <input type="button" value="remove component" onClick={()=>{
        setClassShow(false);
        }}></input>
      {functionShow? <FunctionComponent initNum="1" />: null} 
      {classShow? <ClassComponent initNum="2" />: null} 
      
    </div>
  );
}
var functionStyle = 'color:red';
var functionId = 0;
// function 은 함수 자체가 render
function FunctionComponent(props) {

  // React.useState
  var numState = useState();
  // 초기값은 인자로 주면 0번재 배열이 그것으로 초기화됨
  //  0번째 값은 상태값
  var numState2 = useState(props.initNum);

  // 1번째 배열이 함수
  //  1번째 배열은 그 상태를 바 꿀 수 있는 함수
  var setNum = numState2[1];

  console.log(numState);
  console.log(numState2);

  var num = numState[0];
  var num2 = numState2[0];

  // var dateSteate = useState((new Date()).toString());
  // var date = dateSteate[0];
  // var setDate = dateSteate[1];
  //  위 코드를 축약해서 한줄로 만들면 아래가 됨
  var [date, setDate] = useState((new Date()).toString());
  // 마찬가지로 아래로도 사용가능 하겠지
  // var [num, numState] = useState((props.initNum));


  useEffect(()=>{
    console.log('%cfunction => useEffect (componentDidMount) ' + (++functionId), functionStyle)
    document.title = num2 ;
    return () => {
      console.log('%c function => useEffect num return (componentWillUnMount) ' + (++functionId), functionStyle);
    }
  }, []); // 1회는 실행하고 그 이후는 실행하지 않음

  // sideEffect
  useEffect(()=>{
    console.log('%cfunction => useEffect(componentDidMount & componentDidUpdate) ' + (++functionId), functionStyle)
    document.title = num2 ;
    return () => {
      console.log('%c function => useEffect num return (componentDidMount & componentDidUpdate) ' + (++functionId), functionStyle);
    }
  }, [num2]);
  useEffect(()=>{
    console.log('%cfunction => useEffect(componentDidMount & componentDidUpdate) ' + (++functionId), functionStyle)
    document.title = date;
    return () => {
      // 이전에 실행한 것을 취소 하는 작업 clean up
      console.log('%c function => useEffect date return (componentDidMount & componentDidUpdate) ' + (++functionId), functionStyle);
    }
  }, [date]);
  // 복수 설치 가능
  // useEffect(()=>{
  //   console.log('%cfunction => useEffect(componentDidMount & componentDidUpdate) B' + (++functionId), functionStyle)
  //   document.title = num2 + ' : ' + date;
  // });

  console.log('%cfunction => render ' + (++functionId), functionStyle);
  return (
    <div className="container">
      <h2>Function Component</h2>
      <p>Number(props.initNum): {props.initNum}</p>

      <p>Number(num): {num}</p>

      <p>Number(num2): {num2}</p>
      <input type="button" value="randum" onClick={
        function(){
          setNum(Math.random);
        }
      }></input>

      <p>date: {date}</p>
      <input type="button" value="date" onClick={
       function(){
        setDate((new Date()).toString());
      }
      }></input>

    </div>
  );
}

var classStyle = 'color:yellow';
// class 는 render() 함수를 선언해서 리턴을 해주도록 해야함
class ClassComponent extends React.Component {
  state = {
    number1:this.props.initNum,
    number2:this.props.initNum,
    date: (new Date()).toString(),
  }
  // 라이프 사이클들 ㅎㅎ
  componentWillMount(){
    console.log('%c[실행 순서1]class => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%c[실행 순서3]class => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate() {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate() {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', classStyle);
  }
  render() {
    console.log('%c[실행 순서2]class => render', classStyle);
    return (
      <div className="container">
      <h2>Class Component</h2>
      <p>Number(this.props.initNum): {this.props.initNum}</p>

      {/* 아래 처럼 state 값을 변경하는 것이 예전 방식에서는 class는 불가능 했음 
      그런데 hook의 등장으로 가능해진것 */}
      <p>Number(this.state.number1): {this.state.number1}</p>
      <input type="button" value="randum" onClick={
        function(){
          this.setState({number1: Math.random()});
        }.bind(this)
      }></input>
      {/* bind 없이 사용하고 싶으면 아래 방식 */}
      <p>Number(this.state.number2): {this.state.number2}</p>
      <input type="button" value="randum" onClick={
       ()=>{
          this.setState({number2: Math.random()});
        }
      }></input>

      <p>date: {this.state.date}</p>
      <input type="button" value="date" onClick={
        function(){
          this.setState({date: (new Date()).toString(),});
        }.bind(this)
      }></input>

    </div>
    )
  }
}
export default App;
