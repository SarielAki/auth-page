<template>
    <div class="auth-wrapper">
        <div class="auth-body">
            <form class="auth" name="auth"
                  @submit.prevent
                  @keyup.enter="login"
            >
                    <span class="form-item form-item--head-text">
                        Login
                    </span>
                <div class="form-item form-item--login">
                    <label for="auth-login"/>
                    <input class="input" type="text" id="auth-login" placeholder="Login"
                           v-model="loginData.username"
                    />
                </div>
                <div class="form-item form-item--password">
                    <label for="auth-password"/>
                    <input class="input" type="password" id="auth-password" placeholder="Password"
                           v-model="loginData.password"
                    />
                </div>
                <input class="auth-button" value="Sign in" type="submit"
                       @mousedown="login"
                       :disabled="!inputFilled"
                >
                <router-link class="form-item form-item--bottom-link"
                        :to="'/registration'"
                >
                    <span class="form-item form-item--bottom-text">To registration</span>
                </router-link>
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
                    username: '',
                    password: ''
                }
            }
        },
        computed: {
            inputFilled: function () {
                return !!this.loginData.password && this.loginData.username
            }
        },
        methods: {
            login: function () {
                this.$store.dispatch('authStore/login', this.loginData)
            }
        }

    }
</script>

<style lang="sass" scoped>
    @import "../../auth_style"
</style>