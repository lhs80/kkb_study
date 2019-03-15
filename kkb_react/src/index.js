import React from './kkbreact';
import ReactDOM from './kkbreact-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// class KKB extends React.Component {
//   render() {
//     return (
//       <div>REACT好神奇</div>
//     )
//   }
// }

function KKB(props) {
  return <h2>这是一个函数组件 {props.name}</h2>
}

class KKB1 extends React.Component {
  render() {
    return <h2>这是一个class组件 {this.props.name}</h2>
  }
}

ReactDOM.render(
  <div id="kkb-div" className="demo" key="xxx">
    改革春风吹满地
    <KKB name="春天"/>
    <KKB1 name="夏天"/>
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
