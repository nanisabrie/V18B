// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to King Of Bear Official
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['', ''] // ganti jadi group lu
global.owner = ['601161739141','6281391584726'] // Put your number here //owner eval
global.kontak = ['601161739141','0'] //Ketika ada yang ngetik #owner
global.mods = ['601161739141'] // Want some help?
global.prems = ['601161739141','60173398963','6281391584726','60149611779','60165079093','6283809730793] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'buy',
  'https://api.lolhuman.xyz': 'buy',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'buy',
  'https://apikey-bear2.herokuapp.com': 'buy',
  'https://apikey-bear3.herokuapp.com': 'buy',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'buy'
zekskey = 'apivinz'
xteamkey = 'buy'
leyskey = 'dappakntlll'
bearkey = 'buy'

//xteam        MIMINETBOT
namaig = 'https://instagram.com/drak_ipul123'
namagithub = 'GAK ADA :)'
kasihcaption = `oke Bos dah siap sorry kalau lambat😁`
namakontak1 = '𝐒𝐀𝐁𝐑𝐈𝐄'
namakontak2 = '𝐒𝐀𝐁𝐑𝐈𝐄'

//kasihcaption = `DONE`

// Sticker WM
global.packname = '𝐒𝐀𝐁𝐑𝐈𝐄' // ganti aja
global.author = '𝐒𝐀𝐁𝐑𝐈𝐄' // ganti aja

//yyy
bc = '𝐒𝐀𝐁𝐑𝐈𝐄' //King Of Bear Broadcast
footer = '\n©𝐒𝐀𝐁𝐑𝐈𝐄'
namabot = '𝐒𝐀𝐁𝐑𝐈𝐄 𝐁𝐎𝐓𝐙'
namalu = '𝐒𝐀𝐁𝐑𝐈𝐄'


// 
wait = '```[⌛]Tunggu Sebentar...```'
global.wait = '```[⌛]Tunggu Sebentar...```'
global.rpg = '```Menu Rpg Tidak Aktif Sila Type .on rpg Untuk Aktifkannya ATAU hubungi owner```'
global.nsfw = '```Menu Nsfw tidak aktif type .on nsfw untuk menghidupkanya atau hubungi owner```'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
