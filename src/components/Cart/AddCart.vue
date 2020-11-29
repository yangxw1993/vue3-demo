<!--
 * @Author: your name
 * @Date: 2020-11-28 18:31:48
 * @LastEditTime: 2020-11-30 00:33:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/components/Cart/AddCart.vue
-->
<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="ID：">
      <a-input v-model:value="form.id" />
    </a-form-item>
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
import { reactive, ref, toRefs, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const data = reactive({
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: computed(() => store.state.cart.modifyItem),
    });
    const onChangeCount = (value) => {
      const { form } = data;
      form.count = value;
    };
    const addCart = () => {
      let { id, goodsName, price } = data.form;
      if (id && goodsName && price) {
        // store.commit("addBookToCart", form);
        console.log( data.form);
        store.dispatch("addCart", data.form);
        store.commit("initModify");
        
        data.form = {
          id: '',
          goodsName: "",
          price: "",
          count: 1,
        };
      }
    };

    return { ...toRefs(data), addCart, onChangeCount };
  },
};
</script>
