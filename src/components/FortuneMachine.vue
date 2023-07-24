<template>
  <div
    :class="{ 'zoom': zoom.animation }"
    class="fortune-machine"
  >
    <a
      @click="zoomMachine"
      class="component"
    >
      <img
        alt="Fortune machine image"
        class="image"
        src="@/assets/images/fortune-machine.svg"
      >

      <div
        class="monitor"
      >
        <div
          class="monitor-background"
        >
          <div
            v-if="zoom.animation"
            :class="{ 'on': zoom.animation }"
            class="monitor-content"
          >
            <slot />
          </div>
        </div>

        <img
          alt="Fortune machine monitor border image"
          class="monitor-border-image"
          src="@/assets/images/fortune-machine-monitor.svg"
        >
      </div>
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'FortuneMachine',

    data() {
      return {
        zoom: {
          animation: false,
          timing: 1200,
        },
        machine: {
          started: false,
          timing: 1000,
        },
      }
    },

    methods: {
      zoomMachine() {
        if (this.zoom.animation) return;

        this.zoom.animation = true;
        setTimeout(() => {
          this.startMachine();
        }, this.zoom.timing);
      },

      startMachine() {
        if (this.machine.started) return;

        this.machine.started = true;
      }
    },
  });
</script>

<style scoped lang="scss">
  $monitor-off-color: #272727;
  $monitor-on-color: #F7F7F7;

  .fortune-machine {
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    top: 0;

    &.zoom {
      animation-duration: 1.2s;
      animation-name: fortune-machine-zoom;
      animation-timing-function: ease-in-out;
      height: 380%;
      top: -66%;
    }

    .component {
      height: 100%;
      position: relative;

      .image {
        display: flex;
        height: 100%;
      }

      .monitor {
        display: flex;
        height: 26%;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        top: 17.5%;
        width: 100%;

        .monitor-background {
          background-color: $monitor-off-color;
          bottom: 0;
          left: 0;
          padding: 2.5% 0;
          margin: 0 15%;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;

          .monitor-content {
            height: 100%;
            opacity: 0;
            position: relative;
            width: 100%;

            &.on {
              animation-duration: 1s;
              animation-name: monitor-turn-on;
              animation-timing-function: ease-in-out;
              background-color: $monitor-on-color;
              opacity: 1;
            }
          }
        }

        .monitor-border-image {
          margin: 0 auto;
          pointer-events: none;
          z-index: 2;
        }
      }
    }
  }

  @keyframes fortune-machine-zoom {
    from { height: 100%; top: 0; }
    to { height: 380%; top: -66%; }
  }

  @keyframes monitor-turn-on {
    0% { transform: scale(0, 0); opacity: 0; }
    5%, 35% { transform: scale(00, 0.01); opacity: 0.3; }
    55% { transform: scale(1, 0.02); opacity: 0.8; }
    85% { transform: scale(1, 1); opacity: 1; }
    100% { opacity: 1; }
  }
</style>
