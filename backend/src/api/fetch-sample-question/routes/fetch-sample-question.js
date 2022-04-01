module.exports = {
  routes: [
    {
      method: "GET",
      path: "/fetch-sample-question",
      handler: "fetch-sample-question.index",
      config: {
        auth: false,
      },
    },
  ],
};
