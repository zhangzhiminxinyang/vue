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
