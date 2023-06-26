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

    <ModalTemplate
      v-if="showAnswerModal"
      @click="closeCard"
    >
      <FortuneCard />
    </ModalTemplate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ModalTemplate from '@/components/ModalTemplate.vue';
import FortuneCard from '@/components/FortuneCard.vue';

export default defineComponent({
  name: 'FortuneMachine',

  components: {
    ModalTemplate,
    FortuneCard,
  },

  data() {
    return {
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
      this.getFortune().then(() => {
        this.translateText();
      }).catch((error) => {
        console.error(error);
        this.showAnswerModal = true;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fortune-machine {
  // 
}
</style>
