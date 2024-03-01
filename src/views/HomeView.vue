<template>
  <div
    class="home"
  >
    <FortuneMachine>
        <!-- :default-locale="defaultLocale"
        :fallback-locale="fallbackLocale"
        :rapid-api-key="rapidApiKey" -->
      <component
        v-bind="loadedComponent.props"
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
        defaultLocale: '',
        fallbackLocale: '',
        rapidApiKey: ''
      }
    },

    created() {
      this.defaultLocale = process.env.VUE_APP_DEFAULT_LOCALE;
      this.fallbackLocale = process.env.VUE_APP_FALLBACK_LOCALE;
      this.rapidApiKey = process.env.VUE_APP_FORTUNE_TELLER_GAME_RAPID_API_KEY;

      this.setGameOptions([
        {
          cover_compont: 'FortuneGameCover',
          translate: 'Jogo da Fortuna',
          value: 'FortuneTellerGame',
          props: function() {
            return {
              'default-locale': this.defaultLocale,
              'fallback-locale': this.fallbackLocale,
              'rapid-api-key': this.rapidApiKey
            }
          }
        },
        {
          cover_compont: 'TarotDailyGameCover',
          translate: 'Jogo de Tarot Diário',
          value: 'TarotDailyGame',
          props: function() {
            return {
              ':default-locale': this.defaultLocale,
              ':fallback-locale': this.fallbackLocale
            }
          }
        },
        {
          cover_compont: 'TarotYesNoGameCover',
          translate: 'Jogo de Tarot Sim ou Não',
          value: 'TarotYesNoGame',
          props: function() {
            return {
              ':default-locale': this.defaultLocale,
              ':fallback-locale': this.fallbackLocale
            }
          }
        },
        {
          cover_compont: 'TarotThreeCardsGameCover',
          translate: 'Jogo de Tarot 3 cartas: Situação, Orientação e Resultado',
          value: 'TarotThreeCardsGame',
          props: function() {
            return {
              ':default-locale': this.defaultLocale,
              ':fallback-locale': this.fallbackLocale
            }
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
