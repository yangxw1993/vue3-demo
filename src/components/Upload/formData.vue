<template>
  <a-card size="small" title="form-data上传" style="width: 300px">
    <a-upload
      v-model:fileList="fileList"
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
}
</script>

<style>

</style>