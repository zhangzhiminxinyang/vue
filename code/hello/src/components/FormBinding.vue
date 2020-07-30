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
      <hr/>

      <input type="text" v-model.lazy="search_value" /> 输入的值：{{ search_value}}
      <hr />
      <input type="number" v-model.number="need_number"/>
      <hr/>
      <input type="text" v-model.trim="trim_space">
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
            search_value:'',
            options:[
              {text:'红烧肉', value:'A'},{text:'囊包肉',value:'B'},{text:'水煮鱼',value:'C'}
            ]
          }
        }
    }
</script>

<style scoped>

</style>
