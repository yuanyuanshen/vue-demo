<template>
  <div id="content">
    <router-view/>
    <svg-icon></svg-icon>
  </div>
</template>

<script>

import svgIcon from "./components/common/Svg"

export default {
  name: 'App',
  components: {
    svgIcon
  }
}
</script>

<style lang="scss">
@import "./style/common";

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
