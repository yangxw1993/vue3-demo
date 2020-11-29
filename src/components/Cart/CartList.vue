<!--
 * @Author: your name
 * @Date: 2020-11-28 18:31:27
 * @LastEditTime: 2020-11-29 17:48:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/components/Cart/CartList.vue
-->
<template>
  <a-table :columns="columns" :data-source="books" rowKey="id">
    <template #count="{ text, record }">
      <a-button-group>
        <a-button type="primary" size="small" @click="changeCount(-1, record)">
          <template #icon> <MinusOutlined /> </template>
        </a-button>
				<a-button size="small">{{ record.count }}</a-button>
				<a-button type="primary" size="small" @click="changeCount(1, record)">
          <template #icon><PlusOutlined /></template>
        </a-button>
      </a-button-group>
    </template>
    <template #price="{ text, record }"> ¥{{ record.price }} </template>
    <template #totalPrice="{ text, record }">
      ¥{{ itemTotalPrice(record.id) }}
    </template>
    <template #action="{ text, record }">
      <a-popconfirm
        v-if="books.length"
        title="Sure to delete?"
        @confirm="confirmDel(record)"
        @cancel="cancelDel"
      >
        <a>删除 {{ record.id }}</a>
        <!-- <a href="javascript:;">删除</a> -->
      </a-popconfirm>
    </template>
  </a-table>
  <div>总价：¥{{ totalPirce }}</div>
</template>
<script>
import { useStore, mapMutations } from "vuex";
import { PlusOutlined, MinusOutlined} from "@ant-design/icons-vue";
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
    slots: { customRender: "price" },
  },
  {
    title: "数量",
    key: "count",
    dataIndex: "count",
    slots: { customRender: "count" },
  },
  {
    title: "总价",
    key: "totalPrice",
    dataIndex: "totalPrice",
    slots: { customRender: "totalPrice" },
  },
  {
    title: "操作",
    key: "action",
    dataIndex: "action",
    slots: { customRender: "action" },
  },
];
import { reactive, ref, toRefs } from "vue";
export default {
  components: {
		PlusOutlined,
		MinusOutlined
  },
  setup() {
    const store = useStore();
    const Status = reactive({
      columns,
      books: ref(store.state.books),

      // 单品总价
      itemTotalPrice: ref(store.getters.cartItemPrice),
      // 总价
      totalPirce: ref(store.getters.cartTotalPrice),
    });
    // 改变数量
    const changeCount = (type, record) => {
      console.log("id", type, "count", record);
			const {id} = record
      store.commit("changeCartCount", { id, count: type });
    };
    // 取消删除
    const cancelDel = (e) => {
      console.log("e", e);
    };
    // 确认删除
    const confirmDel = (item) => {
      store.commit("removeBook", item.id);
    };
    return {
      ...toRefs(Status),
      cancelDel,
      confirmDel,
      changeCount,
    };
  },
};
</script>
