<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="title" label="标题" width="150" />
    <el-table-column prop="time" label="时间" width="120" />
    <el-table-column prop="type" label="类型" width="120" />
    <el-table-column prop="account" label="金额" width="120" />
    <el-table-column prop="remarks" label="备注" width="600" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let tableData = ref([
  {
    title: "",
    time: "",
    account: "",
    type: "",
    remarks: ""
  }
]);

const init = () => {
  axios.get("http://127.0.0.1:3000/api/account").then(res => {
    console.log(res);
    if (res && res.data && res.data.code === "0000") {
      tableData.value = res.data.data;
    }
  });
};

onMounted(() => {
  init();
});
</script>
