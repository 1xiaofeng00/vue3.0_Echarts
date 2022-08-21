<template>
  <div class="map" id="map"></div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, inject } from "vue";
export default {
  setup() {
    let $echarts = inject("echarts");
    let mapData = reactive({});
    async function getState() {
      mapData = await axios.get("/map/data");
    }

    onMounted(() => {
      console.log("aa", mapData);
      getState().then(() => {
        console.log("map", mapData);
        $echarts.registerMap("china", mapData.data.chinaData);
        let myChart = $echarts.init(document.getElementById("map"));
        myChart.setOption({
          geo: {
            map: "china",
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: "#00ffff",
              shadowColor: "rgba(230,130,70,0.5)",
              shadowBlur: 30,
              emphasis: {
                focus: "self",
              },
            },
          },

          //   散点图数据

          tooltip: {
            trigger: "item",
          },
          title: {
            text: "城市销量",
            left: "45%",
            textStyle: {
              color: "#fff",
              fontSize: 20,
              textShadowBlur: 10,
              textShadowColor: "#33ffff",
            },
          },
          visualMap: {
            type: "continuous",
            min: 100,
            max: 5000,
            calculable: true,
            inRange: {
              color: ["#50a3ba", "#eac736", "#d94e5d"],
            },
            textStyle: {
              color: "#fff",
            },
          },
          series: [
            {
              type: "scatter",
              itemStyle: {
                color: "red",
              },
              coordinateSystem: "geo",
              data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "深圳", value: [114.07, 22.62, 2461] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "郑州", value: [113.62, 34.75, 3421] },
              ],
            },
          ],
        });
      });
    });
    return {
      getState,
      mapData,
    };
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
