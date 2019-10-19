<template>
  <div class="father">
    <h1>热情少女</h1>
    <!-- <img src="../../assets/sn.jpg" alt="fuck" class="pic" > -->
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
    </el-table>
  </div>
</template>

<script>
import snnApi from '@/api/snn.js'
export default {
    created(){
        this.fetchData()
    },

    methods:{
        fetchData(){
            snnApi.search(this.currentPage,this.pageSize,this.searchMap).then(response=>{
                const resp = response.data
                this.list = resp.data.rows
                this.total = resp.data.total
            })
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

