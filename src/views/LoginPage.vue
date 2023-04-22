<template>
    <div>
        <input type="text" class="user_email" ref="user_email">
        <input type="password" class="user_password" ref="user_password">
        <button @click="handle_login">Log in</button>
        <h4>{{message}}</h4>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        data() {
            return {
                message: undefined,
            }
        },
        mounted () {
            if(cookies.get(`token`) !== null) {
                this.$router.push(`/game`);
            }
        },
        methods: {
           handle_login: function () {
            this.message = undefined;
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
               ).then((res) => {
                cookies.set(`token`, res.data.token);
                this.$router.push(`/game`);

               }).catch(() => {
                this.message = `Authentication failed. Try again.`

               });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>