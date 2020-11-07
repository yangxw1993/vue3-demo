<template>
  <a-form :form="form" :labelCol="{span: 6}" :wrapper-col="{span:18}" >
    <a-form-item label="选择计划日期">
      <a-date-picker
          v-model:value="form.date"
          show-time
          type="date"
          placeholder="选择计划日期"
          style="width: 100%;"
      />
    </a-form-item>
    <a-form-item label="请输入耗时">
      <a-input-number id="inputNumber" v-model:value="form.time" :min="1" :max="10" />
    </a-form-item>
    <a-form-item label="请输入代办事项">
      <a-textarea v-model:value="form.content" placeholder="请输入代办事项"></a-textarea>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onsubmit">添加</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
  import {reactive, toRefs} from 'vue'
  import moment from 'moment'
  export default {
    name: 'creatPlan',
    setup(props, context){
      const state = reactive({
        form: {
          date:moment(Date.now()).format('YYYY-MM-DD'),
          time:1,
          content: ''
        }
      })
      const onsubmit = () => {
        context.emit('handlePlan', state.form)
      }
      return {
        ...toRefs(state),
        onsubmit
      }
    }
  }
</script>