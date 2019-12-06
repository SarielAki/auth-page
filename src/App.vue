<template>
  <div id="app">
    <top-bar></top-bar>
  </div>
</template>

<script>

import TopBar from "@/components/main_page/TopBar";
export default {
  name: 'app',
  components: {TopBar},
}
</script>

<style lang="sass">
  @import "~normalize.css"
  @import "variables"

  html, body, #app
    background: $main_light_color
    position: relative
    display: block
    width: 100%
    height: 100%
    top: 0
</style>
