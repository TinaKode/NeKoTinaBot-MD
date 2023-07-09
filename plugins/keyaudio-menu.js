/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/
import fetch from 'node-fetch'
import fs from 'fs'
global.MultiHD = fs.readFileSync('./multimedia/imagenes/MultiHD.jpg'),
  global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text": `🎇 𝑺𝒊𝒔𝒕𝒆𝒎 𝑩𝒐𝒕 - 𝑵𝒆𝑲𝒐𝑻𝒊𝒏𝒂𝑩𝒐𝒕-𝑴𝑫 🐱\n© 𝑩𝒚 𝒀𝒆𝒔𝒆𝒏𝒊𝒂 𝑴𝒂𝒈𝒅𝒂𝒍𝒆𝒏𝒂 `, "title": `🐱 𝑵𝒆𝑲𝒐𝑻𝒊𝒏𝒂𝑩𝒐𝒕-𝑴𝑫 🐱\n🎴⃝⃢𝑻𝒆𝒂𝒎 𝑲𝒂𝒎𝒂𝒕𝒁𝒖𝒎𝒊⃥⃤⃢🖤`, 'jpegThumbnail': MultiHD } } }
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let str = `*╭═✦┅╡NeKoTinaBot - Audios╞┅✦═╮*
*║┊:*  ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈  
*║┊➤ :* kawai
*║┊➤ :* baka
*║┊➤ :* onich
*║┊➤ :* kudasai
*║┊➤ :* yutki
*║┊➤ :* yokese
*║┊➤ :* yajaro
*║┊➤ :* woau
*║┊➤ :* unga
*║┊➤ :* umai
*║┊➤ :* imaaa
*║┊➤ :* uchinchi
*║┊➤ :* tuturu
*║┊➤ :* talcho
*║┊➤ :* ssss
*║┊➤ :* ohayou
*║┊➤ :* sempai
*║┊➤ :* pupu
*║┊➤ :* pikachu
*║┊➤ :* ooaa
*║┊➤ :* omg
*║┊➤ :* omaiwa
*║┊➤ :* omaiga
*║┊➤ :* ñañañi
*║┊➤ :* ñaña
*║┊➤ :* nya
*║┊➤ :* niconico
*║┊➤ :* nani
*║┊➤ :* motomoto
*║┊➤ :* mma
*║┊➤ :* mitamita
*║┊➤ :* kobarashi
*║┊➤ :* kataka
*║┊➤ :* jai
*║┊➤ :* jentai
*║┊➤ :* asennn
*║┊➤ :* anana
*║┊➤ :* papupapu
*║┊➤ :* ª
*║┊➤ :* araara
*║┊➤ :* yamete
*║┊➤ :* buenosdias
*║┊➤ :* si👍
*║┊➤ :* noreturbio
*║┊➤ :* ohmevengo
*║┊➤ :* conflores
*║┊➤ :* nodigasesopapu
*║┊➤ :* nochupala
*║┊:* ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ 
*╰═✦┅╡★★★★★★★★╞┅✦═╯*`.trim()
  await conn.reply(m.chat, str.trim(), fakemsg)
}
handler.help = ['keyaudio']
handler.tags = ['herramienta']
handler.command = /^(keyaudio|menu2)$/
export default handler
/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/