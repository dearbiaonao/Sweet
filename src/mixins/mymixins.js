
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      this.$toast('刷新成功')
      this.isLoading = false
    }
  }
}
