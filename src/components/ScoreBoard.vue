<template>
    <div>
        <h3>Wins: {{wins}}</h3>
        <h3>Losses: {{losses}}</h3>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
    export default {
        data() {
            return {
                wins: 0,
                losses: 0
            }
        },
        mounted () {
            if(cookies.get(`losses`) !== null) {
                this.losses = JSON.parse(cookies.get(`losses`));
            } else {
                this.losses = 0;
            }
            if (cookies.get(`wins`) !== null) {
                this.wins = JSON.parse(cookies.get(`wins`));
            } else {
                this.wins = 0;
            }

            this.$root.$on(`player_lose`, () => {
                this.losses++
                cookies.set(`losses`, JSON.stringify(this.losses));});
            this.$root.$on(`player_win`, () => {
                this.wins++
                cookies.set(`wins`, JSON.stringify(this.wins));});
        },
    }
</script>

<style lang="scss" scoped>

</style>