<template>
    <div>
        <score-board></score-board>
        <game-button></game-button>
    </div>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
    export default {
        components: {
            GameButton,
            ScoreBoard
        }
    }
</script>

<style lang="scss" scoped>

</style>