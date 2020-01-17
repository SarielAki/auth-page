<template>
    <div class="auth-wrapper">
        <div class="auth-body">
            <form class="auth" name="auth">
                    <span class="form-item form-item--head-text">
                        Registration
                    </span>
                <div class="form-item form-item--login">
                    <label for="auth-login"/>
                    <input class="input" type="text" id="auth-login" placeholder="Login"
                           v-model="regData.login"
                    />
                </div>
                <div class="form-item form-item--password">
                    <label for="auth-password"/>
                    <input class="input" type="password" id="auth-password" placeholder="Password"
                           v-model="regData.password"
                    />
                </div>
                <div class="form-item form-item--password-repeat">
                    <label for="auth-password-repeat"/>
                    <input class="input" type="password" id="auth-password-repeat" placeholder="Repeat password"
                           v-model="regData.password_repeat"
                    />
                </div>
                <input class="auth-button" value="Sign up" type="submit"
                       :disabled="!isValid"
                >
                <router-link class="form-item form-item--bottom-link"
                             :to="'/login'"
                >
                    <span class="form-item form-item--bottom-text">To login</span>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                regData: {
                    login: '',
                    password: '',
                    password_repeat: ''
                }
            }
        },
        computed: {
            passwordMatch: function () {
                return this.regData.password === this.regData.password_repeat
            },
            isValid: function () {
                return !!(this.passwordMatch && this.regData.password && this.regData.login)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../auth_style"
</style>