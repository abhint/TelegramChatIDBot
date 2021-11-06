const bot = require("../app/bot.js");

it("telegram bot test", async () => {
  const test_result  = await bot.default.launch();
  expect(test_result).toBe(undefined)
});
afterAll(() => {
  bot.default.stop("unspecified");
});
