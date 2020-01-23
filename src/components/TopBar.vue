<template>
    <div class="top-bar-wrapper">
        <div class="top-bar">
            <router-link class="top-bar-logo"
                 :to="'/'"
            >
                Auth
            </router-link>
            <nav id="navigation-wrapper">
                <div class="nav-item nav-item__link logout-link"
                     v-if="$store.getters['authStore/isAuthorized']"
                     @click="logout"
                >
                    <span class="nav-item__text sign-in-text">Logout</span>
                </div>
                <router-link class="nav-item nav-item__link sign-in-link"
                             v-if="!$store.getters['authStore/isAuthorized']"
                             :to="'/login'"
                >
                    <span class="nav-item__text sign-in-text">Sign in</span>
                </router-link>
                <router-link class="nav-item nav-item__link sign-up-link"
                             v-if="!$store.getters['authStore/isAuthorized']"
                             :to="'/registration'"
                >
                    <span class="nav-item__text sign-up-text">Sign up</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        methods: {
            logout: function () {
                this.$store.dispatch('authStore/logout')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../variables"

    %header_text_and_link
        +deselect
        text-decoration: none
        outline: none
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
        background: $main_dark_color

        .top-bar-logo
            margin-left: 5px
            @extend %header_text_and_link

    #navigation-wrapper
        display: flex
        flex-direction: row
        align-items: center
        justify-content: flex-end
        width: 60%
        height: 100%

        .nav-item
            @extend %header_text_and_link
            margin-right: 10px

        .nav-item__link
            text-decoration: none
            outline: none

        .nav-item__text
            padding: 5px
            border: 1px solid $main_dark_color
            border-radius: 5px
            background: $main_color

            &:hover
                transition-duration: 0.4s
                border-color: #ffff

        &, &:hover, &:active, &:focus
            outline: none
            text-decoration: none


</style>