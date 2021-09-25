import { Composer } from "telegraf";

export const onMessage = Composer.on("text", async (msg) => {
    let onUpdate = JSON.stringify(msg.message.chat)
  msg.telegram.sendMessage(msg.chat.id, `<pre>${onUpdate}</pre>`, {
    parse_mode: "HTML",
  });
});
