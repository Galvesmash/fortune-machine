<template>
  <div class="home">
    <FortuneMachine />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FortuneMachine from '@/components/FortuneMachine.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    FortuneMachine,
  },
});
</script>
