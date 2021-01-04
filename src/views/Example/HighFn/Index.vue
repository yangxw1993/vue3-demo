<template>
  <div @click="onSay" v-copy="msg">{{msg}}</div>
  <button v-copy="msg">{{msg}}</button>
</template>

<script>
import myMinx from './mixins'
export default {
  mixins: [myMinx],
}
</script>

<style>

</style>