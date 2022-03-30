<template>
  <div class="pagemain">
    <el-row :gutter="20" class="firstrow">
      <el-col :span="7">
        <div class="grid-content bg-purple ele1">
          <div class="text-biaoti">贡献排名</div>
          <table class="table1">
            <tr class="first-tr">
              <td>
                <div class="data-progress">
                  <el-progress type="dashboard" :percentage="29" :width="140">
                    <template #default="{ percentage }">
                      <span class="percentage-value">{{ percentage }}%</span>
                      <span class="percentage-label">Issue</span>
                    </template>
                  </el-progress>
                </div>
              </td>

              <td>
                <div class="data-progress">
                  <el-progress type="dashboard" :percentage="37" :width="140">
                    <template #default="{ percentage }">
                      <span class="percentage-value">{{ percentage }}%</span>
                      <span class="percentage-label">PR/Commit</span>
                    </template>
                  </el-progress>
                </div>
              </td>
            </tr>
            <tr class="second-tr">
              <td colspan="2">
                <div
                  class="ShuJuTongJi"
                  id="ShuJuTongJi"
                  :style="{ width: '100%', height: '100%' }"
                ></div>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple ele2">
          <div class="text-biaoti">Labels</div>
          <div class="text-biaoti">协作网络</div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple ele3">
          <div class="text-biaoti">
            开源影响力
            <div class="demo-progress">
              <el-progress
                :text-inside="true"
                :stroke-width="26"
                :percentage="70"
              />
              <el-progress
                :text-inside="true"
                :stroke-width="24"
                :percentage="100"
                :color="customColor1"
                status="success"
              />
              <el-progress
                :text-inside="true"
                :stroke-width="22"
                :percentage="80"
                status="warning"
              />
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="50"
                :color="customColor1"
                status="exception"
              />
            </div>
            <div class="text-biaotisecond">Meetup/Meeting/Report</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="secondrow">
      <el-col :span="17">
        <div class="grid-content bg-purple ele4">
          <div class="text-biaoti">活跃度概览</div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple ele5">
          <div class="text-biaoti">NPS/NSS</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "DeveloperPortrait",
  setup() {
    let ShuJuTongJi = echarts.init(document.getElementById("ShuJuTongJi"));
    const data1: number[] = [];
    for (let i = 0; i < 7; ++i) {
      data1.push(Math.round(Math.random() * 100));
    }
    ShuJuTongJi.setOption({
      xAxis: {
        type: "value",
        min: 0,
        max: 100,
      },
      yAxis: {
        type: "category",
        data: [
          "建立Issue",
          "尚未关闭Issue",
          "参与Issue讨论",
          "建立PR",
          "尚未关闭PR",
          "参与PR讨论",
          "合入commit",
        ],
        axisLabel: {
          inside: false,
          textStyle: {
            fontSize: "10",
            itemSize: "",
          },
        },
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 6,
      },
      series: [
        {
          realtimeSort: true,
          name: "贡献排名",
          type: "bar",
          barWidth: "25%",
          radius: ["5%", "10%"],
          data: data1,
          label: {
            show: true,
            position: "right",
            valueAnimation: true,
          },
        },
      ],
      legend: {
        show: true,
        bottom: 0,
      },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
    });
    window.onresize = function () {
      ShuJuTongJi.resize();
    };
  },
});
</script>

<script lang="ts" setup>
import { ref } from "vue";
const customColor1 = ref("#B2BDFF");
</script>

<style>
.pagemain {
  position: absolute;
  top: 55px;
  left: 230px;
  bottom: 0px;
  right: 0px;
  padding: 10px;
  overflow-y: auto;
  background-color: rgb(245, 245, 245);
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #fff;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.ele1,
.ele2,
.ele3 {
  height: 100%;
}

.firstrow {
  height: 70%;
}

.secondrow {
  height: 30%;
}

.ele4,
.ele5 {
  height: 100%;
}

.text-biaoti {
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
  color: rgb(156, 155, 155);
}

.text-biaotisecond {
  font-size: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
  text-align: left;
  color: rgb(156, 155, 155);
}

.table1 {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 0px;
}

.first-tr {
  height: 5%;
}

.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
</style>
