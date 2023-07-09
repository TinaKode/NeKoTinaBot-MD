/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/

async function handler(e,{conn:a,usedPrefix:l}){if(global.clientes.length<1)return e.reply("Actualmente no hay sub-bots activos...");const t=[...new Set([...global.clientes.filter((e=>e.user&&"close"!==e.state)).map((e=>e.user))])],n=t.map((e=>e.jid));await a.getName(n[0]);await e.reply("*[ Lista de Sub-Bots ]*\n\n~La creadora del bot no se hace responsable en lo absoluto de lo que ocurra al Bot principal y Sub-Bots!~\n\n"+t.map(((e,a)=>`${a+1}. wa.me/`+e.jid.replace(/[^0-9]/g,"")+" 🪴")).join("\n"))}handler.help=["listbots"],handler.tags=["esclabot"],handler.command=/^listbots$/i;export default handler; //[ Jadibot-By Aiden ]

/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/