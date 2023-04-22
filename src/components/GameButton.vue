<template>
    <div>
        <button ref="game_button" @click="handle_click">Click me</button>
        <h4>{{message}}</h4>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                wins: 0,
                losses: 0,
                message: undefined
            }
        },
        methods: {
            handle_click: function (){
                this.$refs[`game_button`].disabled = true;
                this.message = `Loading...`;
                axios.request(
                    {
                        url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`
                    }
                ).then((res) => {
                    this.$refs[`game_button`].disabled = false;
                    this.message = undefined;
                    let num = res.data[0];
                    if(num >= 50) {
                        this.wins++;
                        this.$root.$emit(`player_win`, this.wins);
                    } else {
                        this.$refs[`game_button`].disabled = false;
                        this.losses++;
                        this.$root.$emit(`player_lose`, this.losses);
                    }
                }).catch(() => {
                    this.$refs[`game_button`].disabled = false;
                    this.message = `Something went wrong, try again`;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>