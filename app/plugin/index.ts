import { Composer } from "telegraf";
import bot from "../bot";
import { onMessage } from "./message";
import { onCommandID } from "./message";
export const onPlugin = async () => {
  bot.use(onCommandID);
  bot.use(Composer.privateChat(onMessage));
};
