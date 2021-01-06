#!/usr/bin/env python3
"""
Copyright 2021 ABHIJITH N T
URL : https://github.com/Abhijith-cloud/

"""

import logging
from config import config
from aiogram import Bot, Dispatcher, executor, types

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

logging.getLogger("aiogram").setLevel(logging.WARNING)

API_TOKEN = config.BOT_TOKEN

bot = Bot(token=API_TOKEN)
ChatID = Dispatcher(bot)
@ChatID.message_handler(commands=['start', 'help' , 'id'])
async def send_welcome(message: types.Message):
    await message.reply(
        f"<b>USER ID:</b> <code>{message.from_user.id}</code>\n<b>CHAT ID:</b> <code>{message.chat.id}</code>",
        parse_mode = "HTML"
        )


@ChatID.message_handler()
async def echo(message: types.Message):
    await message.answer(
        '😁'
        )

if __name__ == '__main__':
    executor.start_polling(ChatID, skip_updates=True)
