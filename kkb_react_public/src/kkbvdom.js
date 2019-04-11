export function createVnode(vtype, type, props) {
//  创建虚拟DOM
  return {vtype, type, props}
}

export function initVnode(vnode) {

  const {vtype, type, props} = vnode;

  if (!vtype) {
    return document.createTextNode(vnode)
  }
  if (vtype === 1) {
    //普通的div
    return initVelement(vnode);
  } else if (vtype === 2) {
    //  函数组件
    return initFuncComp(vnode);
  } else if (vtype === 3) {
    // class组件
    return initClassComp(vnode)
  }
  //初始化vnode
  //vnode==> dom
}

function initClassComp(vnode) {
  const {type, props} = vnode;
  let component = new type(props);
  const newNode = component.render();
  return initVnode(newNode);
}

function initVelement(vnode) {
  const {vtype, type, props} = vnode;
  const node = document.createElement(type);
  const {key, style, children, ...reset} = props;
  Object.keys(reset).forEach(k => {
    node.setAttribute(k, reset[k])
  });

  //初始化子元素
  initVchildren(node, children);
  return node
}

function initVchildren(node, children) {
  children.forEach(c => {
    node.appendChild(initVnode(c));
  })
}

function initFuncComp(vnode) {
//  函数组件
  const {type, props} = vnode;
  let newNode = type(props);
  return initVnode(newNode)
}