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
  import FortuneMachine from '@/components/General/FortuneMachine.vue';
  import GameSelection from '@/components/Games/GameSelection.vue';
  import FortuneTellerGame from 'fortune-teller-game';
  import TarotDailyGame from '@/components/Games/Tarot/TarotDailyGame/TarotDailyGame.vue';
  import TarotThreeCardsGame from '@/components/Games/Tarot/TarotThreeCardsGame/TarotThreeCardsGame.vue';
  import TarotYesNoGame from '@/components/Games/Tarot/TarotYesNoGame/TarotYesNoGame.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      FortuneMachine,
      GameSelection,
      FortuneTellerGame,
      TarotDailyGame,
      TarotThreeCardsGame,
      TarotYesNoGame,
    },

    created() {
      this.setGameOptions([
        {
          cover_compont: 'FortuneGameCover',
          translate: 'Jogo da Fortuna',
          value: 'FortuneTellerGame',
          // value: 'fortune-teller-game',
        },
        {
          cover_compont: 'TarotDailyGameCover',
          translate: 'Jogo de Tarot Diário',
          value: 'TarotDailyGame',
        },
        {
          cover_compont: 'TarotYesNoGameCover',
          translate: 'Jogo de Tarot Sim ou Não',
          value: 'TarotYesNoGame',
        },
        {
          cover_compont: 'TarotThreeCardsGameCover',
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
