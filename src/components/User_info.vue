<template>
    <div>
        <div class="loading" v-if="complete">
            <img src="../assets/loading.gif" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name: 'User_info',
  data(){
      return {
          complete:true,
          userInfo: {}
      }
  },
  methods: {
      fetchData(){
          this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res=>{
              if(res.data.success) {
                this.complete = false
                this.userInfo = res.data.data
              }
          })
      }
  },
  beforeMount(){
      this.fetchData()
  }
}
</script>
<style scoped>
.loading {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>
