class KVue {
  constructor (options) {
    this.$options = options

    //数据响应化
    this.$data = options.data
    this.observe(this.$data)

    //模拟一下watchw创建
    // new Watcher()
    // this.$data.test
    // new Watcher()
    // this.$data.foo.bar
    new Compile(options.el, this)

    // created执行,给created指定this作用域
    if (options.created) {
      options.created.call(this)
    }
  }

  //数据观察者
  observe (value) {
    if (!value || typeof value !== 'object') {
      return
    }

    //遍历该对象
    Object.keys(value).forEach(key => {
      //defineReactive定义响应化
      this.defineReactive(value, key, value[key])
      //代理data中的属性到vue实例上
      this.proxyData(key)
    })
  }

  defineReactive (obj, key, val) {
    //递归调用，解决嵌套数据
    this.observe(val)

    //新建一个依赖收集器Dep
    let dep = new Dep()

    Object.defineProperty(obj, key, {
      get () {
        Dep.target && dep.addDep(Dep.target)
        console.log('Dep.target', Dep.target)
        return val
      },
      set (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        dep.notify()
      }
    })
  }

  proxyData (key) {
    Object.defineProperty(this, key, {
        get () {
          return this.$data[key]
        },
        set (newVal) {
          this.$data[key] = newVal
        }
      }
    )
  }
}

//Dep:用来管理Watcher
//data中有几个属性，Dep中就有几个watcher
//视图中有几个数据绑定，就有几个watcher
class Dep {
  constructor () {
    //这里存放若干依赖(watcher)
    this.deps = []
  }

  addDep (dep) {
    this.deps.push(dep)
  }

  //通知所有watcher
  notify () {
    this.deps.forEach(dep => dep.update())
  }
}

// Watcher观察者，负责更新视图
class Watcher {
  constructor (vm, key, cb) {
    console.log('vm', vm)
    this.vm = vm
    this.key = key
    this.cb = cb
    //将当前watcher实例指定到dep静态属性target
    Dep.target = this
    this.vm[this.key] //触发getter,添加依赖
    Dep.target = null
  }

  update () {
    this.cb.call(this.vm, this.vm[this.key])
  }
}
