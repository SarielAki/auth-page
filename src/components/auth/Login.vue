<template>
    <div class="auth-wrapper">
        <div class="auth-body">
            <form class="auth" name="auth">
                    <span class="form-item form-item--head-text">
                        Login simple auth
                    </span>
                <div class="form-item form-item--login">
                    <label for="auth-login"></label>
                    <input class="input" type="text" id="auth-login" placeholder="Login"
                           v-model="loginData.login"
                    />
                </div>
                <div class="form-item form-item--password">
                    <label for="auth-password"></label>
                    <input class="input" type="password" id="auth-password" placeholder="Password"
                           v-model="loginData.password"
                    />
                </div>
                <input class="auth--button" value="Sign in" type="submit"
                       :disabled="!inputFilled"
                >
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuthLogin",
        data() {
            return {
                loginData: {
                    login: '',
                    password: ''
                }
            }
        },
        computed: {
            inputFilled: function () {
                return !!this.loginData.password && this.loginData.login
            }
        }

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
            user-select: none
            display: flex
            flex-direction: column
            font-family: $default_font
            justify-content: center
            align-items: center
            height: 300px
            width: 400px
            border-radius: $form_border_radius
            background: $main_light_color

            .auth
                display: block
                width: 250px
                height: 250px

                .form-item
                    display: block
                    position: relative
                    width: 100%
                    margin-bottom: 10px

                    .input
                        box-sizing: border-box
                        display: block
                        padding-left: 10px
                        position: relative
                        height: 40px
                        width: 100%
                        border-radius: $form_border_radius
                        border: 2px solid $main_color

                        &:focus
                            border-color: $main_dark_color
                            transition: all .5s ease

                .auth--button
                    font-size: 21px
                    display: block
                    position: relative
                    width: 100%
                    height: 40px
                    margin-top: 20px
                    border: none
                    border-radius: $form_border_radius
                    color: #000000
                    background: $main_color

                    &:hover
                        background: $main_dark_color
                        color: #ffffff
                        transition: all .5s ease

                    &, &:hover, &:active, &:focus
                        outline: none
                        text-decoration: none

                    &:disabled
                        color: black
                        background: #e8e8e7


                .form-item--head-text
                    margin-bottom: 10px
                    font-size: 1.8em
                    text-align: center


</style>