import './env.js';
import { Telegraf } from 'telegraf'

const bot = new Telegraf("5493678079:AAHU7jN15-m7iAoMe_E0yVcQyv_v3uxpLAY")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

console.log('aaaa')

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))