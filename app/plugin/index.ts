import { Composer } from "telegraf";
import bot from "../bot";
import { onMessage } from "./message";

export const onPlugin = async () => {
  bot.use(Composer.privateChat(onMessage));
};
