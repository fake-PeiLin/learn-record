<template>
  <div class="father">
    <h1>热情少女</h1>
    
    <el-table :data="list" height="380" border style="width: 100%">
      <!-- type="index"获取索引值，从1开始 ，label显示标题，prop 数据字段名，width列宽 -->
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="kaHao" label="少女卡号"></el-table-column>
      <el-table-column prop="xingMing" label="少女姓名" width="90"></el-table-column>
      <el-table-column prop="shengRi" label="少女生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column prop="money" label="约炮金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span>{{scope.row.payType | payTypeFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="少女地址"></el-table-column>
      <el-table-column label='操作' width="150">
        <template slot-scope="scope" >
          <el-button size="mini" @click="handleEdit(scope.row.id)" >编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.row.id)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import snnApi from '@/api/snn.js'

const payTypeOptions = [
    {type: '1', name: '现金'},
    {type: '2', name: '微信'},
    {type: '3', name: '支付宝'},
    {type: '4', name: '银行卡'},
]

export default {
    data(){
      return{
        list:[]
      }
    },
    created(){
        this.fetchData()
    },

    methods:{
      handleEdit(id){
        console.log('编辑')
      },
      
      handleDele(id){
        console.log('删除')
      },

      fetchData(){
        snnApi.getList().then(response=>{
          const resp=response.data
          this.list=resp.data
          console.log(resp)
        })
      }
},

    filters:{
      payTypeFilter(type){
        const obj=payTypeOptions.find(obj=>obj.type===type)
        return obj ? obj.name:null
      }
    }
}
</script>

<style scoped>
.father {
  position: relative;
  background-color: greenyellow;
}
h1 {
  color: hotpink;
  text-align: center;
}
.pic {
  position: absolute;
  left: 20%;
}
</style>

