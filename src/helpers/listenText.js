import { InlineKeyboard } from "grammy";

const webKey = new InlineKeyboard()
.webApp('test', 'https://ddx-start-bot.vercel.app/')

export default async function listenText (ctx) {
    const msg = ctx.message

    ctx.reply('got it')

    switch (msg.text) {
        case '/start': 
            ctx.reply(' Перейдите по кнопке', {
                reply_markup: webKey
            })
            
        break

        default:
            // if (!msg.contact)
            await ctx.reply ("Список команд /help")
        break

    }
}