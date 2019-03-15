function Stack() {
  var items = []; //存储数据

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

//判断字符串里的括号是否合法
function is_leagl_brackers(string) {
  let stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    let item = string[i];
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.isEmpty();
}

console.log(is_leagl_brackers("sdf(ds(ew(we)rw)rwqq)ewewe"));
console.log(is_leagl_brackers("()()sd()(sd()fw))("));

//计算后缀表达式
function calc_exp(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let item = exp[i];
    if (["+", "-", "*", "/"].indexOf(item) >= 0) {
      let value_1 = stack.pop();
      let value_2 = stack.pop();
      let exp_str = value_2 + item + value_1;
      let res = parseInt(eval(exp_str));
      stack.push(res.toString());
    } else {
      stack.push(item)
    }
  }
  return stack.pop();
}

console.log(calc_exp(["4", "13", "5", "/", "+"]));