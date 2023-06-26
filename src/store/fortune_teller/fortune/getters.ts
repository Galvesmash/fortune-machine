export default {
  getFortune: (state: any) => {
    return state.fortune;
  },

  getFortuneError: (state: any) => {
    return state.fortune_error;
  },

  getFortuneTranslated: (state: any) => {
    return state.fortune_translated;
  },
};