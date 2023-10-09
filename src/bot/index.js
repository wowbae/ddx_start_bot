import { Bot } from 'grammy'
import listenText from './listen/listenText';

export const bot = new Bot("5312475410:AAEqIlh5nUPxdFpq1J_tab7LGJGR7ILvoSw"); 


bot.start()
// обработчик всех сообщений
bot.on('message', async (ctx) => {
  await listenText(ctx)
})