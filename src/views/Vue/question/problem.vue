<template>
  <div>
    <TitleList :rowRist='titleList' />
    <div>
      <p>
        前端还是需要对vue内部原理有一些了解
      </p>
    </div>
    <div>
      <h4 id="isAccountNumber">Vue组件⾥的data为什么是⼀个函数</h4>
      <ul>
        <li>⼀个组件被复⽤多次的话，也就会创建多个实例。本质上， 这些实例⽤的都是同⼀个构造函数</li>
        <li>如果data是对象的话，对象属于引⽤类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是⼀个函数</li>
        <li>用 return 返回是为了避免变量造成全局污染，只影响调用的组件</li>
      </ul>
    </div>
    <div>
      <h4 id="status">关于Vue的⽣命周期</h4>
      <ul>
        <li>Vue 实例创建销毁和更新的过程，就是⽣命周期</li>
        <li>created表示完成组件数据、属性等的初始化，此时组件DOM结构还没有创建出来</li>
        <li>组件DOM结构的创建在 mounted 中已经完成了。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'problem',
    components: {
      TitleList: () => import('@/components/TitleList/index')
    },
    data() {
      return {
        titleList: [{
            name: "Vue组件⾥的data为什么是⼀个函数",
            id: "isAccountNumber",
            explain: '页面刷新或后退'
          },
          {
            name: "关于Vue的⽣命周期",
            id: "status",
            explain: '监听页面历史前进后退'
          },
        ]
      }
    },
    mounted() {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', function () {
        console.log('da ');
        history.pushState(null, null, document.URL);
      })
    }
  }

</script>
