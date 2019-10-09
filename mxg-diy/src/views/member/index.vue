<template>
  <div>
    会员管理
  </div>
</template>

<script>
import memberApi from '@/api/member'

export default {
    data(){
      return{
        list:[]
      }
    },

    created() {
      this.fetchData()
    },

    methods: {
      fetchData(){
        memberApi.getList().then(response=>{
          const resp=response.data
          this.list=resp.data
          console.log(resp)
        })
      }
    },
}
</script>