import { CommandContext, Context } from 'grammy';

export default (ctx: CommandContext<Context>) => ctx.reply('Pong!');
