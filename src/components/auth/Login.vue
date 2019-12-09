<template>
    <div class="auth-wrapper">
        <div class="auth-body">
                <form class="auth" name="auth">
                    <span class="form-item form-item--head-text">
                        Sign in
                    </span>
                    <div class="form-item form-item--login">
                        <label for="auth-login"></label>
                        <input class="input" type="text" id="auth-login" placeholder="Login"/>
                    </div>
                    <div class="form-item form-item--password">
                        <label for="auth-password"></label>
                        <input class="input" type="password" id="auth-password" placeholder="Password"/>
                    </div>
                    <input class="input form-item form-item--button" value="Sign in" type="submit">
                </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuthLogin"
    }
</script>

<style lang="sass" scoped>
    @import "../../variables"

    .auth-wrapper
        display: flex
        flex-direction: column
        align-items: center
        width: 100%
        height: 80%
        max-height: 500px
        min-height: 300px

        .auth-body
            display: flex
            flex-direction: column
            font-family: $default_font
            justify-content: center
            align-items: center
            height: 300px
            min-width: 400px
            max-width: 600px
            border-radius: $form_border_radius
            background: $main_light_color

            .auth
                display: block

                .form-item
                    margin-bottom: 10px
                    width: 100%
                    display: block
                    position: relative

                .form-item--head-text
                    font-size: 1.8em
                    text-align: center

                .form-item--button
                    margin-top: 20px

                .input
                    font-size: 1em
                    padding: 10px
                    border-radius: $form_border_radius
                    border: 2px solid $main_color
                    &:focus
                        border-color: $main_dark_color
                        transition: all .5s ease



</style>