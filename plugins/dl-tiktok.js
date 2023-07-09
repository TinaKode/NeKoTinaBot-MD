import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) m.reply(`✳️ Ingrese un link de Tiktok\n\n 📌 Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`)
if (!args[0].match(/tiktok/gi)) m.reply(`❎ verifica que el link sea de tiktok`)
m.react('⌛')

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
*⧱┉┉┄┄❍-➤『 𝗧𝗜𝗞𝗧𝗢𝗞 - 𝗗𝗟 』*
*▢👤 Nombre:* ${p.nickname}
*▢🚻 Username:* ${p.unique_id}
*▢🕰️ Duración:* ${p.duration}
*▢📑 Descripción:* ${p.description}
*╰┉┉┅┄┄•◦ೋ•◦❥•◦ೋ*`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react('✔️')} catch { try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) m.reply('❎ Error al descargar el video')
    conn.sendFile(m.chat, url, 'fb.mp4', `
*⧱┉┉┄┄❍-➤『 𝗧𝗜𝗞𝗧𝗢𝗞 - 𝗗𝗟𝟮 』*
*▢👤 Nickname:* ${nickname} ${description ? `\n*▢📑 Descripción:* ${description}` : ''}
*╰┉┉┅┄┄•◦ೋ•◦❥•◦ೋ*`, m)
m.react('✔️')} catch { m.reply(`❎ Error al descargar el video`)}}    
}  
handler.help = ['tiktokdl']
handler.tags = ['servicio']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i

export default handler