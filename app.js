import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.use(Telegraf.log());

bot.start((msg) => msg.reply('Hello'))

bot.launch()
