import { Composer } from "telegraf";

export const onCommandID = Composer.command("/id", async (msg) => {
  let onUpdate: any = msg.message;
  console.log(msg.message);

  if (msg.message.reply_to_message == undefined) {
    msg.telegram.sendMessage(
      msg.chat.id,
      "*CHAT ID:* `" + msg.chat.id + "`\n" + "*USER ID: *`" + msg.from.id + "`",
      {
        parse_mode: "Markdown",
      }
    );
  } else {
    let onID: any;
    if (
      onUpdate.reply_to_message.forward_from_chat === undefined &&
      onUpdate.reply_to_message.forward_from === undefined
    ) {
      onID =
        "*CHAT ID: *`" +
        onUpdate.chat.id +
        "`\n" +
        "*USER ID:* `" +
        onUpdate.from.id +
        "`";
    } else if (onUpdate.reply_to_message.forward_from === undefined) {
      onID =
        "*CHAT ID: *`" +
        onUpdate.chat.id +
        "`\n" +
        "*FORWARD CHAT ID:* `" +
        onUpdate.reply_to_message.forward_from_chat.id +
        "`\n" +
        "*USER ID:* `" +
        onUpdate.from.id +
        "`";
    } else {
      onID =
        "*CHAT ID: *`" +
        onUpdate.chat.id +
        "`\n" +
        "*FORWARD CHAT ID:* `" +
        onUpdate.reply_to_message.forward_from.id +
        "`\n" +
        "*USER ID:* `" +
        onUpdate.from.id +
        "`";
    }
    msg.telegram.sendMessage(msg.chat.id, onID, {
      reply_to_message_id: msg.message.message_id,
      parse_mode: "MarkdownV2",
    });
  }
});

export const onMessage = Composer.on("message", async (msg) => {
  let onUpdate = JSON.stringify(msg.message, undefined, 4);

  msg.telegram.sendMessage(msg.chat.id, "`" + onUpdate + "`", {
    reply_to_message_id: msg.message.message_id,
    parse_mode: "MarkdownV2",
  });
});
