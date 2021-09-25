import { onStart } from "./start";
import bot from "../bot";
import { Composer } from "telegraf";

export const onCommands = async () => {
    bot.use(Composer.privateChat(onStart))
};
