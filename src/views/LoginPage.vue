<template>
    <div>
        <input type="text" class="user_email" ref="user_email">
        <input type="password" class="user_password" ref="user_password">
        <button @click="handle_login">Log in</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        methods: {
           handle_login: function () {
            let user_email = this.$refs[`user_email`].value;
            let user_password = this.$refs[`user_password`].value;
               axios.request(
                {
                    url: `https://reqres.in/api/login`,
                    method: `POST`,
                    data: {
                        email: user_email,
                        password: user_password
                    }
                }
               ).then(() => {

               }).catch(() => {
                
               });
               cookies;
               }
        }
    }
</script>

<style lang="scss" scoped>

</style>