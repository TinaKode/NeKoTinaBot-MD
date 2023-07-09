/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }
  let str = `ৣ͓̽⃤͓̽༊͓̽ᭃ͓̽⃢͓̽🐱𝗡͓̽𝗲͓̽𝗞͓̽𝗼͓̽𝗧͓̽𝗶͓̽𝗻͓̽𝗮͓̽𝗕͓̽𝗼͓̽𝘁͓̽-͓̽𝗠͓̽𝗗͓̽⃤͓̽ᬽ͓̽⃟͓̽🤖
❍᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁❍
[ 𝗚𝗥𝗨𝗣𝗢𝗦 𝗢𝗙𝗖 - 𝗕𝗢𝗧 𝗠𝗗 ]

🎈 𝐆𝐑𝐔𝐏𝐎 𝟏:

ঐ https://chat.whatsapp.com/KkLE1VmVvP5L29k7qVaZ4t

🎈 𝐆𝐑𝐔𝐏𝐎 𝟐:

ঐ https://chat.whatsapp.com/Jwqh6BTcaOiDKlw0y1PbKc

❍᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁᠁❍`.trim() 
  await conn.reply(m.chat, str.trim(), fkontak)
}
handler.help = ['wagrupos']
handler.tags = ['']
handler.command = /^(wagrupos|gruposwa|grupos|enlaces)$/i
export default handler
/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/