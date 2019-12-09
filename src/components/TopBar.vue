<template>
    <div class="top-bar-wrapper">
        <div class="top-bar">
            <div class="top-bar-logo">
                Simple auth
            </div>
            <nav id="navigation-wrapper">
                <router-link class="nav-item nav-item__link sign-in-link"
                             :to="'/login'"
                >
                    <span class="nav-item__text sign-in-text">Sign in</span>
                </router-link>
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
        font-family: $default_font
        font-size: $header_font_size

    .top-bar-wrapper
        width: 100%
        display: flex
        flex-direction: row
        justify-content: center

    .top-bar
        +header_height_min_max
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 100%
        position: relative
        top: 0
        background: $header_color

        .top-bar-logo
            @extend %header_text_and_link

    #navigation-wrapper
        display: flex
        flex-direction: column
        justify-content: center
        width: 60%
        height: 100%

        .nav-item
            @extend %header_text_and_link

        .nav-item__link
            align-self: end

        .sign-in-link
            margin-right: 10px

            .sign-in-text
                padding: 5px
                border: 1px solid $header_color
                border-radius: 5px
                background: $main_color

                &:hover
                    transition-duration: 0.4s
                    border-color: #ffff

            &, &:hover, &:active, &:focus
                text-decoration: none


</style>