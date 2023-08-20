<template>
  <div
    class="game-selection"
  >
    <div
      class="menu"
    >
      <h1
        class="title"
      >
        FORTUNE MACHINE
      </h1>

      <img
        v-if="gameOptions?.length"
        :src="`@/assets/images/${gameOptions[gameIndex].image}`"
        alt="Game mode image"
        class="image"
      >

      <div
        v-if="gameOptions?.length"
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

  export default defineComponent({
    name: 'GameSelection',

    data() {
      return {
        loading: false,
        loadingGame: false,
        gameIndex: 0,
        showFortuneAnswerModal: false,
      }
    },

    methods: {
      ...mapMutations('fortune_teller/general', [
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
          this.setGameSelection(this.gameOptions[this.gameIndex].value);
          this.loadingGame = false;
        }, 1000);
      },
    },

    computed: {
      ...mapGetters('fortune_teller/general', {
        gameOptions: 'getGameOptions',
      }),
    },
  });
</script>

<style scoped lang="scss">
  .game-selection {
    padding: 50px 100px;

    .menu {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-family: vcrosdmono;
      text-align: initial;
      text-transform: uppercase;

      .title {
      }

      .options {
        display: flex;
        justify-content: space-between;
        width: 50%;

        .option {
          cursor: pointer;
          display: flex;
          text-align: center;

          &:hover {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
