<template>
    <div class="auth-wrapper">
        <div class="auth-body">
            <form class="auth" name="auth">
                <div class="form-item form-item--login">
                    <label for="auth-login"></label>
                    <input class="input" type="text" id="auth-login" placeholder="Login"/>
                </div>
                <div class="form-item form-item--password">
                    <label for="auth-password"></label>
                    <input class="input" type="password" id="auth-password" placeholder="password"/>
                </div>

                <input class="button auth-button" value="Sign in" type="submit">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuthLogin"
    }
</script>

<style scoped>

</style>