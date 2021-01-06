<!--
 * @Author: your name
 * @Date: 2020-12-14 16:38:45
 * @LastEditTime: 2020-12-24 18:08:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/views/Example/Upload/Index.vue
-->
<template>
  <CutImg />
  <UploadForm />
</template>

<script>
import CutImg from "@/components/canvasCutImg/Index";
import UploadForm from "@/components/Upload/formData";
  export default {
    name: "upload",
    components: {
      CutImg,
      UploadForm
    }
  }
</script>
