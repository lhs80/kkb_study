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
    var stack = new Stack();
    var k = 0;
    var new_node = null;
    for (var i = 0; i < string.length; i++) {
      var item = string[i];
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
          var top_item = stack.top();
          top_item.leftChild = new_node;
          new_node.parentNode = top_item;
        } else {
          //  右子树
          var top_item = stack.top();
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
}


var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();
bt.in_order(root_node);