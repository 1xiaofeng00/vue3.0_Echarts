<template>
  <div>
    <h2>库存统计图</h2>
    <div class="chart" id="myEchartsFour">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");

    let data = reactive({});

    async function getState() {
      data = await $http({ url: "/four/data" });
    }

    onMounted(() => {
      getState().then(() => {
        console.log("柱状图4", data);

        let myChart = $echarts.init(document.getElementById("myEchartsFour"));
        myChart.setOption({
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: data.data.chartData.chartData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          legend: {},
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.chartData.chartData.num.Clothes,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.chartData.chartData.num.digit,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.chartData.chartData.num.Electrical,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.chartData.chartData.num.gear,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.chartData.chartData.num.Chemicals,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
          ],
        });
      });
    });
    return {
      getState,
      data,
    };
  },
};
</script>

<style>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
.chart {
  height: 4.5rem;
}
</style>
