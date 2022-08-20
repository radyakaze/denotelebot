import { CommandContext, Context } from 'grammy';

export default (ctx: CommandContext<Context>) => {
  return ctx.reply('Hello');
};
