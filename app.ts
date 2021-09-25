import bot from "./app/bot";
import { onCommands } from "./app/commands";
import { onPlugin } from "./app/plugin";
(async () => {
  await onCommands();
  await onPlugin();
  await bot.launch();
})();
