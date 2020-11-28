<!--
 * @Author: your name
 * @Date: 2020-11-28 18:31:27
 * @LastEditTime: 2020-11-28 22:12:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/components/Cart/CartList.vue
-->
<template>
  <a-table :columns="columns" :data-source="books">
    
  </a-table>
</template>
<script>
import { useStore } from "vuex";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "商品名称",
    dataIndex: "goodsName",
    key: "goodsName",
  },
  {
    title: "价格",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "数量",
    key: "count",
    dataIndex: "count",
  },
];
import { reactive, ref, toRefs } from "vue";
export default {
  components: {
    SmileOutlined,
    DownOutlined,
  },
  setup() {
    const store = useStore();
    const Status = reactive({
      columns,
      books: ref(store.state.books),
		});

    return {
      ...toRefs(Status),
    };
  },
};
</script>
