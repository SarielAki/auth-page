<template>
    <div id="app">
        <top-bar></top-bar>
        <transition name="fade">
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

    %appear_leave_animation_active
        transition: opacity .5s

    %appear_leave_animation
        opacity: 0

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
        @extend %appear_leave_animation_active

    .fade-enter
        @extend %appear_leave_animation

    .fade-leave-active
        @extend %appear_leave_animation_active

    .fade-leave
        @extend %appear_leave_animation
</style>
