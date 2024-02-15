<template>
  <div
    class="tarot-three-cards-game"
  >
    <div
      class="menu"
    >
      <h1
        class="title"
      >
        Tarot 3 cartas: Situação, Orientação e Resultado
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TarotThreeCardsGame',

    data() {
      return {
        loading: false,
      }
    },
  });
</script>

<style scoped lang="scss">
  .tarot-three-cards-game {
    max-height: calc(100% - 8em);
    max-width: calc(100% - 16em);
    padding: 4em 8em;
  }
</style>
