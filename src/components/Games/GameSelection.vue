<template>
  <div
    class="game-selection"
  >
    <div
      v-if="gameOptions?.length"
      class="menu"
    >
      <div
        class="cover"
      >
        <component
          :is="gameOptions[gameIndex].cover_compont"
        />
      </div>

      <div
        class="options"
      >
        <a
          @click="previousGame"
          class="option"
        >
          {{'<'}}
        </a>

        <a
          @click="handleSelectGame"
          class="option"
        >
          {{ gameOptions[gameIndex].translate }}
        </a>

        <a
          @click="nextGame"
          class="option"
        >
          {{'>'}}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapMutations } from 'vuex';
  import FortuneGameCover from '@/components/Games/Fortune/FortuneGameCover.vue';
  import TarotDailyGameCover from '@/components/Games/Tarot/TarotDailyGame/TarotDailyGameCover.vue';
  import TarotThreeCardsGameCover from '@/components/Games/Tarot/TarotThreeCardsGame/TarotThreeCardsGameCover.vue';
  import TarotYesNoGameCover from '@/components/Games/Tarot/TarotYesNoGame/TarotYesNoGameCover.vue';

  export default defineComponent({
    name: 'GameSelection',

    components: {
      FortuneGameCover,
      TarotDailyGameCover,
      TarotThreeCardsGameCover,
      TarotYesNoGameCover,
    },

    data() {
      return {
        loading: false,
        loadingGame: false,
        gameIndex: 0,
        showFortuneAnswerModal: false,
      }
    },

    methods: {
      ...mapMutations('fortune_machine/general', [
        'setGameSelection',
      ]),

      nextGame() {
        if (this.gameIndex == this.gameOptions.length-1) {
          this.gameIndex = 0;
        } else {
          this.gameIndex++;
        }
      },

      previousGame() {
        if (this.gameIndex == 0) {
          this.gameIndex = this.gameOptions.length-1;
        } else {
          this.gameIndex--;
        }
      },

      handleSelectGame() {
        if (this.loadingGame) return;
        
        this.loadingGame = true;

        setTimeout(() => {
          console.log(this);
          this.setGameSelection(this.gameOptions[this.gameIndex].value);
          this.loadingGame = false;
        }, 1000);
      },
    },

    computed: {
      ...mapGetters('fortune_machine/general', {
        gameOptions: 'getGameOptions',
      }),
    },
  });
</script>

<style scoped lang="scss">
  $text-color-light: #140C1C;
  $text-color-dark: #DEEED6;

  .game-selection {
    height: calc(100% - 8em);
    max-height: calc(100% - 8em);
    max-width: calc(100% - 16em);
    padding: 4em 8em;
    width: calc(100% - 16em);

    .menu {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-family: vcrosdmono;
      height: 100%;
      max-height: 100%;
      text-align: initial;
      text-transform: uppercase;

      .cover {
        height: calc(100% - 30px);
        width: 100%;
      }

      .title {
      }

      .options {
        align-items: center;
        display: flex;
        height: 20px;
        justify-content: space-between;
        max-width: 100%;
        min-height: 20px;
        min-width: 60%;
        padding-top: 10px;
        width: auto;

        .option {
          // color: $text-color-light;
          color: $text-color-dark;
          cursor: pointer;
          display: flex;
          font-weight: bolder;
          text-align: center;

          &:first-child {
            padding-right: 16px;
          }

          &:hover {
            font-weight: bold;
          }

          &:last-child {
            padding-left: 16px;
          }

        }
      }
    }
  }
</style>
