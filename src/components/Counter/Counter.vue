<template>
  <h1>{{ counter }}</h1>
  <button class="btn" @click="changeValue(1)">+</button>
  <button class="btn" @click="changeValue(-1)">-</button>
</template>

<script>
import { ref } from "vue";
const mixin1 = {
  created: function() {
    console.log(1)
  }
}
const mixin2 = {
  created: function() {
    console.log(22)
  }
}
export default {
	name: "Counter",
	created: function(){
		console.log(333);
	},
	mixins: [mixin1, mixin2],
  setup() {
    const counter = ref(100);
    const changeValue = (num) => {
      counter.value += num;
    };
    return { counter, changeValue };
  },
};
</script>

<style>
</style>