<template>
  <div>
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top:20px">
      <el-form-item>
        <el-input v-model="searchMap.account" placeholder="账号" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchMap.name" placeholder="姓名" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button @click="$refs['searchForm'].resetFields()">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="username" label="账号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="90"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="salary" label="薪酬"></el-table-column>
      <el-table-column prop="entryDate" label="入职时间"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <el-dialog title="员工编辑" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        :rules="rules"
        ref="pojoForm"
        label-width="100px"
        label-position="right"
        style="width:400px"
        :model="pojo"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="pojo.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="pojo.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="pojo.age"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="pojo.mobile"></el-input>
        </el-form-item>
        <el-form-item label="薪酬" prop="salary">
          <el-input v-model="pojo.salary"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" prop="entryDate">
          <el-input v-model="pojo.entryDate"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- <el-button
          type="primary"
          @click="pojo.id === null ? addData('pojoForm'): updateData('pojoForm')"
        >确 定</el-button>-->
        <el-button type="primary" @click="addData('pojoForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import staffApi from "@/api/staff";

export default {
  data() {
    return {
      list: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
      searchMap: {
        name: "",
        code: "",
        supplierName: ""
      },
      dialogFormVisible: false,
      pojo: {
        username: "",
        name: "",
        age: "",
        mobile: "",
        salary: "",
        entryDate: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }]
      }
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fetchData();
    },
    fetchData() {
      staffApi
        .search(this.currentPage, this.pageSize, this.searchMap)
        .then(response => {
          const data = response.data.data;
          this.list = data.rows;
          this.total = data.total;
          console.log(this.list);
        });
    },
    handleAdd() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["pojoForm"].resetFields();
      });
    },

    addData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //提交表单
          staffApi.add(this.pojo).then(response => {
            const resp = response.data;
            if (resp.flag) {
              this.$message({
                message: "新增成功, 初始密码为:123456",
                type: "warning"
              });
              this.fetchData();
              this.dialogFormVisible = false;
            } else {
              this.$message({
                message: resp.message,
                type: "warning"
              });
            }
          });
        } else {
          return false;
        }
      });
    },

    handleEdit(id) {
      this.handleAdd();
      staffApi.getById(id).then(response => {
        const resp = response.data;
        if (resp.flag) {
          this.pojo = resp.data;
        }
      });
    },

    handleDelete(id) {
      console.log(id);
      this.$confirm("确认删除这条数据吗?", "提示", {
        confirmButtonText: "确认",
        cancleButtonText: "取消"
      })
        .then(() => {
          staffApi.deleteById(id).then(response => {
            const resp = response.data;
            this.$message({
              message: resp.message,
              type: resp.flag ? "success" : "error"
            });
            if (resp.flag) {
              this.fetchData();
            }
          });
        })
        .catch(() => {});
    }
  }
};
</script>