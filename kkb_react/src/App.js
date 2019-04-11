import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor (props) {
    super(props)
    //常用于初始化状态
    console.log('1、构造函数')
    this.state = {
      name: 'hello'
    }
  }

  componentWillMount () {
    //此时可以访问状态和属性
    console.log('2、组件将要挂载')
  }

  componentDidMount () {
    this.setState({
      name: 'Hi'
    })
    //组件已经挂载，可进行状态更新操作，API调用等
    console.log('3、组件已经挂载')
  }

  componentWillReciveProps () {
    //父组件传递的属性有变化，做相应响应
    console.log('4、将要接收属性传递')
  }

  shouldComponentUpdate () {
    //组件是否需要更新，需要返回布尔值结果，优化点；
    console.log('5、组件是否需要更新')
    return true
  }

  componentWillUpdate () {
    //组件将要更新，可做更新统计
    console.log('6、组件将要更新')
  }

  componentDidUpdate () {
    console.log('7、组件已更新')
  }

  componentWillUnmount () {
    console.log('8、组件将要卸载')
  }

  render () {
    console.log('组件渲染')
    return (
      <div className="App">
        <header className="App-header">
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
            {this.state.name}
          </a>
        </header>
      </div>
    )
  }
}

export default App
