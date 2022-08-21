<template>
  <div>
    <header>
      <h1>大数据可视化</h1>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <ItemPage>
          <ItemOne />
        </ItemPage>
        <ItemPage>
          <ItemTwo />
        </ItemPage>
      </section>
      <!-- 中容器 -->
      <section class="itemCenter">
        <MapPage />
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <ItemPage>
          <ItemThree />
        </ItemPage>
        <ItemPage>
          <ItemFour />
        </ItemPage>
      </section>
    </section>
  </div>
</template>

<script>
import ItemPage from "@/components/itemPage.vue";

import ItemOne from "@/components/itemOne.vue";
import ItemTwo from "@/components/itemTwo.vue";
import ItemThree from "@/components/itemThree.vue";
import ItemFour from "@/components/itemFour.vue";
import MapPage from "@/components/mapPage.vue";

import { inject } from "vue";
export default {
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    MapPage,
  },

  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");
    console.log($echarts);
    console.log($http);
  },
};
</script>

<style lang="less">
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  // 标题的文字样式
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}

// 大容器的样式
.container {
  // 最大最小的宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  // background-color: gray;
  display: flex;
  // 设置左右在页面的份数
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    height: 10.5rpx;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>
