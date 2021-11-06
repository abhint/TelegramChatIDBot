import bot from "./app/bot";
import { onCommands } from "./app/commands";
import { onPlugin } from "./app/plugin";
(async () => {
  await onCommands();
  await onPlugin();
  if (process.env.URL === undefined && process.env.PORT === undefined) {
    await bot.launch();
    return;
  }
  await bot
    .launch({
      webhook: {
        domain: String(process.env.URL),
        port: Number(process.env.PORT),
      },
    })
    .then(() =>
      console.log(
        `BOT IS START Domain: ${String(process.env.URL)}:${Number(
          process.env.PORT
        )}`
      )
    )
    .catch((error) => console.log("Error:", error));
})();
