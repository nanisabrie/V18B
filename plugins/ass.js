let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
m.reply(global.wait)
res = await fetch(`https://api.xteam.xyz/randomimage/ass?APIKEY=${xteamkey}`)
heum = await res.buffer()
await conn.sendButtonImg(m.chat, heum, 'wangy wangy wangy', footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['ass']
handler.tags = ['hentai']

handler.command = /^(ass)$/i
handler.owner = true

handler.botAdmin = false

handler.fail = null
handler.limit = 500000

module.exports = handler

