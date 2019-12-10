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
    @import "../../auth_style"
</style>