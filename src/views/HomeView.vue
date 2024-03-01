<template>
  <div
    class="home"
  >
    <FortuneMachine>
      <component
        v-bind="componentProps"
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

    data() {
      return {
        defaultComponent: 'GameSelection',
      }
    },

    created() {
      const defaultLocale = process.env.VUE_APP_DEFAULT_LOCALE;
      const rapidApiKey = process.env.VUE_APP_FORTUNE_TELLER_GAME_RAPID_API_KEY;

      this.setGameOptions([
        {
          cover_compont: 'FortuneGameCover',
          translate: 'Jogo da Fortuna',
          value: 'FortuneTellerGame',
          props: {
            locale: defaultLocale,
            rapidApiKey: rapidApiKey
          }
        },
        {
          cover_compont: 'TarotDailyGameCover',
          translate: 'Jogo de Tarot Diário',
          value: 'TarotDailyGame',
          props: {
            locale: defaultLocale,
            rapidApiKey: rapidApiKey
          }
        },
        {
          cover_compont: 'TarotYesNoGameCover',
          translate: 'Jogo de Tarot Sim ou Não',
          value: 'TarotYesNoGame',
          props: {
            locale: defaultLocale,
            rapidApiKey: rapidApiKey
          }
        },
        {
          cover_compont: 'TarotThreeCardsGameCover',
          translate: 'Jogo de Tarot 3 cartas: Situação, Orientação e Resultado',
          value: 'TarotThreeCardsGame',
          props: {
            locale: defaultLocale,
            rapidApiKey: rapidApiKey
          }
        },
      ]);
    },

    methods: {
      ...mapMutations('fortune_machine/general', [
        'setGameOptions',
      ]),
    },

    computed: {
      ...mapGetters('fortune_machine/general', {
        gameOptions: 'getGameOptions',
        selectedGame: 'getGameSelection',
      }),

      loadedComponent(): String {
        return this.selectedGame || this.defaultComponent;
      },

      componentProps(): Object {
        return this.selectedGame
          ? this.gameOptions.find((o: any) => o.value == this.selectedGame).props
          : null
      }
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
