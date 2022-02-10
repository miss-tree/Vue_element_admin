<template>
    <div>
        <div>
            <h5>装饰器</h5>
            <p>
                Decorator 是一个函数，可以修改扩展 class,但是只能修改修饰 class有效。
                不能作用于其他函数。使用时加 @Decorator 即可。 
            </p>
            <pre v-pre>
    <!-- 若 readony 装饰class最外层并且是通过 extends 方式，则无法获取name,descriptor参数，
    name,descriptor分别代表class的方法名称和方法的属性-->
    {
        let  readony=function(target,name,descriptor){
            descriptor.writable=false;
            return descriptor
        }
        class player{
            @readony
            say(){
                return 'hello world'
            }
        }
        let person=new player()

        person.say=()=>{
            console.log('happy new year')
        }
        => 直接报错，因为修饰器已经定义不能修改方法了
    }            
            </pre>
            <span>扩展 class</span>
            <pre v-pre>
    {
        let typename=function(target,name,descriptor){
            target.myname='hello'
        }
        @typename
        class Person{
            ...
        }
        console.log(Person.myname)      =>'hello'
    }            
            </pre>
        </div>
        <div>
            <h5>场景实例</h5>
            <pre v-pre>
    {
        let log=(type)=>{
            return function(target,name,descriptor){
                let src_melethod=descriptor.value;
                descriptor.value=(...arg){
                    src_melethod.apply(target,arg)
                    console.log(`log${type}`)
                }
            }
        }

        class AD{
            @log('show')
            show(){
                console.log('ad is show')
            }
            @log('click')
            click(){
                console.log('ad is click')
            }
        }
        let ad=new AD()
        ad.show()       => ad is show       log show
        ad.click()      => ad is click       log click

        会按照装饰器的修改先执行事件方法，再执行扩展的内容
    }            
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"decorator",
}
</script>

