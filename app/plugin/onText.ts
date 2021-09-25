import { Composer, TelegramError } from "telegraf";
import { Telegraf } from "telegraf";

export const onMessage = Composer.on("text", async (msg) => {
  let onUpdate = JSON.stringify(msg.message, undefined, 4);

  msg.telegram.sendMessage(msg.chat.id, ("`"+onUpdate+"`"), {
    parse_mode: "MarkdownV2",
  });
});
