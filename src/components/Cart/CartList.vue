<!--
 * @Author: your name
 * @Date: 2020-11-28 18:31:27
 * @LastEditTime: 2021-01-22 16:28:27
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
      <a-button-group>
        <a-button type="primary" size="small" @click="onModify(record)">修改</a-button>
        <a-button type="danger" size="small">删除</a-button>
      </a-button-group>
      
    </template>
  </a-table>
  <div>总价：¥{{ totalPrice }}</div>
  <a-button type="primary"  @click="downloadExcel">导出</a-button>
</template>
<script>
import { reactive, ref, toRefs, computed } from "vue";
import { useStore, mapMutations } from "vuex";
import { PlusOutlined, MinusOutlined} from "@ant-design/icons-vue";
import ExportExcel from 'js-export-excel'
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

export default {
  components: {
		PlusOutlined,
		MinusOutlined
  },
  setup() {
    const store = useStore();
     
    const Status = reactive({
      columns,
      books: store.state.cart.books,

      // 单品总价
      itemTotalPrice: ref(store.getters.cartItemPrice),
      // 总价
      totalPrice: computed( () => store.getters.cartTotalPrice),
    });
    
    // 改变数量
    const changeCount = (type, record) => {
      store.commit("changeCartCount", { id: record.id, count: type });
    };
    // 取消删除
    const cancelDel = (e) => {
      console.log("e", e);
    };
    // 确认删除
    const confirmDel = (item) => {
      store.commit("removeBook", item.id);
    };
    const onModify = (item) => {      
      store.dispatch('modifyCart', Object.assign({}, item))
    };
    // 导出
    const downloadExcel = ()=> {
      const option = {
        fileName: '购买清单',
      };
      const sheetData = [];
      const sheetHeader = [];
      // 是否设置表头
      let isSetHeader = true;
      Status.books.forEach(item => {
        const {id, goodsName, price, count, totalPrice} = item;
        let rowObj = {}
        columns.forEach(col => {
          
          if(item[col.key]){
            rowObj[col.title] = item[col.key];
          }
          if(col.key === 'totalPrice'){
            rowObj['总价'] = count * price
          }
          if(isSetHeader){
            sheetHeader.push(col.title)
          }
        })
        sheetData.push(rowObj);
        isSetHeader = false;
      })
      option.datas=[
        {
          sheetData,
          sheetHeader,
          sheetName:'sheet',
          sheetFilter: sheetHeader,
        }
      ];
      const toExcel = new ExportExcel(option);
       
      toExcel.saveExcel(); 
    }
    return {
      ...toRefs(Status),
      cancelDel,
      confirmDel,
      changeCount,
      onModify,
      downloadExcel
    };
  },
};
</script>
