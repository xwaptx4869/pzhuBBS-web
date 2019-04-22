<template>
  <div class="page">
    <div class="wrapper">
      <navgationbar></navgationbar>
      <div class="content">
        <div class="slider">
          <slider></slider>
        </div>
        <div class="content-box">
          <transition name="move" mode="out-in">
            <router-view :key="$route.fullPath"></router-view>
          </transition>
        </div>
        <div class="right-box">
          <side></side>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navgationbar from "../components/Navgationbar";
import side from "../components/Side";
import slider from "../components/Slider";
export default {
  components: {
    Navgationbar,
    side,
    slider
  }
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  z-index: 999;
}
.wrapper {
  width: 100%;
  min-width: 1170px;
  position: relative;
}
.content {
  padding-top: 50px;
  width: 1170px;
  box-sizing: border-box;
  overflow-y: scroll;
  background: #f1f3f4;
  position: absolute;
  left: 50%;
  &::-webkit-scrollbar {
    display: none;
  }
  transform: translateX(-50%);
  .slider {
    float: left;
    height: 100%;
  }
  .content-box {
    width: 730px;
    display: inline-block;
  }
  .right-box {
    width: 240px;
    box-sizing: border-box;
    float: right;
  }
}
</style>
