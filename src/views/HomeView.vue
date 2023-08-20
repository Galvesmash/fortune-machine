<template>
  <div
    class="home"
  >
    <FortuneMachine>
      <component
        :is="loadedComponent"
      />
    </FortuneMachine>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapMutations } from 'vuex';
  import FortuneGame from '@/components/FortuneGame.vue';
  import FortuneMachine from '@/components/FortuneMachine.vue';
  import GameSelection from '@/components/GameSelection.vue';
  import TarotDailyGame from '@/components/TarotDailyGame.vue';
  import TarotThreeCardsGame from '@/components/TarotThreeCardsGame.vue';
  import TarotYesNoGame from '@/components/TarotYesNoGame.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      FortuneGame,
      FortuneMachine,
      GameSelection,
      TarotDailyGame,
      TarotThreeCardsGame,
      TarotYesNoGame,
    },

    created() {
      this.setGameOptions([
        {
          image: 'crystal_ball_pixel.png',
          translate: 'Jogo da Fortuna',
          value: 'FortuneGame',
        },
        {
          image: 'tarot_pixel.png',
          translate: 'Jogo de Tarot Diário',
          value: 'TarotDailyGame',
        },
        {
          image: 'tarot_pixel.png',
          translate: 'Jogo de Tarot Sim ou Não',
          value: 'TarotYesNoGame',
        },
        {
          image: 'tarot_pixel.png',
          translate: 'Jogo de Tarot 3 cartas: Situação, Orientação e Resultado',
          value: 'TarotThreeCardsGame',
        },
      ]);
    },

    methods: {
      ...mapMutations('fortune_teller/general', [
        'setGameOptions',
      ]),
    },

    computed: {
      ...mapGetters('fortune_teller/general', {
        selectedGame: 'getGameSelection',
      }),

      loadedComponent(): string {
        return this.selectedGame || 'GameSelection';
      },
    },
  });
</script>

<style scoped lang="scss">
  .home {
    height: calc(100% - 30px);
    overflow: hidden;
    padding: 15px;
  }
</style>
