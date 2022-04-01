const axios = require("axios");

module.exports = {
  async index(ctx) {
    const res = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");

    const sample = {
      question: res.data.setup,
      answer: res.data.delivery,
    };

    await strapi.query("api::faq.faq").create({
      data: sample,
    });

    ctx.body = sample;
  },
};
