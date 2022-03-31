let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  m.reply('Sedang Diproses...')
  bzz = await fetch(`https://api.xteam.xyz/randomimage/pussy?apikey=${xteamkey}`)
  res = await bzz.buffer()
  conn.sendButtonImg(m.chat, res, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['pussy']
handler.tags = ['hentai']

handler.command = /^(pussy)$/i
handler.owner = true

handler.fail = null

module.exports = handler

