import { Composer, TelegramError } from "telegraf";
import { Telegraf } from "telegraf";

export const onMessage = Composer.on("message", async (msg) => {
  let onUpdate = JSON.stringify(msg.message.from, undefined, 4);

  msg.telegram.sendMessage(msg.chat.id, ("`"+onUpdate+"`"), {
    parse_mode: "MarkdownV2",
  });
});
