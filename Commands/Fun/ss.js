module.exports = {
    name: 'ss',
    async execute(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(":alarm_clock: **Cooldown** You can only send one message per minute, Please slowdown. *tick tock* ");
      } else {
      
           // the user can type the command ... your command code goes here :)
      
        // Adds the user to the set so that they can't talk for a minute
      
      if (services_stopped === 1) {
        message.channel.send(":x: Server Send has shutdown for now.. Please come again.")
        return;
      }
          if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
          
          message.channel.send(":x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.")
            console.log('[MSG] :x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.');
            return;
          }
          if (ssbans.bans.includes(message.author.id)) {
            const yes = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(':no_entry: ***You have been banned from using Server Send***')
            .setDescription("Sorry, You've been banned from ServerSend. Therefore, You cannot use Serversend. If you wish to know why, please DM my creator. He is `Jacobw#8117`, If you think this is a mistake, or something, Use j.feedback. Thanks.")
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Stop_x_nuvola.svg/240px-Stop_x_nuvola.svg.png')
            message.channel.send(yes)
            return;
          }
          let thingtosend = message.content.slice(5).removepings()
          //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
          client.channels.cache.get('617865643307434025').send(message.author.tag + `(id: ${message.author.id})` + ": " + thingtosend)
          var tipzero = [""," You can join my server with j.invite"]
          message.channel.send(':white_check_mark: Sent to my server!'+tipzero[Math.floor(Math.random() * tipzero.length)])
          console.log('[MSG] [SERVERSEND] <NUM>' + message.author.tag + ": " + message.content.slice(5));
          ssnum++;
          talkedRecently.add(message.author.id);
          setTimeout(() => {
            // Removes the user from the set after a minute
            talkedRecently.delete(message.author.id);
          }, 60000);
        }
    }
}