import { Composer } from "telegraf";

export const onMessage = Composer.on("text", (msg) => console.log(msg));
