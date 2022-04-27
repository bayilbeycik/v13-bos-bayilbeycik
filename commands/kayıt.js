const Discord = require('discord.js')
const db = require('megadb')
let server = new db.crearDB('server')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => { 
  let yetkilirol = await server.get(`kayityetkilirol_${message.guild.id}`)
  console.log(yetkilirol)
  if(!message.member.roles.cache.has(yetkilirol)) return message.channel.send({content:`Bu komutu kullanmak için yeterli yetkiye sahip değilsin`});

  const prefix = ayarlar.prefix
 let kayitrol = await server.get(`kayitrol_${message.guild.id}`)
  let alinanrol = await server.get(`kayitalinacakrol_${message.guild.id}`)
  let tag = await server.get(`kayittag_${message.guild.id}`)
if(!args[0]){

    let embed = new Discord.MessageEmbed()
    .setDescription(`Bir Hata!`)
    .addField(`Doğru Kullanım`, `${prefix}kayıt erkek/kız isim yaş`, true)
    .setFooter(`Bay İlbeycik | Kayıt Sistemi`)
    .setColor('RANDOM')
    message.reply({ embeds: [embed] })
}
if(args[0] == 'erkek'){
  let member = message.mentions.members.first();
  if(!member) return message.reply(`Kayıt Olacak Kişiyi Etiketle! - Bay İlbeycik`)
    let kisi = member.id
let isim = args[2]
let yaş = args[3]
if(!isim) return message.reply('Bir İsim Gir!')
if(!yaş) return message.reply('Bir Yaş Gir!')
let embed = new Discord.MessageEmbed()
.setTitle(`Başarılı!`)
.setDescription(`Kayıt Olan Kişi ${member}`)
.addField(`İsim |`, `${isim}`, true)
.addField(`Yaş | `, `${yaş}`, true)
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
.setColor('RANDOM')
message.reply({ embeds: [embed] })
message.guild.members.cache.get(member.id).roles.remove(alinanrol)
message.guild.members.cache.get(member.id).roles.add(kayitrol)

let registername ;
if(tag) registername = `${tag} ${isim} | ${yaş}` 
if(!tag) registername = `${isim} | ${yaş}`
message.guild.members.cache.get(member.id).setNickname(registername)
    /*
let chat = '910265463743840336'
let embed2 = new Discord.MessageEmbed()
.setDescription(`Yeni Bir Üye Katıldı!`)
.addField(`Üye | `, `${member}`, true)
.addField(`Hoşgeldin`, `İyi Vakit Geçirmeler Dileriz :\)`, true)
.setFooter(`Bay İlbeycik - Kayıt Sistemi`)
message.guild.channels.cache.get(chat).send({ embeds : [embed2]})
*/
}

if(args[0] == 'kız'){
  let member = message.mentions.members.first();
  if(!member) return message.reply(`Kayıt Olacak Kişiyi Etiketle! - Bay İlbeycik`)
    
let isim = args[2]
let yaş = args[3]
if(!isim) return message.reply('Bir İsim Gir!')
if(!yaş) return message.reply('Bir Yaş Gir!')
let embed = new Discord.MessageEmbed()
.setTitle(`Başarılı!`)
.setDescription(`Kayıt Olan Kişi ${member}`)
.addField(`İsim |`, `${isim}`, true)
.addField(`Yaş | `, `${yaş}`, true)
.setColor('RANDOM')
.setFooter(`Bay İlbeycik | Zaytron Yazılım | https://discord.gg/Yn4CRW5sk5`)
message.reply({ embeds: [embed] })
message.guild.members.cache.get(member.id).roles.remove(alinanrol)
message.guild.members.cache.get(member.id).roles.add(kayitrol)
let registername ;
if(tag) registername = `${tag} ${isim} | ${yaş}` 
if(!tag) registername = `${isim} | ${yaş}`
message.guild.members.cache.get(member.id).setNickname(registername)    /*
let chat = '910265463743840336'
let embed2 = new Discord.MessageEmbed()
.setDescription(`Yeni Bir Üye Katıldı!`)
.addField(`Üye | `, `${member}`, true)
.addField(`Hoşgeldin `, `İyi Vakit Geçirmeler Dileriz :\)`, true)
.setFooter(`Bay İlbeycik - Kayıt Sistemi`)
message.guild.channels.cache.get(chat).send({ embeds : [embed2]})
}
*/
    }
};

//permissions and aliases

exports.conf = {
  enabled: true,
  aliases: ['register'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kayıt',
  description: '',
  usage: '',
  examples: ''
};