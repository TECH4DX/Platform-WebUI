<template>
  <div class="portrait">
    <el-row :gutter="24" class="firstrow">
      <el-col :span="7">
        <div class="grid-content bg-purple ele1">
          <div class="chart-title">贡献排名</div>
          <table class="table1">
            <tr class="first-tr">
              <td>
                <div class="data-progress">
                  <el-progress
                    type="dashboard"
                    :percentage="19"
                    :width="160"
                    :color="colors"
                  >
                    <template #default="{ percentage }">
                      <span class="percentage-value">{{ percentage }}%</span>
                      <span class="percentage-label">Issue</span>
                    </template>
                  </el-progress>
                </div>
              </td>
              <td>
                <div class="data-progress">
                  <el-progress
                    type="dashboard"
                    :percentage="57"
                    :width="160"
                    :color="colors"
                  >
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
                  :style="{ width: '95%', height: '100%' }"
                ></div>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="grid-content bg-purple ele2">
          <div class="chart-title">协作网络</div>
          <div
            id="XieZuoGuanXi"
            :style="{ width: '100%', height: '80%' }"
          ></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="grid-content bg-purple chart-unit">
          <div class="chart-title">Issue 状态分布</div>
          <div class="lookarea">
            <div
              id="IssueStateDistribution"
              :style="{ width: '100%', height: '100%' }"
            ></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple chart-unit">
          <div class="chart-title">历史 Issue 当前状态</div>
          <div
            id="CurrentStatusOfHistoricalIssue"
            :style="{ width: '100%', height: '100%' }"
          ></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="grid-content bg-purple chart-unit">
          <div class="chart-title">Issue OpenDays 分布</div>
          <div class="lookarea">
            <div
              id="IssueOpenDaysDistribution"
              :style="{ width: '100%', height: '100%' }"
            ></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple chart-unit">
          <div class="chart-title">Issue 天数分布</div>
          <div
            id="IssueDaysDistribution"
            :style="{ width: '100%', height: '100%' }"
          ></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="grid-content bg-purple chart-unit">
          <div class="chart-title">Issue FirstAttentionTime 分布</div>
          <div class="lookarea">
            <div
              id="IssueFirstAttentionTimeDistribution"
              :style="{ width: '100%', height: '100%' }"
            ></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple chart-unit">
          <div class="chart-title">开发者 Issue 行为记录</div>
          <div
            id="DeveloperIssueBehaviorRecord"
            :style="{ width: '100%', height: '100%' }"
          ></div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple ele3">
          <div class="tableMoKuai2">
            <div class="languagedata">
              <span>Most Used Language: Python</span>
              <div class="pB_Container">
                <processBar v-bind="processBarModel" />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts";
import { onMounted } from "vue";
import $ from "jquery";
import ProcessBar from "./ProcessBar.vue";
import axios from "axios";

let base = +new Date(2021, 12, 1);
let oneDay = 24 * 3600 * 1000;
let valueBase = Math.random() * 300;
let valueBase2 = Math.random() * 50;
let data = [];
let data2 = [];

for (var i = 1; i < 10; i++) {
  var now = new Date((base += oneDay));
  var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-");

  valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
  valueBase <= 0 && (valueBase = Math.random() * 300);
  data.push([dayStr, valueBase]);

  valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
  valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
  data2.push([dayStr, valueBase2]);
}
interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}
export default defineComponent({
  name: "DeveloperPortrait",
  components: {
    ProcessBar,
  },
  data() {
    return {
      processBarModel: {
        processValue: [76.38, 3.23, 11.89, 0.43, 8.07],
      },
      percentage: 10,
      colors: [
        { color: "#FFB6C1", percentage: 20 },
        { color: "#ADADAD", percentage: 40 },
        { color: "#FFBB77", percentage: 60 },
        { color: "#97CBFF", percentage: 80 },
        { color: "#B8B8DC", percentage: 100 },
      ],
    };
  },

  setup() {
    onMounted(() => {
      let XieZuoGuanXi = echarts.init(document.getElementById("XieZuoGuanXi"));
      XieZuoGuanXi.showLoading();
      $.getJSON("/les-miserables.json", function (graph) {
        XieZuoGuanXi.hideLoading();

        graph.nodes.forEach(function (node: GraphNode) {
          node.label = {
            show: node.symbolSize > 30,
          };
        });
        XieZuoGuanXi.setOption({
          legend: [
            {
              data: graph.categories.map(function (a: { name: string }) {
                return a.name;
              }),
            },
          ],
          color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
          animationDuration: 1500,
          animationEasingUpdate: "quinticInOut",
          series: [
            {
              name: "Les Miserables",
              type: "graph",
              layout: "none",
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                position: "right",
                formatter: "{b}",
              },
              lineStyle: {
                color: "source",
                curveness: 0.3,
              },
              emphasis: {
                focus: "adjacency",
                lineStyle: {
                  width: 10,
                },
              },
            },
          ],
        });
      });
      let ShuJuTongJi = echarts.init(document.getElementById("ShuJuTongJi"));

      const data1: number[] = [];
      for (let i = 0; i < 7; ++i) {
        data1.push(Math.round(Math.random() * 100));
      }
      ShuJuTongJi.setOption({
        xAxis: {
          show: false,
          type: "value",
          min: 0,
          max: 100,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
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
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          show: false,
        },
        series: [
          {
            realtimeSort: true,
            name: "贡献排名",
            type: "bar",
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    "#898EFC",
                    "#898EFC",
                    "#898EFC",
                    "#898EFC",
                    "#898EFC",
                    "#898EFC",
                    "#898EFC",
                    "#898EFC",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
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
          show: false,
          bottom: 0,
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
      });

      let IssueStateDistribution = echarts.init(
        document.getElementById("IssueStateDistribution")
      );

      axios.get("/api/es/IssueStateDistribution").then((response) => {
        IssueStateDistribution.setOption({
          legend: {
            top: "2%",
          },
          series: [
            {
              name: "State",
              type: "pie",
              top: "10%",
              bottom: "7%",
              radius: ["40%", "60%"],
              labelLine: {
                length: 35,
              },
              label: {
                formatter: "{a|{b}}{abg|}\n{hr|}\n  {b|}{c}  {per|{d}%}  ",
                backgroundColor: "#F6F8FC",
                borderColor: "#8C8D8E",
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#6E7079",
                    lineHeight: 22,
                    align: "center",
                  },
                  hr: {
                    borderColor: "#8C8D8E",
                    width: "100%",
                    borderWidth: 1,
                    height: 0,
                  },
                  b: {
                    color: "#4C5058",
                    fontSize: 14,
                    fontWeight: "bold",
                    lineHeight: 33,
                  },
                  per: {
                    color: "#fff",
                    backgroundColor: "#4C5058",
                    padding: [3, 4],
                    borderRadius: 4,
                  },
                },
              },
              data: response["data"]["data"]["series"],
            },
          ],
        });
      });

      let CurrentStatusOfHistoricalIssue = echarts.init(
        document.getElementById("CurrentStatusOfHistoricalIssue")
      );

      axios.get("/api/es/CurrentStatusOfHistoricalIssue").then((response) => {
        var data = response["data"]["data"];
        var CurrentStatusOfHistoricalIssueOption = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: { top: "2%" },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "12%",
            top: "17%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: data["date"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "closed",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["closed"],
            },
            {
              name: "open",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["open"],
            },
            {
              name: "progressing",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["progressing"],
            },
            {
              name: "rejected",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["rejected"],
            },
          ],
        };

        CurrentStatusOfHistoricalIssue.setOption(
          CurrentStatusOfHistoricalIssueOption
        );
      });

      let IssueOpenDaysDistribution = echarts.init(
        document.getElementById("IssueOpenDaysDistribution")
      );

      axios.get("/api/es/IssueOpenDaysDistribution").then((response) => {
        var Data = response["data"]["data"];
        IssueOpenDaysDistribution.setOption({
          legend: {
            top: "2%",
          },
          series: [
            {
              name: "State",
              type: "pie",
              top: "15%",
              bottom: "7%",
              radius: ["40%", "60%"],
              labelLine: {
                length: 35,
              },
              label: {
                formatter: "  {d}% ",
                backgroundColor: "#F6F8FC",
                borderColor: "#8C8D8E",
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#6E7079",
                    lineHeight: 22,
                    align: "center",
                  },
                  hr: {
                    borderColor: "#8C8D8E",
                    width: "100%",
                    borderWidth: 1,
                    height: 0,
                  },
                  b: {
                    color: "#4C5058",
                    fontSize: 14,
                    fontWeight: "bold",
                    lineHeight: 33,
                  },
                  per: {
                    color: "#fff",
                    backgroundColor: "#4C5058",
                    padding: [3, 4],
                    borderRadius: 4,
                  },
                },
              },
              data: [
                {
                  value: Data["0.0-1.0"]["doc_count"],
                  name: "0 to 1",
                },
                {
                  value: Data["1.0-3.0"]["doc_count"],
                  name: "1 to 3",
                },
                {
                  value: Data["3.0-7.0"]["doc_count"],
                  name: "3 to 7",
                },
                {
                  value: Data["7.0-14.0"]["doc_count"],
                  name: "7 to 14",
                },
                {
                  value: Data["14.0-30.0"]["doc_count"],
                  name: "14 to 30",
                },
                {
                  value: Data["30.0-180.0"]["doc_count"],
                  name: "30 to 180",
                },
                {
                  value: Data["180.0-360.0"]["doc_count"],
                  name: "180 to 360",
                },
                {
                  value: Data["360.0-*"]["doc_count"],
                  name: "360 to +∞",
                },
              ],
            },
          ],
        });
      });

      let IssueDaysDistribution = echarts.init(
        document.getElementById("IssueDaysDistribution")
      );

      axios.get("/api/es/IssueDaysDistribution").then((response) => {
        var data = response["data"]["data"];
        var Option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: { top: "2%" },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "12%",
            top: "17%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: data["day"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "closed",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["closed"],
            },
            {
              name: "open",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["open"],
            },
            {
              name: "progressing",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["progressing"],
            },
            {
              name: "rejected",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["rejected"],
            },
          ],
        };

        IssueDaysDistribution.setOption(Option);
      });

      let IssueFirstAttentionTimeDistribution = echarts.init(
        document.getElementById("IssueFirstAttentionTimeDistribution")
      );

      axios
        .get("/api/es/IssueFirstAttentionTimeDistribution")
        .then((response) => {
          var Data = response["data"]["data"]["aggregations"]["2"]["buckets"];
          IssueFirstAttentionTimeDistribution.setOption({
            legend: {
              // data: ["0 to 1", "1 to 3"],
              top: "2%",
            },
            series: [
              {
                name: "State",
                type: "pie",
                top: "15%",
                bottom: "7%",
                radius: ["40%", "60%"],
                labelLine: {
                  length: 35,
                },
                label: {
                  formatter: "  {d}% ",
                  backgroundColor: "#F6F8FC",
                  borderColor: "#8C8D8E",
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: "#6E7079",
                      lineHeight: 22,
                      align: "center",
                    },
                    hr: {
                      borderColor: "#8C8D8E",
                      width: "100%",
                      borderWidth: 1,
                      height: 0,
                    },
                    b: {
                      color: "#4C5058",
                      fontSize: 14,
                      fontWeight: "bold",
                      lineHeight: 33,
                    },
                    per: {
                      color: "#fff",
                      backgroundColor: "#4C5058",
                      padding: [3, 4],
                      borderRadius: 4,
                    },
                  },
                },
                data: [
                  {
                    value: Data["0.0-1.0"]["doc_count"],
                    name: "0 to 1",
                  },
                  {
                    value: Data["1.0-3.0"]["doc_count"],
                    name: "1 to 3",
                  },
                  {
                    value: Data["3.0-7.0"]["doc_count"],
                    name: "3 to 7",
                  },
                  {
                    value: Data["7.0-14.0"]["doc_count"],
                    name: "7 to 14",
                  },
                  {
                    value: Data["14.0-30.0"]["doc_count"],
                    name: "14 to 30",
                  },
                  {
                    value: Data["30.0-180.0"]["doc_count"],
                    name: "30 to 180",
                  },
                  {
                    value: Data["180.0-360.0"]["doc_count"],
                    name: "180 to 360",
                  },
                  {
                    value: Data["360.0-*"]["doc_count"],
                    name: "360 to +∞",
                  },
                ],
              },
            ],
          });
        });

      let DeveloperIssueBehaviorRecord = echarts.init(
        document.getElementById("DeveloperIssueBehaviorRecord")
      );

      axios.get("/api/es/DeveloperIssueBehaviorRecord").then((response) => {
        var data = response["data"]["data"];
        var Option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: { top: "2%" },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "12%",
            top: "17%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: data["date"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "comment",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["comment"],
            },
            {
              name: "creater",
              type: "bar",
              stack: "Issue",
              emphasis: {
                focus: "series",
              },
              data: data["creater"],
            },
          ],
        };
        DeveloperIssueBehaviorRecord.setOption(Option);
      });

      window.onresize = function () {
        XieZuoGuanXi.resize();
        ShuJuTongJi.resize();
        IssueStateDistribution.resize();
        CurrentStatusOfHistoricalIssue.resize();
        IssueOpenDaysDistribution.resize();
        IssueDaysDistribution.resize();
        IssueFirstAttentionTimeDistribution.resize();
        DeveloperIssueBehaviorRecord.resize();
      };
    });
  },
});
</script>

<style scoped>
.portrait {
  position: absolute;
  top: 80px;
  left: 230px;
  padding: 10px;
  background-color: rgb(245, 245, 245);
}

a {
  color: #42b983;
}

.bg-purple-dark {
  background: #fcfcfd;
}

.bg-purple {
  background: #fff;
}

.bg-purple-light {
  background: #e5e9f2;
}

.firstrow {
  height: 500px;
  margin-bottom: -35px;
}

.chart-unit {
  margin-bottom: 10px;
  height: 355px;
}

.ele1,
.ele2,
.ele3 {
  height: 90%;
}

.ele4,
.ele5 {
  height: 100%;
}

.table1 {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 0px;
}

.el-progress {
  padding-top: 12px;
}

.first-tr {
  height: 5%;
}

.ShuJuTongJi {
  margin-top: -10%;
  margin-left: 0%;
}

.chart-title {
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
  color: rgb(156, 155, 155);
}

.text-biaotisecond {
  font-size: 20px;
  padding-top: 5%;
  padding-right: 57%;
  padding-bottom: 20px;
  color: rgb(156, 155, 155);
}

.tips {
  display: inline-block;
  padding-right: 20px;
  text-align: center;
}

.chart-col {
  padding-left: 5px;
  padding-right: 5px;
}

.tips a {
  font-size: 25px;
  color: #23718e;
}

.tipsright {
  float: right;
}

.tableMoKuai {
  margin-top: 40px;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 4px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.tableMoKuai2 {
  margin-top: 5px;
  text-align: left;
  margin-left: 10px;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 4px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 120px;
}

.tabledata td {
  width: 150px;
}

.tabledata tr {
  height: 30px;
}

.tabledata {
  padding-left: 10px;
}

.languagedata {
  padding-left: 10px;
  padding-right: 10px;
}

.tableMoKuai span {
  font-size: 22px;
  color: rgb(82, 151, 229);
  margin-bottom: 20px;
}

.tableMoKuai2 span {
  color: rgb(82, 151, 229);
  font-size: 22px;
  font-weight: 200;
  margin-bottom: 30px;
}
.pB_Container {
  margin: 20px 15px 20px 0px;
}

.viewbutton {
  background-color: #878ffe;
  border: none;
  color: white;
  padding: 18px 95px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin-top: 2%;
  cursor: pointer;
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

#customers {
  width: 90%;
  border-collapse: collapse;
  margin-left: 5%;
}

#customers td,
#customers th {
  font-size: 14px;
  text-align: center;
  border: 1px solid #dddddc;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 10px 7px 10px 7px;
}

#customers th {
  font-size: 16px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 4px;
}

#customers tr.alt td {
  color: #000000;
  background-color: #fdfdfb;
}

.lookarea {
  display: inline;
}

.chart-div {
  width: "100%";
  height: "100%";
}
</style>
