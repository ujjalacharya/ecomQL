const { forwardTo } = require('prisma-binding');

const Query = {
  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items();
    return items;
  },

  // async item(parent, args, ctx, info) {
  //   console.log("args", args)
  //   const item = await ctx.db.query.item({
  //     where: {id: "ck8y5t4losv6b0a78ecdm8zqv"}
  //   });
  //   return item;
  // },
  item: forwardTo('db'),
};

module.exports = Query;
