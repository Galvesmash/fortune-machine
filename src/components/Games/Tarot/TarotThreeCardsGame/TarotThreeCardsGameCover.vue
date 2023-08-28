<template>
  <div
    class="tarot-three-cards-game-cover"
  >
    <img
      alt="Tarot Daily Game Cover"
      class="image"
      src="@/assets/images/tarot_pixel.png"
    >
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TarotThreeCardsGameCover',

    data() {
      return {
        loading: false,
      }
    },
  });
</script>

<style scoped lang="scss">
  .tarot-three-cards-game-cover {
    height: 100%;
    width: 100%;

    .image {
      height: inherit;
      width: 100%;
    }
  }
</style>
