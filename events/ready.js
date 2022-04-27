const moment = require('moment')
module.exports = client => {
client.user.setPresence('Elaine :heart: ile')
const statusList = [
  { name: ' Youtube Lrows\'u', type: 'WATCHING'},
  { name: ' Youtube UtkuJS\'yi', type: 'WATCHING'},
  { name: ' Youtube Bay İlbeycik\'i ', type: 'WATCHING'}
]

const durum = statusList[Math.floor(Math.random() * statusList.length)];
//setInterval kısmı
client.user.setPresence({ activities: durum })
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı Botunuz Sorunsuz bir şekilde çalışıyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şuanda Aktif!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.commands.size} Komut İle Giriş Yapıldı!`);
};
