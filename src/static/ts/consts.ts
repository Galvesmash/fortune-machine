const consts: any = {
  ENDPOINTS: {
    TRANSLATE: `https://${process.env.VUE_APP_RAPID_API_OPENTRANSLATOR_HOST}/translate`,
  },
};

for (const x in consts) {
  consts[x] = Object.freeze(consts[x]);
}

export default consts;
export const namespaced = true;