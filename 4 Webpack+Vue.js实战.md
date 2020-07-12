# 1 创建一个页面

在Vue.js中创建一个页面需要两步：

## 新建路由

在src/router/index.js的routes数组中加入新的路由

```
{
	path:'/say_hi',
	name:'SayHi',
	component:SayHi
}
```

==path决定该页面的路由，如（  http://localhost:8080/#/say_hi/ ）==，

==component决定该组件的名称，对应components里的一个vue文件==

## 新建vue页面

在src/components/中新建页面，文件内容分三部分：

- <template></template>中存放html代码

- <script></script>中存放js代码

- <style></style>中存放CSS、SCSS、SASS等代码

## 定义并显示变量

在 data中定义变量，在html部分用 {{ 变量名}}显示变量值

```
data(){
	return{
		message:'hello'
	}
}
```

```
<template>
	<h1>{{message}}</h1>
</template>
```

# 2 Vue.js中的ECMASCRIPT

##  let、var、常量和全局变量

- var：有可能引起变量提升，或者块级作用域问题

- let：可以解决上市两个问题

- ==最佳实践：尽量用let==

- 全局变量在index.html中定义，如:

  ```
  window.title='hello'
  ```

## 导入代码：import

- 若待导入包已经在package.json中定义，则导入时直接添加包名即可

  ```
  import Vue from 'vue'
  import Router from 'vue-router'
  ```

- 若待导入包未在package.json中定义，导入时需要加路径，@符号表示在本地文件系统中引入文件。@代表源代码目录，一般是src

  ```
  import SayHi from '@/components/SayHi'
  ```

## 方便其他代码使用自己：export default{...}

在每个vue文件的<script>中，都使用export default{...}代码

## ES的简写

```
export default{
	data(){
		return {}
	}
}
```

等同于

```
export default{
	data:function(){
		return {}
	}
}
```

## 箭头函数=>

```
.then(response => ...)
```

等同于

```
.then(function(response)){...}
```

> 使用箭头函数强制定义了作用域，可以避免由很多由作用域产生的问题

# 3 Vue.js渲染页面的过程和原理

> 只有知道一个页面是如何被渲染出来的，才能更好的理解框架和调试代码

## js 入口文件

js入口文件配置位置：/build/webpack.base.conf.js，其中关于入口文件的关键代码是

```
module.exports = {
	entry:{
		app: './src/main.js'
	}
}
```

即默认的js入口文件是main.js

## 首页对应的静态HTML页面

默认打开的首页为 应用首层目录的index.html，该页面中的代码

```
<div id="app"></div>
```

即为将来动态变化的内容

## App.vue的调用及渲染

- 在main.js中，调用App.vue
- 在App.vue中的<template>为第二层魔板。所有<router-view>中的内容都会被自动替换

## 渲染原理与实例

- Vue.js是典型的Ajax工作方式，即只渲染部分页面
- 浏览器的页面从不会被整体刷新，所有页面的变化都限定在 index.html中的<div id="app"></div>代码中
- 所有的动作都靠url来触发，如：
  - /#/books_list对应某个列表页
  - /*book/3对应某个详情页
  - 这个技术是靠Vue.js的核心组件vue-router来实现的

# 4 视图中的渲染

## 渲染变量

变量在 export default的data中定义，在html部分通过变量名获取变量的值，如下述代码中的message变量

```
<template>
    <div>
      Hi Vue!{{message}}
    </div>
</template>

<script>
    export default {
        data(){
          return {
            message:'在data中定义变量,在html部分显示变量的值'
          }
        },
        name: "SayHi"
    }
</script>
```

## 方法的声明和调用

方法的声明，在export default中的method中添加方法

```
 methods:{
          // 方法声明
          show_my_value:function(){
            alert('my_value:',+this.my_value);
          }
        },
```

方法调用，在<template>中调用

```
<input type="button" @click="show_my_value()" value="方法调用">
```

## 事件处理：v-on

@click 等同于 v-on:click

# 5 视图中的指令（Directive）

- java 中有jsp页面
- .net中有asp、aspx页面
- Ruby中有erb页面
- Vue.js中，与标签结合使用叫做Directive（指令）

## 循环指令 v-for

```
<template>
    <div>
      <h1>跟Vue.js相关的技术有：</h1>
      <ul>
        <li v-for="tech in technologies">
          {{ tech }}
        </li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "DirectiveFor",
        data(){
          return {
            technologies:['nvm','npm','node','webpack','ecma_script']
          }
        }
    }
</script>

<style scoped>

</style>
```

## 判断指令 v-if

判断指令一般由 v-if、v-else-if、v-else结合使用，示例代码如下：

```
<template>
  <div id="app">
    <h1>我们使用的技术是</h1>
    <div v-if="name === 'Vue.js'">
      Vue.js
    </div>
    <div v-else-if="name === 'angular'">
      Angular
    </div>
    <div v-else="name === 'React'">
      React
    </div>
  </div>
</template>

<script>
    export default {
        name: "Vue.js"
    }
</script>

<style scoped>

</style>
```

## v-for 与v-if的优先级

v-for与v-if一起使用时，v-for的优先级更高，即先循环再判断

```
<template>
  <div id="app">
    打印出以 'n'开头的与Vue.js相关的技术
    <ul>
      <li v-for="tech in technologies" v-if="tech.indexOf('n') === 0">
        {{ tech }}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "DirectiveForIf",
        data(){
          return {
            technologies:['nvm','npm','node','webpack','ecma_script']
          }
        }
    }
</script>
<style scoped>

</style>
```

##  v-bind

v-bind指令用于把某个属性绑定到某个元素上

```
<template>
    <div id="app">
      <p v-bind:style="'color:'+my_color">V-bind的使用</p>
    </div>
</template>

<script>
    export default {
        name: "DirectiveBind",
        data (){
          return{
            my_color:'green'
          }
        }
    }
</script>

<style scoped>

</style>
```

## v-on

v-on用于触发事件，HTML中的标准事件均可

## v-model 与双向绑定

