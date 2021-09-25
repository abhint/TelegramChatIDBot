import { Composer } from "telegraf";

export const onStart = Composer.command("start", async (msg) => {
  msg.telegram.sendMessage(msg.chat.id, "Hello, World!");
});
