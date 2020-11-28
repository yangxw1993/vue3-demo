<!--
 * @Author: your name
 * @Date: 2020-11-28 18:31:48
 * @LastEditTime: 2020-11-28 22:54:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/components/Cart/AddCart.vue
-->
<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="商品名称：">
      <a-input v-model:value="form.goodsName" />
    </a-form-item>
    <a-form-item label="价格：">
      <a-input type="number" v-model:value="form.price" />
    </a-form-item>
    <a-form-item label="数量：">
      <a-input-number
        v-model:value="form.count"
        :min="1"
        :max="100"
        @change="onChangeCount"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="addCart"> 添加 </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
		const store = useStore();
		const data = reactive({
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
      goodsName: "",
      price: "",
      count: 1,
    },
    });
    const onChangeCount = (value) => {
			const {form} = data;
      form.count = value;
    };
    const addCart = () => {
			let {form} = data;
      form.id = Date.now();
      store.commit("addBookToCart", form);
      data.form = {
        goodsName: "",
        price: "",
        count: 1,
      };
    };

    
    return { ...toRefs(data), addCart, onChangeCount };
  },
};
</script>
