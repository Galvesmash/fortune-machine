<template>
  <div
    class="home"
  >
    <FortuneMachine>
      <FortuneGame />
    </FortuneMachine>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import FortuneMachine from '@/components/FortuneMachine.vue';
  import FortuneGame from '@/components/FortuneGame.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      FortuneMachine,
      FortuneGame,
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
