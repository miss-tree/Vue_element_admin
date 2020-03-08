<template>
    <div>
        <div>
            <h5>computed 计算属性</h5>
            <p>
                computed计算属性，是一个有返回值的函数，可直接被当作绑定数据来使用。
                因此类似于data属性，代码中可通过this.计算属性名来引用，模板中也可通过
                <code v-pre>{{ 计算属性名 }}</code>来绑定数据。
                需要注意的是，只要是组件中有任何数据发生了改变，那么所有计算属性就都会被重新计算。
            </p>
            <pre>
        data = {
            a: 1
        }

        // 计算属性aPlus，在脚本中可通过this.aPlus来引用，在模板中可通过{{ aPlus }}来插值
        computed = {
            aPlus () {
                return this.a + 1
            }
        }        
            </pre>
        </div>
        <div>
            <h5>watcher 监听器</h5>
            <p>
                通过监听器watcher能够监听到任何属性的更新。监听器在watch对象中声明，类型为函数，
                函数名与需要被监听的data对象中的属性同名，每当被监听的属性改变一次，
                监听器函数就会被自动调用执行一次。监听器适用于当属性改变时需要进行某些额外处理的情形。
            </p>
            <pre>
        data = {
            num: 1
        }
        // 监听器函数名必须跟需要被监听的data对象中的属性num同名，
        // 其参数中的newValue为属性改变后的新值，oldValue为改变前的旧值
        watch = {
            num (newValue, oldValue) {
                console.log(`num value: ${oldValue} -> ${newValue}`)
            }
        }

        // 每当被监听的属性num改变一次，对应的同名监听器函数num()就被自动调用执行一次
        onLoad () {
            setInterval(() => {
                this.num++;
                this.$apply();
            }, 1000)
        }        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"wepycomputed",
}
</script>

