var yahooStockPrices = require('yahoo-stock-prices');
const Discord = require('discord.js')


module.exports = {
    name: 'stock',
    async execute(client, message) {
      message.channel.send(":x: this command is disabled... it needs to be rewritten... *sigh*")
      return
      let args = message.content.slice(8).toUpperCase()
      const data = await yahooStockPrices.getCurrentData(args);
      yahooStockPrices.getCurrentPrice(args, (err, price) => {
        if (err){
          message.channel.send(":x: The symbol you povided didn't exist")
          console.error(err)
          return
        }
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(args)
        .addFields(
          { name: '💲 Price', value: price, inline: true },
          { name: 'Symbol', value: args, inline: true },
          { name: ':currency_exchange: Currency', value: JSON.stringify(data.currency), inline: true }        
          )
          message.channel.send(exampleEmbed)
        }).catch(err => {
          message.channel.send(":x: Symbol doesn't exist or an error occurred.");
          console.error(err);
        });
    }
}