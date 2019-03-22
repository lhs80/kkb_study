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

    // created执行
    if (options.created) {
      options.created.call(this)
    }
  }

  observe (value) {
    if (!value || typeof value !== 'object') {
      return
    }

    //遍历该对象
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])
      //代理data中的属性到vue实例上
      this.proxyData(key)
    })
  }

  defineReactive (obj, key, val) {
    //递归调用，解决嵌套数据
    this.observe(val)

    let dep = new Dep()

    Object.defineProperty(obj, key, {
      get () {
        Dep.target && dep.addDep(Dep.target)
        return val
      },
      set (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        dep.notify()
        // console.log(`${key}属性更新了：${val}`)
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
class Dep {
  constructor () {
    //这里存放若干依赖(watcher)
    this.deps = []
  }

  addDep (dep) {
    this.deps.push(dep)
  }

  //通过所有watcher
  notify () {
    this.deps.forEach(dep => dep.update())
  }
}

// Watcher
class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    //将当前watcher实例指定到dep静态属性target
    Dep.target = this
    this.vm[this.key] //触发getter,添加依速
    Dep.target = null
  }

  update () {
    // console.log('update')
    this.cb.call(this.vm, this.vm[this.key])
  }
}
