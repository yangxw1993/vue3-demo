<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
  </div>
  <Counter></Counter>
</template>

<script>
<<<<<<< HEAD
// @ is an alias to /src
import Counter from '@/components/Counter'
export default {
  name: 'Home',
  components: {Counter}
=======

import Counter from '@/components/Counter/Counter'
export default {
  name: 'Home',
  components: {
    Counter
  }
>>>>>>> master
}
</script>
