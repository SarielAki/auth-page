<template>
    <div class="top-bar-wrapper">
        <div class="top-bar">
            <nav id="navigation-wrapper">
                <span class="nav-item__text">Sign in</span>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style lang="sass" scoped>
    @import "../../variables"

    .top-bar-wrapper
        width: 100%
        display: flex
        flex-direction: row
        justify-content: center

    .top-bar
        position: relative
        top: 0
        background: $header_color

</style>