/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/
import db from"../lib/database.js";const {proto,generateWAMessage,areJidsSameUser} = (await import("@whiskeysockets/baileys")).default;export async function all(e,s){if(e.isBaileys)return;if(!e.message||!e.msg||!e.msg.fileSha256)return;if(!(Buffer.from(e.msg.fileSha256).toString("base64")in db.data.sticker))return;const t=db.data.sticker[Buffer.from(e.msg.fileSha256).toString("base64")],{text:i,mentionedJid:a}=t,r=await generateWAMessage(e.chat,{text:i,mentions:a},{userJid:this.user.id,quoted:e.quoted&&e.quoted.fakeObj});r.key.fromMe=areJidsSameUser(e.sender,this.user.id||this.user.jid),r.key.id=e.key.id,r.pushName=e.pushName,e.isGroup&&(r.participant=e.sender);const n={...s,messages:[proto.WebMessageInfo.fromObject(r)].map(this.serializeM),type:"append"};this.ev.emit("messages.upsert",n)}
/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/