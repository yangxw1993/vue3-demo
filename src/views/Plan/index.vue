<template>
  <h1>计划</h1>
  <creatPlan @handlePlan="handlePlan"></creatPlan>
</template>

<script>
  import creatPlan from './Create'
export default {
  components:{creatPlan},
  setup(){
    const handlePlan = plan => {
      console.log(plan)
    }
    return {
      handlePlan
    }
  }
}
</script>

<style>

</style>