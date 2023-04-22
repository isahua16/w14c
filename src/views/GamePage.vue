<template>
    <div>
        <score-board></score-board>
        <game-button></game-button>
        <log-out-button></log-out-button>
    </div>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import LogOutButton from '@/components/LogOutButton.vue'
import cookies from 'vue-cookies'
    export default {
        components: {
            GameButton,
            ScoreBoard,
            LogOutButton
        },
        mounted () {
            if(cookies.get(`token`) == null) {
                this.$router.push(`/`);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>