<template>
  <div>
    <div>
      <h4>GIT</h4>
      <p>
        git是时一个代码版本控制仓库，
        国内的<a href="https://gitee.com/"
           target="_blank">码云</a>也是一样的，用起来也是很方便的。
        但是好像没有可视化工具，没有不能在电脑上直观的看到代码的变化。个人还是比较喜欢git，毕竟是一个大的
        开源库，很多开源代码都可以找到。这章主要讲的是git和git命令使用
      </p>
    </div>
    <div>
      <h5>创建项目</h5>
      <p>
        码云的就不讲了，刚入门前端就用的是码云，汉化版的git页面跟着字面去创建就好了。
        下面主要以图文讲解git项目创建。
      </p>
      <div class="G_img">
        <img src="@/assets/git01.jpg"
             alt="">
        <img src="@/assets/git02.jpg"
             alt="">
        <p>
          自定义撇除文件：鼠标右键，选择 git bash here =>
          在命令行输入 touch .gitignore =>
          在.gitignore 里面写上 node_modules文件夹的名字即可,
          不需要上传的文件直接写文件名 webpack.js 直接回车写下一个文件。
          不需要上传的文件类型 .js 直接回车写下一个。
        </p>
        <img src="@/assets/git03.jpg"
             alt="">
        <div>分享一张网上的项目详图</div>
        <img src="@/assets/git04.jpg"
             alt="">
      </div>
    </div>
    <div>
      <h5>git命令</h5>
      <div>
        <a href="https://github.com/xjh22222228/git-manual"
           target="_blank">更多指令参考</a>
      </div>
      <div class="G_line">
        <div v-for="(item,index) in list"
             :key="index">
          <span class="G_line_r">{{item.name}}</span>
          <span class="G_line_l">{{item.explain}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gitCommand",
  data () {
    return {
      list: [{
        name: 'git clone 你的项目地址',
        explain: 'git克隆命令'
      },
      {
        name: 'git add ./index.html',
        explain: '上传单个文件！！'
      },
      {
        name: 'git commit -m "叙述版本"',
        explain: '对本次版本叙述'
      },
      {
        name: 'git pull',
        explain: '对比git文件'
      },
      {
        name: 'git push',
        explain: '上传文件'
      },
      {
        name: 'git add ./',
        explain: '上传文件夹所有文件！！！！，后面操作和单个文件上传相同，多数情况下可以直接上传所有，让git自己比较'
      },
      {
        name: 'git remote -v',
        explain: '建立项目分支'
      },
      {
        name: 'git branch test;',
        explain: '建立test分支'
      },
      {
        name: `git branch -a`,
        explain: '查看所有分支'
      },
      {
        name: 'git branch -d test',
        explain: '删除test分支'
      },
      {
        name: `git branch dev`,
        explain: '创建dev分支'
      },
      {
        name: 'git checkout dev',
        explain: '切换到dev分支'
      },
      {
        name: 'git checkout -b dev',
        explain: '创建并切换dev分支'
      },
      {
        name: 'git checkout master',
        explain: '先从的dev分支切换到master分支'
      },
      {
        name: 'git reset tag/commit',
        explain: 'git代码回滚到某个标记或某次提交'
      },
      {
        name: 'git reset tag/commit fileNames',
        explain: '当前目录下git文件代码回滚到某个标记或某次提交'
      },
      {
        name: 'git remote add gitee https://gitee.com/xxx/xxx',
        explain: '在本地项目创建远程仓库或本地项目再添加一个仓库 gitee 为仓库别名'
      },
      {
        name: 'git push gitee master',
        explain: '提交到 gitee 仓库 master 分支'
      },
      {
        name: 'git merge --no-ff -m "merge with no-ff" dev',
        explain: '将分支合并到master'
      },
      {
        name: 'select * from user where  id=2;',
        explain: '条件查询id为2的所有内容，关键字where'
      },
      {
        name: 'select * from user where  id=2;',
        explain: '条件查询id为2的所有内容，关键字where'
      },
      {
        name: 'select * from user where  id=2;',
        explain: '条件查询id为2的所有内容，关键字where'
      },
      ]
    }
  }
}

</script>
