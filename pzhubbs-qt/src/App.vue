<template>
  <div id="app">
    <div class="wrapper">
        <nav-bar></nav-bar>
      <div class="content">
        <div class="slider">
          <slider></slider>
        </div>
        <div class="content-box">
            <router-view/>
        </div>
        <div class="right-box">
          <side></side>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "./components/Navgationbar";
import Slider from "./components/Slider";
import Side from "./components/Side";
import Hello from "./components/Holloe";
export default {
  name: "App",
  components: {
    navBar,
    Slider,
    Side,
    Hello
  }
};
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
.wrapper{
  width: 100%;
  height: 100%;
  min-width: 1170px;
  position: relative;
}
  .content {
  padding-top: 50px;
  width: 1170px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  background: #f1f3f4;
  position: absolute;
  left: 50%;
  &::-webkit-scrollbar {
        display: none;
    }
  transform: translateX(-50%);
  .slider{
    float: left;
  }
  .content-box{
    width: 730px;
    display: inline-block;
  }
  .right-box{
    width: 240px;
    box-sizing: border-box;
    float: right;
  }
}
</style>

