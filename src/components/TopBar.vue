<template>
    <div class="top-bar-wrapper">
        <div class="top-bar">
            <div class="top-bar-logo">
                Simple auth
            </div>
            <nav id="navigation-wrapper">
                <a class="nav-item nav-item__link sign-in-link">
                    <span class="nav-item__text">Sign in</span>
                </a>
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
    @import "../variables"

    %header_text_and_link
        +deselect
        cursor: pointer
        color: $header_text_color
        font-size: $header_font_size

    .top-bar-wrapper
        width: 100%
        display: flex
        flex-direction: row
        justify-content: center

    .top-bar
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 100%
        height: $nav_height
        position: relative
        top: 0
        background: $header_color

        .top-bar-logo
            @extend %header_text_and_link

    #navigation-wrapper

        .nav-item
            position: relative
            display: flex
            flex-direction: row
            align-items: center
            height: 100%
            @extend %header_text_and_link

            &, &:hover, &:active, &:focus
                text-decoration: none

            .nav-item__link
                transition-duration: 0.2s
            &:hover
                color: $main_light_color

            .sign-in-link
                align-self: end

</style>