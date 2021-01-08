<template>
  <a-card size="small" title="form-data上传" style="width: 300px">
    <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
      <a-button> Select File </a-button>
    </a-upload>
    <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </a-button>
  </a-card>
</template>

<script>
import {reactive, toRefs} from 'vue'
import httpRequest from '@/utils/request'
export default {
  name:'UploadForm',
  setup(){
    const status = reactive({
      fileList: [],
      uploading: false,
    })
     const beforeUpload = (file) => {
      status.fileList = [...status.fileList, file];
      return false;
    };
    const handleUpload = (file) => {
      const fileList = status.fileList;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append('files[]', file);
      });
      // status.uploading = true;
      httpRequest({
        url: 'http://localhost:3001/upload/formData',
        method: 'post',
         data: formData,
         headers: {
           'Content-Type':'multipart/form-data'
         }
      }).then(res => {
        console.log(res)
      }).catch(err => console.error(err))
      // You can use any AJAX library you like
      
    }
    return{
      ...toRefs(status),
      handleUpload,
      beforeUpload
    }
  }
}
</script>

<style>

</style>