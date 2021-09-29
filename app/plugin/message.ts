import { Composer } from "telegraf";

export const onCommandID = Composer.command("/id", async (msg) => {
  let onUpdate = JSON.stringify(msg.message, undefined, 4);
  msg.telegram.sendMessage(msg.chat.id, "`" + onUpdate + "`", {
    reply_to_message_id: msg.message.message_id,
    parse_mode: "MarkdownV2",
  });
});

export const onMessage = Composer.on("message", async (msg) => {
  let onUpdate = JSON.stringify(msg.message, undefined, 4);

  msg.telegram.sendMessage(msg.chat.id, "`" + onUpdate + "`", {
    reply_to_message_id: msg.message.message_id,
    parse_mode: "MarkdownV2",
  });
});
