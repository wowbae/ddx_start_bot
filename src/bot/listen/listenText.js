import { InlineKeyboard } from "grammy";

const webKey = new InlineKeyboard()
.webApp('test', 'https://ddx-start-bot.vercel.app/')

export default async function listenText (ctx) {
    const msg = ctx.message

    switch (msg.text) {
        case '/start': 
            ctx.reply('Запись на Фитнес диагностику или другой вопрос по кнопке 👇🏻', {
                reply_markup: webKey
            })
        break

        default:
            await ctx.reply ("Список команд /help")
        break

    }
}