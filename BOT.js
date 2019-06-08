const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
[ ${member}  ]
[ https://discord.gg/TevSz78 ]
**giveaways**
**free accounts**
**And such more things coming, stay tuned :)**
__________________________
`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
