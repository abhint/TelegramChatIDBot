import bot from "./app/bot";
import { onCommands } from "./app/commands";
import { onMessage } from "./app/plugin/onText";
(async () => {
  await onCommands();
  bot.use(onMessage)
  await bot.launch();
})();
