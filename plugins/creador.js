import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
  let name = await conn.getName(who)
  const nomorown = "51986367022"
  const nomorown2 = "51957041866"
  await sendContactArray(conn, m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Mayorí UwU`, `🌐 Devolper Owner`, `nekotinabot98@gmail.com`, `🇵🇪 Perú`, `📍 https://github.com/TinaKode`, `🌏 Team Bot`],
    [`${nomorown2}`, `${await conn.getName(nomorown2+'@s.whatsapp.net')}`, `Yesenia UwU`, `🌐 Devolper Owner`, `nekotinabot98@gmail.com`, `🇵🇪 Perú`, `https://github.com/Yesenia57`, `🌏 Team Bot`]
  ], { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast"} : {}) }, message: { contactMessage: { displayName: NombreDelBot, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;0,;;;\nFN:0,\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}})
  
  m.reply(`Hola @${m.sender.split(`@`)[0]} estos son los contactos de mis creadores, no hagas spam!!`, null, {mentions : [m.sender]})
} 

handler.help = ["creadora","owner"]
handler.tags = [""]
handler.command = /^(owner|creadora|dueña|creador|dueño)$/i
export default handler

async function sendContactArray(conn, jid, data, quoted, options) {
  if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data]
  let contacts = []
  for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
    number = number.replace(/[^0-9]/g, '')
    let njid = number + '@s.whatsapp.net'
    let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {}
    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
    contacts.push({ vcard, displayName: name })
  }
  return await conn.sendMessage(jid, {
    contacts: {
      displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
      contacts,
    }
  },
  {
    quoted,
    ...options
  })
}