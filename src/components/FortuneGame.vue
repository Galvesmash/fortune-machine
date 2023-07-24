<template>
  <div
    class="fortune-game"
  >
    <div
      class="menu"
    >
      <h1
        class="title"
      >
        Jogo do Futuro
      </h1>

      <h3
        class="subtitle"
      >
        Escolha um tópico para prever o futuro.
      </h3>

      <a
        v-for="(option, index) in fortuneOptions"
        :key="index"
        @click="handleFortune(option.value)"
        class="option"
      >
        {{ option.translate }}
      </a> 
    </div>
      
    <LoadingFortuneCard
      v-if="loadingFortune"
    />

    <ModalTemplate
      v-if="!loadingFortune && showFortuneAnswerModal"
      @click="closeCard"
    >
      <FortuneCard />
    </ModalTemplate>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import LoadingFortuneCard from '@/components/LoadingFortuneCard.vue';
  import FortuneCard from '@/components/FortuneCard.vue';
  import ModalTemplate from '@/components/ModalTemplate.vue';

  export default defineComponent({
    name: 'FortuneGame',

    components: {
      LoadingFortuneCard,
      FortuneCard,
      ModalTemplate,
    },

    data() {
      return {
        loadingFortune: false,
        showFortuneAnswerModal: false,
        fortuneOptions: [
          {
            translate: 'Amor',
            value: 'love',
          },
          {
            translate: 'Amigos',
            value: 'friends',
          },
          {
            translate: 'Dinheiro',
            value: 'money',
          },
        ]
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

      handleFortune(theme = null) {
        if (this.loadingFortune) return;

        this.loadingFortune = true;

        /* TODO: Change later to validate theme and get correct fortune */
        this.getFortune().then(() => {
          this.translateText();
        }).catch((error) => {
          console.error(error);
          this.showFortuneAnswerModal = true;
          this.loadingFortune = false;
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
          // this.setFortuneError();
          this.setFortuneTranslated('');
        }).finally(() => {
          this.showFortuneAnswerModal = true;
          this.loadingFortune = false;
        });
      },

      closeCard() {
        this.showFortuneAnswerModal = false;
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
  .fortune-game {
    padding: 50px 100px;

    .menu {
      font-family: vcrosdmono;
      text-align: initial;
      text-transform: uppercase;

      .title {
      }

      .subtitle {
      }

      .option {
        display: flex;

        &:hover::before {
          content: "> ";
          // }
        }
      }

    }
  }
</style>
