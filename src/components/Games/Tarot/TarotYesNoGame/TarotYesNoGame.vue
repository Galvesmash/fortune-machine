<template>
  <div
    class="tarot-yes-no-game"
  >
    <div
      class="menu"
    >
      <h1
        class="title"
      >
        Tarot Sim ou Não
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TarotYesNoGame',

    data() {
      return {
        loading: false,
      }
    },
  });
</script>

<style scoped lang="scss">
  .tarot-yes-no-game {
    max-height: calc(100% - 8em);
    max-width: calc(100% - 16em);
    padding: 4em 8em;
  }
</style>
