<template>
    <div id="app">
        <top-bar></top-bar>
        <transition name="fade" appear>
            <router-view class="page-content"></router-view>
        </transition>
    </div>
</template>

<script>

    import TopBar from "@/components/TopBar";

    export default {
        name: 'app',
        components: {TopBar},
    }
</script>

<style lang="sass">
    @import "~normalize.css"
    @import "variables"

    html, body, #app
        background: #ffff
        position: relative
        display: block
        width: 100%
        height: 100%
        top: 0

    .page-content
        z-index: 0
        display: flex
        flex-direction: row
        justify-content: center

    .fade-enter-active
        transition: opacity .5s

    .fade-enter
        opacity: 0
</style>
