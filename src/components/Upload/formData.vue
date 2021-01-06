<template>
  <a-card size="small" title="form-data上传" style="width: 300px">
    <a-upload
      v-model:fileList="fileList"
      name="file"
      :multiple="true"
      :headers="headers"
      @change="handleChange"
    >
    <a-button> <upload-outlined /> Click to Upload </a-button>
  </a-upload>
  </a-card>
</template>

<script>
export default {
  name:'UploadForm',
  setup(){
    const handleChange = (file) => {
      console.log(file)
    }
    return{
      handleChange
    }
  }
}
</script>

<style>

</style>