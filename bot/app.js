import { Telegraf, Markup } from 'telegraf';

const token = '7000975022:AAF-sAZmcIMMWihF25BUVA5fnsNQhqpUkJ4';
const webAppUrl = 'https://clicker-pro-896d5.web.app/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome to the Clicker Pro bot! Click the button below to start the game.',
    Markup.inlineKeyboard([
      Markup.button.webApp('Start', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  );
});

bot.launch();
