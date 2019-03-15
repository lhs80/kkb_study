function Stack() {
  let items = []; //存储数据

  //从栈顶添加元素，也称压栈
  this.push = function (item) {
    items.push(item);
  };

  //弹出栈顶元素
  this.pop = function () {
    return items.pop();
  };

  //返回栈顶元素
  this.top = function () {
    return items[items.length - 1];
  };

  //判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0;
  };

  //返回栈的大小
  this.size = function () {
    return items.length;
  };

  //清空栈
  this.clear = function () {
    items = [];
  }
}

let BinTreeNode = function (data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
  this.parentNode = null;
};

//A(B(C,D),E(F,G))
function BinaryTree() {
  let root = null;

  this.init_tree = function (string) {
    let stack = new Stack();
    let k = 0;
    let new_node = null;
    for (let i = 0; i < string.length; i++) {
      let item = string[i];
      if (item == "#") {
        break;
      }
      if (item == "(") {
        stack.push(new_node);
        k = 1;
      } else if (item == ")") {
        stack.pop();
      } else if (item == ",") {
        k = 2;
      } else {
        new_node = new BinTreeNode(item);
        if (root == null) {
          root = new_node;
        } else if (k == 1) {
          //如果K=1说明new_node是左子树
          let top_item = stack.top();
          top_item.leftChild = new_node;
          new_node.parentNode = top_item;
        } else {
          //  右子树
          let top_item = stack.top();
          top_item.rightChild = new_node;
          new_node.parentNode = top_item;
        }
      }
    }
  };

  this.get_root = function () {
    return root;
  };

  //中序遍历
  this.in_order = function (node) {
    if (node == null) {
      return false;
    }

    this.in_order(node.leftChild);
    console.log(node.data);
    this.in_order(node.rightChild);
  }

  //前序遍历
  this.pre_order = function (node) {
    if (node == null) {
      return false;
    }

    console.log(node.data);
    this.pre_order(node.leftChild);
    this.pre_order(node.rightChild)
  };

  //后序遍历
  this.post_order = function (node) {
    if (node == null) {
      return false;
    }

    this.post_order(node.leftChild);
    this.post_order(node.rightChild);
    console.log(node.data)
  };

  let tree_node_count = function (node) {
    debugger;
    if (node == null) {
      return 0;
    }
    let left_node_count = tree_node_count(node.leftChild);
    let right_node_count = tree_node_count(node.rightChild);

    return left_node_count + right_node_count + 1;
  };

  //返回节点数量
  this.size = function () {
    return tree_node_count(root)
  };

  let tree_height = function (node) {
    if (node == null) return 0;

    let left_child_height = tree_height(node.leftChild);
    let right_child_height = tree_height(node.rightChild);

    return left_child_height > right_child_height ? left_child_height + 1 : right_child_height + 1;
  };

  this.height = function () {
    return tree_height(root)
  };

  let find_node = function (node, data) {
    if (node == null) return null;
    if (node.data == data) {
      return node;
    }

    //先到左子树里去找
    let left_res = find_node(node.leftChild, data);
    if (left_res) {
      return left_res;
    }

    return find_node(node.rightChild, data);
  };

  this.find = function (data) {
    return find_node(root, data)
  };
}

let bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,H)),C(,F))#");
let root_node = bt.get_root();
// bt.post_order(root_node);
// bt.in_order(root_node);

console.log(bt.size());
console.log(bt.height());
console.log(bt.find("Q"));


let mirror_1 = function (node) {
  if (node == null) {
    return false;
  }

  let temp = node.leftChild;
  node.leftChild = node.rightChild;
  node.rightChild = temp;

  mirror_1(node.leftChild);
  mirror_1(node.rightChild);
};

let mirror_2 = function (node) {
  if (node == null) {
    return false;
  }

  let left = mirror_2(node.leftChild);
  let right = mirror_2(node.rightChild);

  node.leftChild = right;
  node.rightChild = left;

  return node;
};

function pre_node(node) {
  let stack = new Stack();
  let curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    if (curr_node.rightChild) {
      stack.push(node.rightChild);
    }
    if (curr_node.leftChild) {
      curr_node = curr_node.leftChild;
    } else {
      //  没有左子树
      curr_node = stack.pop();
    }
  }
}