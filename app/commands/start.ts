import { Composer } from "telegraf";

export const onStart = Composer.command("start", async (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    "Hello, [" + msg.from.first_name + "](tg://user?id=" + msg.chat.id + ")",
    {
      parse_mode: "Markdown",
    }
  );
});
