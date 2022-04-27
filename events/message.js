const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');




module.exports = async message => {
  let prefix = ayarlar.prefix 
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
 //  if (!client.commands.has(command)) {
   // if (client.aliases.has(command)) {
     // cmd = client.commands.get(client.aliases.get(command));
    //} //else {
      //message.channel.send(`Komutlarımda \`\`${command}\`\` adında bir komut bulamadım! Komut listesine bakmak için: \`\`${prefix}yardım\`\``)
    //}
  //}
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip2.includes(message.author.id) && !ayarlar.sahip2.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`<:yanlis:805893892947705907> **${cmd.help.name}** Adlı Kullandığınız Komut Bakıma Alındığı İçin Kullanamazsınız! \n Sebebi : **Sizlere En İyi Hizmeti Vermek Ve Bugları/Hataları Kaldırmak İçin Komutu Bakıma Aldık**`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
