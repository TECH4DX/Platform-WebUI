<template>
  <div id="ProcessBar" class="pB_Container">
    <div class="first" :style="error">
      {{ getProcessDesc(processValue[0]) }}
    </div>
    <div class="second" :style="cancel">
      {{ getProcessDesc(processValue[1]) }}
    </div>
    <div class="third" :style="success">
      {{ getProcessDesc(processValue[2]) }}
    </div>
    <div class="forth" :style="glsl">
      {{ getProcessDesc(processValue[3]) }}
    </div>
    <div class="last" :style="notDone">
      {{ getProcessDesc(processValue[4]) }}
    </div>
  </div>
  <div>
    <ul class="sign-coa">
      <li class="sign-a">JavaScript</li>
      <li class="sign-b">HTML</li>
      <li class="sign-c">TypeScript</li>
    </ul>
    <ul class="sign-cob">
      <li class="sign-d">CSS</li>
      <li class="sign-e">GLSL</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProcessBar",
  props: {
    processValue: {
      type: Array,
      default: function () {
        return [0];
      },
    },
  },
  data() {
    return {
      error: {
        width: this.processValue[0] + "%",
      },
      cancel: {
        width: this.processValue[1] + "%",
      },
      success: {
        width: this.processValue[2] + "%",
      },
      glsl: {
        width: this.processValue[3] + "%",
      },
      notDone: {
        width: this.processValue[4] + "%",
      },
    };
  },
  components: {},
  methods: {
    getProcessDesc(data) {
      return data == 0 ? " " : data + "%";
    },
  },
};
</script>
<style scoped>
.pB_Container {
  width: 100%;
  background-color: #f5f5f5;
  height: 20px;
  display: inline-flex;
  line-height: 20px;
  text-align: right;
  overflow: hidden;
  color: white;
  font-size: 14px;
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
}
.pB_Container div {
  float: left;
  border-radius: 8px;
}
.first {
  background-color: #ffb6c1;
  padding-right: 10px;
}
.second {
  background-color: #adadad;
  padding-right: 10px;
}
.third {
  background-color: #ffbb77;
  padding-right: 10px;
}
.forth {
  background-color: #97cbff;
  padding-right: 10px;
}
.last {
  background-color: #b8b8dc;
  padding-right: 10px;
}
.sign-coa {
  list-style: none;
  float: left;
  margin-top: 2%;
  margin-left: -12%;
}
.sign-coa li,.sign-cob li{
  margin: 10% 0;
}
.sign-cob {
  list-style: none;
  float: right;
  margin-top: 2%;
  padding-left: 100px;
}
.sign-a:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: #ffb6c1;
  vertical-align: middle;
  margin-right: 14px;
}
.sign-b:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: #ffbb77;
  vertical-align: middle;
  margin-right: 14px;
}
.sign-c:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: #b8b8dc;
  vertical-align: middle;
  margin-right: 14px;
}
.sign-d:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: #adadad;
  vertical-align: middle;
  margin-right: 14px;
}
.sign-e:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: #97cbff;
  vertical-align: middle;
  margin-right: 14px;
}
</style>