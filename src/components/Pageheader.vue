<template>
  <div class="header">
    <el-row>
      <div class="header-icon">
        <el-button type="primary" plain>文件</el-button>
        <el-button type="success" plain>模型</el-button>
        <el-button type="info" plain>分析</el-button>
        <el-button type="warning" plain>管理</el-button>
        <el-button type="danger" plain>成员</el-button>
        <el-button type="info" plain>添加</el-button>
      </div>
      <el-dropdown class="dropmenu">
        <span class="el-dropdown-link">
          管理员，您好
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="text">管理员信息</el-dropdown-item>
            <el-dropdown-item class="text">密码管理</el-dropdown-item>
            <el-dropdown-item class="text">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pageheader",
});
</script>

<style>
.header {
  position: absolute;
  top: 0px;
  left: 230px;
  right: 0px;
  background-color: #fff;
  padding-top: 5px;
}
.header-icon {
  margin-left: 5px;
  margin-top: 10px;
}
.el-button {
  height: 40px;
}
.rightDropdown {
  position: fixed;
  right: 15px;
  top: 18px;
}
.rightDropdown span {
  color: rgb(156, 155, 155);
  font-size: 15px;
}

.admin-text {
  margin-bottom: 10px;
}
.el-dropdown-link{
  font-size: 20px;
}
.dropmenu{
  position: absolute;
  right: 0;
  margin-top: 25px;
  margin-right: 30px;
}
.text{
  font-size: 18px;
  margin: 10px 0px;
}
</style>