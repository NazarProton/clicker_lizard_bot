import { Telegraf, Markup } from 'telegraf';

const token = '7000975022:AAF-sAZmcIMMWihF25BUVA5fnsNQhqpUkJ4';
const webAppUrl = 'https://clicker-pro-896d5.web.app/';

const bot = new Telegraf(token);

// Стартове меню з двома кнопками
bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome to the Clicker Pro bot! Choose an option below.',
    Markup.inlineKeyboard([
      Markup.button.webApp('Start', `${webAppUrl}?ref=${ctx.payload}`),
      Markup.button.callback('Find Contact', 'find_contact'),
    ])
  );
});

// Обробка команди find_contact
bot.action('find_contact', (ctx) => {
  ctx.reply(
    "Please send the contact information in the following format:\n\n`Name: Ім'я Прізвище, Phone: +380XXXXXXXXX`",
    {
      parse_mode: 'Markdown',
    }
  );
});

// Обробка текстового повідомлення з контактними даними
bot.on('text', (ctx) => {
  const message = ctx.message.text;

  // Перевіряємо формат повідомлення
  const regex = /Name:\s*(.+),\s*Phone:\s*(\+?\d+)/;
  const match = message.match(regex);

  if (match) {
    const [, fullName, phoneNumber] = match;
    const [firstName, ...lastNameArr] = fullName.split(' ');
    const lastName = lastNameArr.join(' ');

    // Надсилаємо контакт у формі контактної картки
    ctx.replyWithContact(phoneNumber, firstName, {
      last_name: lastName || '',
    });
  } else {
    ctx.reply(
      "Incorrect format. Please send the contact information as:\n\n`Name: Ім'я Прізвище, Phone: +380XXXXXXXXX`",
      {
        parse_mode: 'Markdown',
      }
    );
  }
});

bot.launch();
