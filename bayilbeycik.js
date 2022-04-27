const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ "intents": 32767 });

const chalk = require("chalk");
var Jimp = require("jimp");
const fs = require("fs");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const db = require('quick.db')
const ayarlar = require('./ayarlar.json');
const data = require('quick.db')
const { MessageActionRow, MessageButton } = require('discord.js');

const app = express();
app.get("/", (request, response) => {
  console.log();
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 1;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.fetchOwner()) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g
client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	console.log(interaction);
});

//------------------------------------- Sunucuya Üye Girdiğindeki Kısım -------------------------------------//


client.on("guildMemberAdd", async(member) => { 
    let kanal = '914922597853048884'
    var moment = require("moment")
require("moment-duration-format");
moment.locale("tr");
  member.setNickname(`✪ İsim | Yaş`) 
  let kayıtsız = '910268287496101890'
  await member.roles.add('910268287496101890');
let kullanıcı = client.users.cache.get(member.id);
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
let yetkilirol = '910267454574460928'
    const mapping = {
      " ": "   ",
       '0': '0️⃣',
        '1': '1️⃣',
                  '2': '2️⃣',
                  '3': '3️⃣',
                  '4': '4️⃣',
                  '5': '5️⃣',
                  '6': '6️⃣',
                  '7': '7️⃣',
                  '8': '8️⃣',
                  '9': '9️⃣'
    }
      let üyesayısı =   `${member.guild.memberCount.toString()}`
         .split("")
         .map(c => mapping[c] || c)
         .join("")

var kontrol;
if (kurulus < 1296000000) {
member.roles.add('910268287496101890');
member.roles.remove(kayıtsız);
kontrol = `Hesap Durumu: **Güvenilir Değil** ❌`
}
if (kurulus > 1296000000) kontrol = `Hesap Durumu: **Güvenilir** ✅`

const kuruluss = new Date().getTime() - kullanıcı.createdAt.getTime();  
const gecen = moment.duration(kuruluss).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
const embed = new Discord.MessageEmbed()
//.setTitle(`Sunucumuza Hoşgeldin ${member.user.username}`)
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setDescription(`<a:ay:910581629569888297> • Sunucumuza Hoşeldin ${kullanıcı} !

<a:ay8:910579084021608528>  • Seninle Beraber Sunucumuzda `+ üyesayısı +` Değerli İnsan Oldu.

<a:saat:904769858783281182> • Hesabın \``+ gecen +`\` Önce Oluşturulmuş.

<:nike:910543366415061053> • `+ kontrol +`

<a:osmnl_sonsuzluk:906235997325512715> • <@&${yetkilirol}> Rolündeki Yetkililer Seninle İlgilenicektir.

`)
.setColor("RANDOM")
client.channels.cache.get(kanal).send({content:`<@&${yetkilirol}>`, embeds:[embed]})

})


//------------------------------------- Sunucuya Üye Girdiğindeki Kısım -------------------------------------//

client.login(ayarlar.token);


