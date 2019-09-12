<template>
  <div>
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top:20px">
      <el-form-item>
        <el-input v-model="searchMap.cardNum" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchMap.name" placeholder="会员名字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="searchMap.payType" placeholder="支付类型">
          <el-option
            v-for="option in payTypeOptions"
            :key="option.type"
            :label="option.name"
            :value="option.type"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker value-format="yyyy-MM-dd" v-model="searchMap.birthday" type="date" placeholder="出生日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData" >查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span>{{ scope.row.payType | payTypeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="fetchData"
      @current-change="fetchData"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import memberApi from "@/api/member";

const payTypeOptions = [
  { type: "1", name: "现金" },
  { type: "2", name: "微信" },
  { type: "3", name: "支付宝" },
  { type: "4", name: "银行卡" }
];

export default {
  data() {
    return {
      list: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      searchMap: {},
      payTypeOptions
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      // memberApi.getList().then(response => {
      memberApi
        .search(this.currentPage, this.pageSize, this.searchMap)
        .then(response => {
          const resp = response.data;
          this.list = resp.data.rows;
          this.total = resp.data.total;
        });
    },
    handleEdit(id) {
      console.log("编辑", id);
    },
    handleDelete(id) {
      console.log("删除", id);
    }
  },

  filters: {
    payTypeFilter(type) {
      const payObj = payTypeOptions.find(obj => obj.type === type);
      return payObj ? payObj.name : null;
    }
  }
};
</script>