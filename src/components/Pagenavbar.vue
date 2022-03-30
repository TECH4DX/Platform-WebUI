<template>
  <div class="navbar">
    <a href="#/">
      <img alt="logo" src="../assets/logo.png" style="width: 150px" />
      <br />
      <span class="slogan">开发者画像数据分析及可视化</span>
    </a>
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo leftmenu"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" class="items">
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="2" class="items" @click="toRank">
            <span>社区排名</span>
          </el-menu-item>
          <el-menu-item index="3" class="items">
            <span>异常行为识别</span>
          </el-menu-item>
          <el-menu-item index="4" class="items">
            <span>正负向情感检测</span>
          </el-menu-item>
          <el-menu-item index="5" class="items">
            <span>开发者数据</span>
          </el-menu-item>
          <el-menu-item index="6" class="items">
            <span>洞察数据</span>
          </el-menu-item>
          <el-menu-item index="7" class="items">
            <span>活动报告</span>
          </el-menu-item>
          <el-menu-item index="8" class="items">
            <span>数据导出</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagenavbar",
});

</script>

<style>
.navbar {
  position: absolute;
  width: 230px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #e8f4f4;
  text-align: center;
}

.navbar a {
  display: inline-block;
  padding-top: 5px;
  text-decoration: none;
}

.slogan {
  font-size: 16px;
  color: rgb(124, 124, 124);
}

.leftmenu {
  background-color: #e8f4f4;
  margin-top: 20px;
}

.leftmenu span {
  font-size: 18px;
}

.items:hover {
  background-color: rgb(161, 161, 161);
  color: #fff;
}
</style>
