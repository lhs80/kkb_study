import {createVnode} from "./kkbvdom"

//所谓的jsx就是这个函数
function createElement(type, props, ...children) {

  delete props.__source;

  //区分不同的组件类型
  let vtype;
  if (typeof type === "string") {
    //是字符串 就是普通的DIV元素
    vtype = 1;
  } else if (typeof type === "function") {
    //因为在react中函数也是组件，
    //所以要根据isReactComponent来判断是函数组件是类组件
    if (type.isReactComponent)
      vtype = 3;//class组件
    else {
      vtype = 2;//函数组件
    }
  }
  props.children = children;
  return createVnode(vtype, type, props)
}

class Component {
  //区别class组件和function组件的参数
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  static isReactComponent = true;

  setState() {
  }
}

// class Updatar {
//   constructor() {
//   }
// }

export default {createElement, Component};