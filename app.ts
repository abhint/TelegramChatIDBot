import bot from "./app/bot";
import { onCommands } from "./app/commands";
import { onPlugin } from "./app/plugin";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  await onCommands();
  await onPlugin();

  if (process.env.URL && process.env.PORT) {
    const webhook_url = String(process.env.URL);
    const port = Number(process.env.PORT);
    await bot
      .launch({
        webhook: {
          domain: webhook_url,
          port: port,
        },
      })
      .then(() =>
        console.log(
          `${bot.botInfo?.first_name} is online\nDomain: ${webhook_url}\nPORT:${port}`
        )
      )
      .catch((error: any) => console.log("Error:", error));
    return;
  }
  await bot
    .launch()
    .then(() => console.log(`${bot.botInfo?.first_name} is Online !`));
})();
