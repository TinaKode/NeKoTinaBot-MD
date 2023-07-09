/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/
import{execSync as a}from"child_process";let handler=async r=>{var t=a("git remote set-url origin https://github.com/TinaKode/NeKoTinaBot-MD.git && git pull");r.reply(t.toString())};handler.help=["actualizarbot"],handler.tags=["propietario"],handler.command=/^(actualizarbot|actualizar|update)$/i,handler.rowner=!0;export default handler;
/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/