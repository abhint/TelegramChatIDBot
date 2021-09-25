import bot from "./app/bot";
import { onStart } from "./app/start";
(async () => {
  bot.use(onStart);
  await bot.launch();
})();
