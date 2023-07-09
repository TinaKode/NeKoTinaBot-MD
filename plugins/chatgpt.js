/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/
import { Configuration, OpenAIApi } from 'openai'
import fs from 'fs'
global.mylogo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg'),
  global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text": `🎇 𝑺𝒊𝒔𝒕𝒆𝒎 𝑩𝒐𝒕 - 𝑵𝒆𝑲𝒐𝑻𝒊𝒏𝒂𝑩𝒐𝒕-𝑴𝑫 🐱\n💬 𝑪𝒉𝒂𝒕𝑮𝑷𝑻 - 𝑶𝒑𝒆𝒏𝑨𝑰 2023 🗣️ `, "title": `🐱 𝑵𝒆𝑲𝒐𝑻𝒊𝒏𝒂𝑩𝒐𝒕-𝑴𝑫 🐱\n🎴⃝⃢𝑻𝒆𝒂𝒎 𝑲𝒂𝒎𝒂𝒕𝒁𝒖𝒎𝒊⃥⃤⃢🖤`, 'jpegThumbnail': mylogo } } }
let handler = async (m, { conn, text }) => {

if (!text) return m.reply('*ᴜsᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴏ ᴅᴇʟ ᴄᴏᴍᴀɴᴅᴏ!!*\n\n*📌 Ejemplo de uso:*\n.ia Cuantos planetas hay en el sistema solar')
const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);  
const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo-0613",
          messages: [{role: "user", content: text}],
          });    
conn.reply(m.chat, `${response.data.choices[0].message.content}`, fakemsg)

}

handler.help = ['ai']
handler.tags = ['*💬 CHATGPT - OPENAI 🗣️*']
handler.command = ['ia', 'ai', 'chatgpt', 'openai'];

export default handler;
/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/