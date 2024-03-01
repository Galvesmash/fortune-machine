<template>
  <!-- <nav>
    <router-link to="/">Fortune Machine</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view
    class="prevent-select"
  />

  <p
    class="version"
  >
    v{{ $store.getters.appVersion }}
  </p>
</template>

<style lang="scss">
  #app {
    color: #2c3e50;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
    width: 100vw;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .prevent-select {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .version {
    bottom: 10px;
    left: 10px;
    margin: 0;
    position: fixed;
    z-index: 9999;
  }
</style>
