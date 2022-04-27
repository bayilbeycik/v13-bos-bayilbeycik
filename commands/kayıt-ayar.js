const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('megadb')
let server = new db.crearDB('server')
exports.run = async (client, message, args) => { 
  const prefix = ayarlar.prefix
if(!args[0]){

let embed = new Discord.MessageEmbed()
.setTitle(`:x: Yanlış Kullanım :x:`)
.setDescription(`${prefix}kayıt-ayar verilecek-rol/alınacak-rol/yetkili-rol/tag @rol/tagınız`)
.addField(`Ayarları Sıfırlamak İçin |`, `${prefix}kayıt-ayar sıfırla`)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [embed]})
}
if(args[0] == 'alınacak-rol'){

  let role = message.mentions.roles.first()
if(!role) return message.reply('Rol Etiketlemelisin!')

let basarili = new Discord.MessageEmbed()
.setDescription(`İşlem Başarılı`)
.addField(`Ayarlanan Rol |`, `${role}`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [basarili]})
server.set(`kayitalinacakrol_${message.guild.id}`, role.id)
}
if(args[0] == 'verilecek-rol'){

  let role = message.mentions.roles.first()
if(!role) return message.reply('Rol Etiketlemelisin!')

let basarili = new Discord.MessageEmbed()
.setDescription(`İşlem Başarılı`)
.addField(`Ayarlanan Rol |`, `${role}`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [basarili]})
server.set(`kayitrol_${message.guild.id}`, role.id)
}
if(args[0] == 'yetkili-rol'){

  let rol = message.mentions.roles.first()
if(!role) return message.reply('Rol Etiketlemelisin!')

let basarili = new Discord.MessageEmbed()
.setDescription(`İşlem Başarılı`)
.addField(`Ayarlanan Rol |`, `${role}`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [basarili]})
server.set(`kayityetkilirol_${message.guild.id}`, rol.id)
}
if(args[0] == 'tag'){

  let tag = args.slice(1).join(' ')


let basarili = new Discord.MessageEmbed()
.setDescription(`İşlem Başarılı`)
.addField(`Ayarlanan Tag |`, `${tag}`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [basarili]})
server.set(`kayittag_${message.guild.id}`, tag)
}
if(args[0] == 'sıfırla'){
  let embed = new Discord.MessageEmbed()
  .setDescription(`\:x: Hatalı Kullanım \:x:`)
  .addField(`Doğru Kullanımlar | `, `${prefix}kayıt-ayar sıfırla verilecek-rol/alınacak-rol/yetkili-rol/tag @rol/tag`, true)
  .setColor('RANDOM')
  .setFooter(`Bay İlbeycik | Zaytron Register | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [ embed]})
if(!args[1] == 'tag') {
  let tag = await server.get(`kayittag_${message.guild.id}`) || "Eskiden Kullanıdığınız Bir Tagınız Yok"
const tagbasarili = new Discord.MessageEmbed()
.setDescription(`Başarılı İşlem`)
.addField(`Sıfırlanan Ayar |`, `Tag ( Eski Tagınız \`${tag}\` )`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Register | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [tagbasarili]})
server.delete(`kayittag_${message.guild.id}`)
}
if(!args[1] == 'verilecek-rol') {
  let role = await server.get(`kayitrol_${message.guild.id}`) || "Eskiden Kullanıdığınız Bir Rolünüz Yok"
const verilecekbasarili = new Discord.MessageEmbed()
.setDescription(`Başarılı İşlem`)
.addField(`Sıfırlanan Ayar |`, `Verilecek Rol ( Eski Rol \`<@&${role}>\` )`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Register | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [verilecekbasarili]})
server.delete(`kayitrol_${message.guild.id}`)
}
if(!args[1] == 'alınacak-rol') {
  let role = await server.get(`kayitalinacakrol_${message.guild.id}`) || "Eskiden Kullanıdığınız Bir Rolünüz Yok"
const alinacakbasarili = new Discord.MessageEmbed()
.setDescription(`Başarılı İşlem`)
.addField(`Sıfırlanan Ayar |`, `Alınacak Rol ( Eski Rol \`<@&${role}>\` )`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Register | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [alinacakbasarili]})
server.delete(`kayitalinacakrol_${message.guild.id}`)
}
if(!args[1] == 'yetkili-rol') {
  let role = await server.get(`kayityetkilirol_${message.guild.id}`) || "Eskiden Kullanıdığınız Bir Rolünüz Yok"
const yetkilibasarili = new Discord.MessageEmbed()
.setDescription(`Başarılı İşlem`)
.addField(`Sıfırlanan Ayar |`, `Yetkili Rol ( Eski Rol \`<@&${role}>\` )`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Register | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [yetkilibasarili]})
server.delete(`kayityetkilirol_${message.guild.id}`)
}
}
};

//permissions and aliases

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kayıt-ayar',
  description: '',
  usage: '',
  examples: ''
};