<template>
    <div>
        <score-board></score-board>
        <game-button></game-button>
    </div>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import cookies from 'vue-cookies'
    export default {
        components: {
            GameButton,
            ScoreBoard
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