<template>
    <div>
        <div>
            <h4>mysql</h4>
            <div>
                mysql 数据不可逆，删除后不可恢复，不会存在数据盘上
            </div>
            <div>
                PHPstudy数据操作方法：在MYSQL工具中是MySql命令行 进行操作
		（也可以在MySQL管理器 ==>MySQL-Front  可视化操作
            </div>
        </div>
        <div>
            <h5>mysql命令</h5>
            <div class="G_line">
                <div v-for="(item,index) in list" :key="index">
                    <span class="G_line_r">{{item.name}}</span>
                    <span class="G_line_l">{{item.explain}}</span>
                </div>
            </div>
        </div>
        <div>
            <h5>首屏加载loading</h5>
            <pre>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"command",
    data(){
        return{
            list:[
                {name:'show databases ;',explain:'(以分号结束,这是规范，否则不能读取)'},
                {name:'create database class;',explain:'创建数据库名  可以使用show database ;查看数据结果'},
                {name:'drop database;',explain:'删除数据库名，后接数据库名'},
                {name:'use;',explain:'使用数据库，后接数据库名'},
                {name:'create table user;',explain:'直接回车，还没有结束'},
                {name:'id int(11)  not null key auto_increment,',explain:' '},
                {name:'username	char(16) not null,',explain:'16位以下的字符串'},
                {name:'password	char(16) not null);',explain:'分号结束'},
                {name:'insert 表名 (字段1,字段2) values(值1,值2);',explain:'插入命令'},
                {name:`insert user (username,password) values('root','root');`,explain:' '},
                {name:`insert user (username,password) values('admin','admin'),('guest','guest');`,explain:'插入多个'},
                {name:'select * from 表名;',explain:'查询数据 直接查询所有'},
                {name:'select id,username from user;',explain:'只查询数据id,username'},
                {name:'select * from user where  id=2;',explain:'条件查询id为2的所有内容，关键字where'},
                {name:'select * from mark order by mark desc/asc;',explain:'按条件查询，关键字order by  从小到大asc/从大到小desc'},
            ]
        }
    }
}
</script>

