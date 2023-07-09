/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/

import Connection from"../lib/connection.js";let handler=async(e,{conn:n})=>{(await Connection.conn).user.jid==n.user.jid?n.reply(e.chat,"Por favor use el comando desde el número principal del Bot!",e):(await n.reply(e.chat,"Cerrando conexión para Sub-Bots...\nᴱˡ ᵇᵒᵗ ᵖʳᶦⁿᶜᶦᵖᵃˡ ˢᵘᶠʳᶦʳᵃ́ ᵘⁿ ᵖᵉᑫᵘᵉⁿ̃ᵒ ʳᵉᶦⁿᶦᶜᶦᵒ ᵈᵉ ʳᵉᵈ",e),n.ws.close())};handler.help=["stopserbot"],handler.tags=["esclabot"],handler.command=/^stopserbot$/i,handler.owner=!0,handler.fail=null;export default handler; //[ Jadibot-By Aiden ]//

/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/