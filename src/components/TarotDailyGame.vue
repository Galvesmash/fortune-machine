<template>
  <div
    class="tarot-daily-game"
  >
    <div
      class="menu"
    >
      <h1
        class="title"
      >
        Tarot Diário
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TarotDailyGame',

    data() {
      return {
        loading: false,
      }
    },
  });
</script>

<style scoped lang="scss">
  .tarot-daily-game {
    padding: 50px 100px;
  }
</style>
