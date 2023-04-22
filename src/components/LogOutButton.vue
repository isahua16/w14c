<template>
    <div>
        <button @click="handle_logout">Log out</button>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
    export default {
        methods: {
            handle_logout: function () {
                cookies.remove(`wins`);
                cookies.remove(`losses`);
                cookies.remove(`token`);
                this.$router.push(`/`);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>