<template>
  <div>
    <div>
      <h5>Proxy</h5>
      <p>
        Proxy 顾名思义就是代理的意思，第一个参数是代理的对象，
        第二个参数是回调函数，对代理对象拦截的设置的回调。
        Proxy 支持的拦截操作有13种。
      </p>
      <ul>
        <li>get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。</li>
        <li>set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。</li>
        <li>has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。</li>
        <li>deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。</li>
        <li>
          ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。
          该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
        </li>
        <li>getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。</li>
        <li>defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey,
          propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。</li>
        <li>preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。</li>
        <li>getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。</li>
        <li>isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。</li>
        <li>setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。</li>
        <li>apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object,
          ...args)、proxy.apply(...)。</li>
        <li>construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。</li>
      </ul>
      <pre v-pre>
        {
            let obj={
                time:'2020-03-08',
                name:'Li Lei Feng',
                _num:33
            }
            let monitor=new Proxy(obj,{
                //拦截对象属性的读取
                get(target,key){// 将值在读取的时候设置
                    return target[key].replace('2020','2021')
                },
                //拦截对象设置属性
                set(target,key,val){//只设置 'name' 属性
                    if(key==='name'){
                        return target[key]=val
                    }else{
                        return target[key]
                    }
                },
                //拦截 key in Object 的操作
                has(target,key){//只显示 'name' 属性
                    if(key==='name'){
                        return target[key]
                    }else{
                        return false
                    }
                },
                //拦截 delete
                deleteProperty(target,key){//删除属性中带有 '_'
                    if(key.indexOf('_')>-1){
                        delete target[key]
                        return true
                    }else{
                        return target[key]
                    }
                },
                //拦截 Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
                ownKeys(target){//遍历对象除了 'time' 属性
                    return Object.keys(target).filert(item=>item!='time')
                }
            })
            console.log('get',monitor.time)     =>get 2021-03-08
            monitor.time='2022'
            monitor.name='lei lei'
            console.log('set',monitor.time,monitor.name) =>set 2021-03-08  lei lei

        }        
            </pre>
      <span>被代理后就，目标对象内部的this关键字会指向 Proxy 代理</span>
      <pre>
        const target = {
            m: function () {
                console.log(this === proxy);
            }
        };
        const handler = {};

        const proxy = new Proxy(target, handler);

        target.m() // false
        proxy.m()  // true        
            </pre>
    </div>
    <div>
      <h5>Reflect</h5>
      <p>
        Reflect 和 Proxy 方法基本一样，只是在调用的时候有点区别，
        Reflect 不是一个函数对象，因此它是不可构造的。
        Reflect 不需要 new 实例出来。
      </p>
      <pre v-pre>
        {
            let obj={
                time:'2020-03-08',
                name:'Li Lei Feng',
                _num:33
            }
            console.log('Reflect get',Reflect.get(obj,'time'))     =>get 2020-03-08
            Reflect.set(obj,'name','hello')
            console.log('has',Reflect.has(obj,'name'))      =>has true
        }        
            </pre>
    </div>
    <div>
      <h5>实际操作</h5>
      <p>
        在实际项目中，我们经常结合 Reflect 和 Proxy 一起封装低藕性的代码
        下面以在form表单提交数据封装为例：
      </p>
      <pre v-pre>
        {
            function validator(target,validator){
                return new Proxy(target,{
                    _validator:validator,
                    set(target,key,value,proxy){
                        if(target.hasOwnProperty(key)){
                            let va = this._validator[key]
                            if(!!va(value)){
                                return Reflect.set(target,key,value,proxy)
                            }else{
                                throw Error(`不能设置${key}到 ${value}`)
                            }
                        }else{
                                throw Error(`${key}不存在`)
                        }
                    }
                })
            }
            const personValidators={
                name(val){
                    return typeof val === 'string'
                },
                age(val){
                    return typeof val === 'number'&& val>18
                },
                mobile(val){
                    return typeof val === 'number'&& val.length=11
                }
            }
            class Person{
                constructor(name,age,mobile){
                    this.name=name
                    this.age=age
                    this.mobile=mobile
                    return validator(this,personValidators)
                }
            }

            const person = new Person('li lei',30);
            person.name='han yun mei';
            person.age='han yun mei';       =>报错
        }     
            </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "baseProxy",
  }

</script>
