<template>
  <div>
    <div>
      <h4>自定义-tip</h4>
      <p>
          现在许多ui框架都自带了tip功能，但是我们也不能忘了原始简单的用法。
          在平常的静态单页面还是很有用的，主要应用了标签的自定义属性功能。
      </p>
    </div>
    <div>
        <div class='tip' data-target="我是一个小小的描述我是一个小小的描述我是一个小小的描述
            我是一个小小的描述">
            <span>描述</span>
        </div>
      <pre>
        &lt;div class='tip' data-target="我是一个小小的描述我是一个小小的描述我是一个小小的描述
            我是一个小小的描述"&gt;
            &lt;span&gt;描述&lt;/span&gt;
        &lt;/div&gt;
        .tip:hover::after{
            content: ' ';
            width:10px;
            height:10px;
            transform:rotate(45deg);
            position: absolute;
            border:1px solid;
            bottom: 30px;
            border-left:none;
            border-top:none;
            background-color:white;
        }
        .tip:hover::before{
            content: attr(data-target);/////标签属性内容
            position:absolute;
            border:1px solid;
            border-radius:5px;
            bottom:35px;
            width:200px;
            overflow:hidden;
            background-color:white;
            box-sizing:border-box;
            padding:10px;
        }
        .tip:hover{
            position:relative;
        }

            </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gridLayout",
  }

</script>
<style lang="scss" scoped>
  .tip:hover::after {
    content: ' ';
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    position: absolute;
    border: 1px solid;
    bottom: 30px;
    border-left: none;
    border-top: none;
    background-color: white;
  }

  .tip:hover::before {
    content: attr(data-target);
    position: absolute;
    border: 1px solid;
    border-radius: 5px;
    bottom: 35px;
    width: 200px;
    overflow: hidden;
    background-color: white;
    box-sizing: border-box;
    padding: 10px;
  }

  .tip:hover {
    position: relative;
  }

</style>
