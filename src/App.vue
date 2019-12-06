<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'app',
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
