import { Composer } from "telegraf";

export const onStart = Composer.command("start", async (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Hello, [" +
      msg.from.first_name +
      "](tg://user?id=" +
      msg.chat.id +
      ")\n*എന്തിനോ വേണ്ടി തിളക്കുന്ന സാംബാർ*\nhttps://telesco.pe/AbhijithNT/1427",
    {
      reply_to_message_id: msg.message.message_id,
      parse_mode: "Markdown",
    }
  );
});
