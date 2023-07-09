import db from '../lib/database.js'
let handler = async (m, {
   conn, usedPrefix
}) => {

   let who = m.quoted ? m.quoted.sender: m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
   let user = db.data.users[who]
   if (!(who in db.data.users)) throw `El usuario no se encuentra en mi base de datos`
   conn.reply(m.chat, `\n*『 BALANCE 』*\n▢ *👤 / Nombre* : _@${who.split('@')[0]}_\n▢ *coins / ©️* : _${user.coin}_\n▢ *XP / ✨* : _Total ${user.exp}_\n\n*NOTA :*\nPuedes comprar 🎇 limit usando los comandos\n▢ *${usedPrefix}comprar limit <cantidad>*`, m, {
         mentions: [who]
      })
}
handler.help = ['balance']
handler.tags = ['xp']
handler.command = ['bal', 'balance']

export default handler