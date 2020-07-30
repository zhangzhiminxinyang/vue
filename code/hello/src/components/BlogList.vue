<template>
    <table>
      <!--tr >
        <td @click="show_blog(blog.id)">{{ blog.title }}</td>
      </tr-->
      <tr v-for="blog in blogs">
        <td>
          <router-link :to="{name: 'Blog', query:{id: blog.id}}">
            {{ blog.title}}
          </router-link>
        </td>
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
          //this.表示当前的vue组件（即BookList）,$http表示所有以$开头的变量都是vue的特殊变量，即发起http请求的对象
        this.$http.get('api/interface/blogs/all').then((response)=>{
            console.info(response.body)
            this.blogs = response.body.blogs
          }, (response)=>{
            console.error(response)
          })

        /* post 无效果
        this.$http.post('api/interface/blogs/all',{title:'',blog_body:''},{emulateJSON: true}).then((response)=>{
          console.info(response.body)
          this.blogs = response.body.blogs
        },(response)=>{
          console.error(response )
        })
        */
      },
      methods:{
        show_blog:function(blog_id){
          this.$router.push({name:'Blog',query:{id:blog_id}})
        }
      }
    }
</script>

<style scoped>
  td{
    text-align:left;
  }
</style>
