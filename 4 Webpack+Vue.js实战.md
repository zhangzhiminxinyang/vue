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

## 双向绑定

- 可通过表单修改某个变量的值
- 可通过程序运算修改某个变量的值，并影响页面的展示

# 6 发送http请求

## 为当前SPA项目添加http请求的支持

修改main.js文件，增加如下代码：

```
import VueReSource from 'vue-resource';
Vue.use(VueReSource);
```

> 若提示VueResource模块找不到，则需要先安装该模块，截图如下

![安装VueResource模块](./images/module_VueResource_install.png)



## 新增页面“博客列表页”，调用http请求

```
<template>
    <table>
      <tr v-for="blog in blogs">
        <td>{{ blog.title }}</td>
      </tr>
    </table>
</template>

<script>
    export default {
        name: "BlogList",
        data(){
          return {
            title:'博客列表页',
            blogs:[]
          }
        },
      mounted() { //表示页面完成后应该做哪些事情
      	 
          this.$http.get('api/interface/blogs/all').then((response)=>{
            console.info(response.body)
            this.blogs = response.body.blogs
          }, (response)=>{
            console.error(response)
          })
      }
    }
</script>

<style scoped>
  td{
    text-align:left;
  }
</style>

```



## 设置Vue.js开发服务器的代理

一般情况下，JavaScript在浏览器中是无法发送跨域请求的，因此

- 开发模式下，我们需要在 Vue.js的开发服务器上做转发配置
- 生产模式下，使用nginx特性解决js跨域问题

开发模式下，开发服务器代理的配置，修改config/index.js文件中的proxyTable内容，如下所示：

```
proxyTable: {
      '/api':{
        target:'http://siwei.me', //1. 对所有以 "api"开头的url做处理
        changeOrigin:true,  //3. 转发到siwei.me上
        pathRewrite:{ //2. 把url中的'api'去掉
          '^/api':''
        }
      }
    },
```

设置完成后，重启服务器，即可看到效果

![跨域设置](./images/vue_test_1.png)

## 发起post请求(无效果，需修改)

在main.js中，增加如下代码：

```
//增加post请求,做如下配置后，发出的post请求就不会被浏览器转为option请求了
Vue.http.options.emulateJSON = true;
```

请求代码变为：

```
this.$http.post('api/interface/blogs/all',{title:'',blog_body:''},{emulateJSON: true}).then((response)=>{
          console.info(response.body)
          this.blogs = response.body.blogs
        },(response)=>{
          console.error(response )
        })
```

# 7 不同页面间传递参数

### 传统Web开发页面传递参数的两种方式：

- url
- 表单

### Vue.js中参数传递的两种方式

- url
- Vue.js内部机制

## 博客详情页的显示

```
data (){
          return {
            //初始化blog用到的变量
            blog:{}
          }
        },
mounted() {
          this.$http.get('api/interface/blogs/show?id='+this.$route.query.id).then((response)=>{
            this.blog = response.body.result
          }, (response)=>{
            console.error(reponse)
          })
}
```



## 使用事件修改博客列表页的跳转方式

```
<td @click="show_blog(blog.id)">{{ blog.title }}</td>
```

```
 methods:{
        show_blog:function(blog_id){
          this.$router.push({name:'Blog',query:{id:blog_id}})
        }
}
```

>methods:{}中，存放vue页面中使用的事件
>
>this.$router.push表示让vue跳转，跳转到name:Blog对应的vue页面，name的名字对应于路由里设置的name的名字。
>
>this.$router是vue的内置对象，表示路由

## 使用v-link修改博客列表页的跳转方式

```
<tr v-for="blog in blogs">
	<td>
		<router-link :to="{name: 'Blog', query:{id: blog.id}}">
			{{ blog.title}}
		</router-link>
	</td>
</tr>
```

## 获取参数的两种方式

### query

若url形式为：blogs?id=3，则获取路由方式为：this.$router.query.id

### params

若url形式为：/#/blogs/3，即对应的路由是：

```
routes:[
{
	path:'/blog/:id'
}
]
```

则获取参数方式为：this.$router.params.id

# 8 双向绑定

双向绑定：若某个变量定义于<script>，需要展现在<template>中的话：

- 如果在代码层面进行修改，页面的值会发生变化
- 如果在页面进行修改（如表单控件），需要将变化体现在<template>中

```
<template>
    <div>
      <p>页面上的值：</p>
      <p>通过视图层，修改my_value：</p>
      <input v-model="my_value" style="width:400px;" />
      <hr/>
      <input type="button" @click="change_my_value_by_code()" value="通过控制代码修改my_value" />
      <hr/>
      <input type="button" @click="show_my_value()" value="显示代码中的my_value" />
    </div>
</template>

<script>
    export default {
        name: "TwoWayBinding",
        data (){
          return {
            my_value: '默认值'
          }
        },
      methods:{
          show_my_value:function () {
            alert('my_value:'+this.my_value);
          },
          change_my_value_by_code:function(){
            this.my_value += ", 在代码中做修改，666"
          }
      }
    }
</script>

<style scoped>

</style>

```

- 在代码<script>中访问变量的值使用this.my_value
- 在<template>中访问，使用 <input v-model=my_value/>

# 9 表单绑定

使用v-model进行绑定

```
<template>
    <div>
      input:<input type="text" v-model="input_value"/>，输入的值：{{ input_value }}
      <hr/>
      textarea: <textarea v-model="textarea_value"></textarea>，输入的值：{{ textarea_value}}
      <hr>
      radio:
      <input type="radio" v-model="radio_value" value="A"/>A
      <input type="radio" v-model="radio_value" value="B"/>B
      <input type="radio" v-model="radio_value" value="C"/>C
      输入值：{{ radio_value}}
      <hr/>
      checkbox：
      <input type="checkbox" v-model="checkbox_value" v-bind:true-value="true" v-bind:false-value="false" />
      输入的值：{{ checkbox_value}}
      <hr/>
      select:
      <select v-model="select_value">
        <option v-for="e in options" v-bind:value="e.value">
          {{ e.text}}
        </option>

      </select>
      输入的值：{{ select_value}}
    </div>
</template>

<script>
    export default {
        name: "FormBinding",
        data (){
          return {
            input_value:'',
            textarea_value:'',
            radio_value:'',
            checkbox_value:'',
            select_value:'C',
            options:[
              {text:'红烧肉', value:'A'},{text:'囊包肉',value:'B'},{text:'水煮鱼',value:'C'}
            ]
          }
        }
    }
</script>

<style scoped>

</style>
```

## Modifiers（后缀词）

1. .lazy，使用v-model时，不管光标是否离开文本框，只要用户按下键盘上的字符，文本框中的值就会随之变化，某些情况下（比如搜索，更希望用户完全输入完成后，文本框的值在统一发生变化），此时使用lazy可达成此种效果，用法如下：

```
<input type="text" v-model.lazy="search_value" /> 
```

2. .number，强制要求输入数字

```
<input type="number" v-model.number="need_number"/>
```

3. .trim，强制去掉输入值前后的空格

```
<input type="text" v-model.trim="trim_space">
```

# 10 表单提交

> 在单页应用中，js代码一般不会产生传统意义上的表单提交，多用事件提交数据（即桌面开发思维）

```
<template>
    <div>
      <textarea v-model="content"></textarea>
      <input type="button" @click="submit" value="留言" />
    </div>
</template>

<script>
    export default {
        name: "FormSubmit",
        data (){
          return {
            content: ''
          }
        },
      methods:{
          submit:function(){
            this.$http.post('/api/interface/blogs/add_comment',{
              content:this.content
            }).then((response)=>{
              alert("提交成功，您所提交的内容是："+this.content)
            },(reponse)=>{
              alert("出错了")
            })
          }
      }

    }
</script>

<style scoped>

</style>

```

