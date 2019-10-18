<template>
  <div>
    供应商管理
  </div>
</template>

<script>
import supplierApi from '@/api/supplier'

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
        console.log('1',this.list)
      supplierApi.getlist().then(response=>{
        this.list=response.data.data
        console.log(this.list)
      })
    }
  },
}
</script>