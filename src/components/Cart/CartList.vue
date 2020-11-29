<!--
 * @Author: your name
 * @Date: 2020-11-28 18:31:27
 * @LastEditTime: 2020-11-29 16:02:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/components/Cart/CartList.vue
-->
<template>
  <a-table :columns="columns" :data-source="books" rowKey="id">
    <template #action="{text, record}">
			 <a-popconfirm
        v-if="books.length"
        title="Sure to delete?"
        @confirm="confirmDel(record)"
				@cancel="cancelDel"
      >
			 <a>删除</a>
				<!-- <a href="javascript:;">删除</a> -->
			</a-popconfirm>
		</template>
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
		dataIndex: 'count'
	},
	{
    title: "操作",
		key: "action",
		slots: { customRender: 'action' }
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
		// 取消删除
		const cancelDel = (e) => {
			console.log('e',e);
		}
		// 确认删除
		const confirmDel = item => {
			store.commit('removeBook', item.id)
		}
    return {
			...toRefs(Status),
			cancelDel,
			confirmDel
    };
  },
};
</script>
