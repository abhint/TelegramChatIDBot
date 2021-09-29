import { Composer } from "telegraf";

export const onCommandID = Composer.command("/id", async (msg) => {
  let onUpdate: any = msg.message;
  if (msg.message.reply_to_message == undefined) {
    msg.telegram.sendMessage(msg.chat.id, "CHAT ID: `" + msg.chat.id + "`", {
      parse_mode: "Markdown",
    });
  } else {
    let onID: any;
    if (
      onUpdate.reply_to_message.forward_from_chat === undefined &&
      onUpdate.reply_to_message.forward_from === undefined
    ) {
      onID = "USER ID: `" + onUpdate.from.id + "`";
    } else if (onUpdate.reply_to_message.forward_from === undefined) {
      onID =
        "FORWARD CHAT ID: `" +
        onUpdate.reply_to_message.forward_from_chat.id +
        "`";
    } else {
      onID =
        "FORWARD CHAT ID: `" + onUpdate.reply_to_message.forward_from.id + "`";
    }
    msg.telegram.sendMessage(
      msg.chat.id,
      "CHAT ID: `" + onUpdate.from.id + "`\n" + onID,
      {
        reply_to_message_id: msg.message.message_id,
        parse_mode: "MarkdownV2",
      }
    );
  }
});

export const onMessage = Composer.on("message", async (msg) => {
  let onUpdate = JSON.stringify(msg.message, undefined, 4);

  msg.telegram.sendMessage(msg.chat.id, "`" + onUpdate + "`", {
    reply_to_message_id: msg.message.message_id,
    parse_mode: "MarkdownV2",
  });
});
