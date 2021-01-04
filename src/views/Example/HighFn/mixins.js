const myMinx = {
  data(){
    return {
      msg: '我是myMinx'
    }
  },
  methods: {
    onSay(){
      console.log(this.msg)
    }
  },
  created() {
    console.log('我是测试')
  }
}
export default myMinx