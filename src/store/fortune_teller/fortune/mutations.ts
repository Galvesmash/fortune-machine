export default {
  setFortune(state: any, payload: any) {
    state.fortune = payload;
    state.fortune_error = false;
  },

  setFortuneError(state: any) {
    state.fortune = '';
    state.fortune_error = true;
    state.fortune_translated = '';
  },

  setFortuneTranslated(state: any, payload: any) {
    state.fortune_error = false;
    state.fortune_translated = payload;
  },
};