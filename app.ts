import bot from "./app/bot";
import { onStart } from "./app/commands/start";
(async () => {
  bot.use(onStart);
  await bot.launch();
})();
