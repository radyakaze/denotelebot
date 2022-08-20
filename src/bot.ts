import { Bot } from 'grammy';
import start from '@/commands/start.ts';
import ping from '@/commands/ping.ts';

const bot = new Bot(Deno.env.get('BOT_TOKEN') ?? '');

bot.command('start', start);
bot.command('ping', ping);

export default bot;
