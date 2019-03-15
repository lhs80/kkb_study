import {initVnode} from "./kkbvdom";

function render(vdom, container) {
  // console.log("虚拟DOM节点", vdom);
  let rootNode = initVnode(vdom);
  container.appendChild(rootNode);
  // console.log(container);
}

export default {render}