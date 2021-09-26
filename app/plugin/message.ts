import { Composer } from "telegraf";

export const onMessage = Composer.on("message", async (msg) => {
  let onUpdate = JSON.stringify(msg.message, undefined, 4);

  msg.telegram.sendMessage(msg.chat.id, ("`"+onUpdate+"`"), {
    parse_mode: "MarkdownV2",
  });
});
