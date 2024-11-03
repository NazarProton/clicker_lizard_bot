import { Telegraf, Markup } from 'telegraf';

const token = '7000975022:AAF-sAZmcIMMWihF25BUVA5fnsNQhqpUkJ4';
const webAppUrl = 'https://clicker-pro-896d5.web.app/';

const bot = new Telegraf(token);

// ID користувача, якому потрібно пересилати контакти
const targetUserId = 'TARGET_USER_ID';

bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome to the Clicker Pro bot! Click the button below to start the game.',
    Markup.inlineKeyboard([
      Markup.button.webApp('Start', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  );
});

// Обробка повідомлень з контактами
bot.on('contact', (ctx) => {
  const contact = ctx.message.contact;
  const contactInfo = `Ім'я: ${contact.first_name} ${
    contact.last_name || ''
  }\nТелефон: ${contact.phone_number}`;

  // Надсилання контакту цільовому користувачу
  bot.telegram.sendMessage(targetUserId, `Новий контакт:\n${contactInfo}`);
});

bot.launch();
