<template>
  <div
    class="fortune-machine"
  >
    <a
      @click="runMachine"
    >
      <img
        alt="Fortune Machine image"
        src="@/assets/images/cartomante.png"
      >
    </a>

    <LoadingFortuneCard
      v-if="loading"
    />

    <ModalTemplate
      v-else-if="showAnswerModal"
      @click="closeCard"
    >
      <FortuneCard />
    </ModalTemplate>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import FortuneCard from '@/components/FortuneCard.vue';
  import LoadingFortuneCard from '@/components/LoadingFortuneCard.vue';
  import ModalTemplate from '@/components/ModalTemplate.vue';

  export default defineComponent({
    name: 'FortuneMachine',

    components: {
      FortuneCard,
      LoadingFortuneCard,
      ModalTemplate,
    },

    data() {
      return {
        loading: false,
        showAnswerModal: false,
      }
    },

    methods: {
      ...mapActions('fortune_teller/fortune', [
        'getFortune',
      ]),

      ...mapActions('fortune_teller/general', [
        'translate',
      ]),

      ...mapMutations('fortune_teller/fortune', [
        'setFortuneError',
        'setFortuneTranslated',
      ]),

      runMachine() {
        if (this.loading) return;

        this.loading = true;

        this.getFortune().then(() => {
          this.translateText();
        }).catch((error) => {
          console.error(error);
          this.showAnswerModal = true;
          this.loading = false;
        });
      },

      translateText() {
        let payload = {
          text: this.fortune,
          target: 'pt-br'
        };

        this.translate(payload).then((response) => {
          this.setFortuneTranslated(response);
        }).catch((error) => {
          console.error(error);
          this.setFortuneError();
        }).finally(() => {
          this.showAnswerModal = true;
          this.loading = false;
        });
      },

      closeCard() {
        this.showAnswerModal = false;
      },
    },

    computed: {
      ...mapGetters('fortune_teller/fortune', {
        fortune: 'getFortune',
      }),
    },
  });
</script>

<style scoped lang="scss">
  .fortune-machine {
    // 
  }
</style>
