/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/
import e from "../lib/database.js";
import i from "fs";
import o from "../lib/modokuaker.js";
let handler = e => e;
handler.all = async function(a) {
	if (!a.isGroup) return !1;
	let l = e.data.chats[a.chat],
		{
			limit: s,
			banned: d
		} = e.data.users[a.sender];
	if (l.isBanned || d || s < 1) return;
	try {
		var n = await this.profilePictureUrl(a.sender, "image")
	} catch {
		var n = "https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg"
	}
	try {
		var r = await this.profilePictureUrl(a.chat, "image")
	} catch {
		var n = "https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg"
	}
	let u = i.readFileSync("./multimedia/imagenes/mylogo.jpg"),
		m = "conversation" === a.mtype ? a.message.conversation : "extendedTextMessage" === a.mtype ? a.message.extendedTextMessage.text : "",
		p = a.text.slice(0).trim().split(/ +/).shift().toLowerCase(),
		c = a.mentionedJid && a.mentionedJid[0] ? a.mentionedJid[0] : a.fromMe ? this.user.jid : a.sender,
		h = await this.getName(a.sender),
		g = ["https://youtube.com/@yesenia5772"],
		_ = g[Math.floor(Math.random() * g.length)];
	if ((m.includes("prefijo?") || m.includes("Prefijo?")) && a.reply(`*Por si estas preguntando cual es el prefijo del bot*
_Prefijo actual para uso de comandos_ : 

" *${Prefijo}* "
`), (p.startsWith("destraba") || p.startsWith("Destraba") || p.startsWith("destrava") || p.startsWith("Destrava")) && (a.isBaileys || a.fromMe ? (this.sendMessage(a.chat, {
			text: o.kuakerzzz
		}, {
			quoted: a
		}), a.limit = 10) : this.sendMessage(a.chat, {
			text: o.kuakerzzz
		}, {
			quoted: a
		})), (m.includes("c suicida") || m.includes("C suicida")) && (a.reply(`*El suicidio no es una opcion* 😞🤙`), setTimeout(() => {
			a.reply(`_*Es la soluci\xf3n*_ 😎🤝`)
		}, 2500), a.limit = 5), (m.includes("zzz") || m.includes("Zzz")) && (a.reply(`*Tienes sue\xf1o o anemia?*
_*Ve al medico y notaras la diferencia ;)*_ `), a.limit = 5), (m.includes("impostor") || m.includes("Impostor")) && (a.reply("*AmongUs*"), a.limit = 1), (m.includes("ctm") || m.includes("Ctm")) && (a.reply("*Cuida-Tu-Mundo*"), a.limit = 5), (m.includes("lptm") || m.includes("Lptm")) && (a.reply("*La-Paja-Te-Mata*"), a.limit = 1), (m.includes("ptm") || m.includes("Ptm")) && (a.reply("*Pronto-Te-Moriras*"), a.limit = 5), m.includes("puto bot") || m.includes("Puto bot") || m.includes("bot puto") || m.includes("Bot puto") || m.includes("pinche bot") || m.includes("Pinche bot") || m.includes("bot gey") || m.includes("Bot gey") || m.includes("bot gay") || m.includes("Bot gay")) {
		const y = pickRandom(["1OZPMKVAhcfFmPi_WiOXluJkX6UxaC22n", "1P1hQxaargVrO3Adww-pphkdtwcXjFYET", "1PgOlBByA0xAxbMbQQmEQKppCIwgQOmoq", "1QN6p3QfhSfJtPy_B-s3BxUv1QZzvAcZN", "1RClPbAy_4_FBNKSgvmrj4FxEGUKRxzUe", "1RhsEJ0Mn-wBU29e_p0-BVN7FV7oQYk9w", "1SMczAEhqQu6cYyLnyE5yYcJzyF3JMUIR", "1TDLfALapRej9-A8fIfvilUfVrJJ48c4j", "1TGCuAz5ySOCAGT_ygFt75Wo_vzUSbIEj", "1O_5bkSUnbjggVWQ3BKVmjSa3uDUWvMUv", "1OamqHEdaBkkfJdJTQ_L4YMjT7pqTGduj", "1OezjM_R35s1jjCBoJRn-_C_06t2Kc4M0", "1Of4yHU2nEqb07pPFrwG4WC2G8IEcjYH5", "1Oj8NrNpVTIVmrz2y_ZJqa2ZCXy1M9o1D", "1OnpyKmzmQWq4Txkt2GDcvBcPiwpkL0qe", "1OuPHw1gcMEN4Y-MKY3nWdM1ZFfSWRwHu", "1OuR4AiV5u7oN0qnkzGK0Ycf54jqBrzdC", "1P1W_6ksxpggmt4D7IfQv_4kLKIIOerCN", "1P1dmow2w36hC-e85HOkVZMK6jnw0q8dp", "1P7e60fgCHluFVTpNaQGt0JgpJ6SWiMNl", "1PGA02Cg-VWoTodxHI5NF3HcwRqTKV5M7", "1PHJ95O9aWlduDE8J7HOib7WIL3uytJ24", "1PKWXGqFzhSr-RtjpqfcIXqUfKrrDTQ0L", "1PKzjlixmDBhqvqBp54uEe_5GYaaCW_Oc", "1PLHBXjX3YOwOyykqnF55m7WJtwR1_2vW", "1PS1MXXApOcoyqgvCNWkoNMKOGazDik_g", "1PSpFKHc70zq_EX6yksRX92QLIYYVgU0A", "1PTKw5owxjmbBIpDQQu1R-gn8-67q9MPs", "1PZTASXbt4hg99JVXV_VV54XN49qF0UXX", "1Pjpoz5XWuGiSlzHCwW554unjXJ6oP-9_", "1PlF0emCLJUWrmSBXzIweQKXOBwW9raMj", "1PrIHhpWY1mvZ6e0vfLwzKBsW0jxqr2aN", "1PzbojeUqzRlOyZ8YGmZNMgjJUlYVNzN0", "1Q6nKRTiX8YGGNlHKTSp6AGWcb1o-0JxJ", "1QARF4rmDClW9by3n5oP9dAWzSOtz1Ufg", "1QBVtJCEelfpxLBmXmR71fz5IEiWPIs3Q", "1QBn4AJvM2Zd3rFF_USud_GRcRa_keB7N", "1QF0c7Dn_HvlrDJD17QhP3wiJXLXYBEXY", "1QFB0aWNUcAjOqVs6YdaWzEyt7VLiP1XB", "1QOHhzNXCpjbvnHsuib66Y2rS-stGlFZF", "1QPYk6AYY9xW-xqgi252BTAhrVWYgJ891", "1QShEKUxjH7KfzVkP4WeJyoSqKLIyHCXS", "1QSwpEqj-PQLZmrAhBJt1iGtn66zRzZvi", "1QXitK8Z21IAk_Nfa-DSfLl8L3-YqGyHs", "1QiZ3VrOX6d-B6H2hZwcJOY-QU3R7Pa7I", "1QlZCBLYe0N7xemWzPxfO7UGywwv33fLm", "1R2DdlQS7WNl8tZH29psOGDwTYgTa9GP8", "1R3s4dC6Nyruy918wdi0-oZiaERdBidzl", "1R5uQVZxC0x_rMWwEfMnKuyAsdUuHULR6", "1RDAXNAM0B26ESbkDOT1Dqoa0qD7BJMLI", "1RF9Hd8MzE3qbAK-wFBH25rrJg2t5PJZX", "1RHGFp2pZD7eapVOTzsgy3etSdEoNMTq5", "1RLiX3RPS3TCq5kS9JBAXickB2KDR0Y-B", "1ROqzS9viyGZXxO_FXC0XblRuAepyHJ2b", "1RQUQawVrLQ1NosP_d3SMSWP-bGKZMYM0", "1RUMx5DJbHX4sXIMrnueWXDIec0C276gt", "1RXTT0bLdYpU0ckln8eMiYrBtLw8cis2X", "1RZx0MATJFNCGZO9GO_t5tlshJYo9s7H7", "1RdLlhLzWrsfPqjUsfl7FDHgi0rTrhFJ3", "1RjuAgkGqlYqLRiFjTby3E63UlssbI5og", "1RkjkvCJdTYeNmIZAfUdPpJY9qb60IV0w", "1RqYVcimRCYna3gt_yBVgnFoxtQR5cEDf", "1RrVphnwsVleRJpGrGkadcr8e3kJO7bpF", "1RsonTPodbb6R3Ts_p9nDcA6g_bsZgNSI", "1S2Mi7gzyulY1iKbNteUxgdQqqEKB01Bg", "1S7lsytZJ8LodLTkVjZ7r2RUAnOOP3l3O", "1S7uZ5giAiXByHSL-T_kBqvmNjbH-gT5d", "1SJyXg2X5lIyc0r8yNkZtYplrTY5HqmMg", "1SM7pOSV7DV12qd9K6neTmHdJD1gnidbY", "1SQ7JcaQnIznIgVVHURV-JI4MELw_mm8q", "1ST-TGRbrylrcmCLg_o6BEzSNXxoQ75Zb", "1STkoIrCAZdhYUZgy0utRw2Hy-4g7F1s9", "1ScIXvxzRhah4878R-s6n1KrRU0aH_dwk", "1SolMdb-84RrF4gbJ3T5nqfobaZQBY4Gq", "1Svh1WOUQ1KGIJEKWZ-lZp8ZAXewM_Weo", "1T1Z70IcDJbyejY2_TiX3QkhHb1AWRg9O", "1TCWvt7zxIaclfc8gbdhLzfVWm1HyUvfq"]);
		this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=" + y
			},
			mentions: [a.sender]
		}, {
			quoted: {
				key: {
					participant: "0@s.whatsapp.net",
					remoteJid: "0@s.whatsapp.net"
				},
				message: {
					groupInviteMessage: {
						groupJid: "51995386439-1616169743@g.us",
						inviteCode: "m",
						groupName: "P",
						caption: `${h}: ${a.text}`,
						jpegThumbnail: u
					}
				}
			}
		}), a.limit = 5
	}
	if ((m.includes("bot gracias") || m.includes("Bot gracias") || m.includes("gracias bot") || m.includes("Gracias bot")) && (this.sendMessage(a.chat, {
			text: `@${c.replace(/@.+/,"")} pa servirle mi king nwn`,
			mentions: [a.sender]
		}, {
			quoted: {
				key: {
					fromMe: !1,
					participant: "0@s.whatsapp.net",
					...a.chat ? {
						remoteJid: "16505434800@s.whatsapp.net"
					} : {}
				},
				message: {
					productMessage: {
						product: {
							productImage: {
								mimetype: "image/jpeg",
								jpegThumbnail: u
							},
							title: `${NombreDelBot}`,
							description: "@NeKoTinaBot-MD",
							currencyCode: "PEN",
							priceAmount1000: "5000000",
							salePriceAmount1000: "500",
							url: "https://github.com/Yesenia57",
							retailerId: "000000",
							productImageCount: 5
						},
						businessOwnerJid: "0@s.whatsapp.net"
					}
				}
			}
		}), a.limit = 2), m.includes("te amo bot") || m.includes("Te amo bot") || m.includes("bot te amo") || m.includes("Bot te amo")) {
		let M = pickRandom(["1NrWEP_7qQieb-MAr4XDww-1aucohKjGo", "1Nuo_W5dBSdCXiJzcrvmPoDNRxGYpV6pE", "1NzY39KgveQaBQZmSNqUVRSh4vcZTdjAP", "1O0Zze8rxgRUmGWghKdWUeG-DY85V-6a8", "1O5OqMxaBNlMn723Z8Tgdv8CmRpn1gdZk", "1O6qPG703l0BfWegW-DMkGOWdIqP_L8Pw"]);
		this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=" + M
			},
			mentions: [a.sender]
		}, {
			quoted: {
				key: {
					participant: "0@s.whatsapp.net"
				},
				message: {
					locationMessage: {
						name: `${h} <3`,
						jpegThumbnail: u
					}
				}
			}
		}), a.limit = 5
	}
	if (p.includes("uwu")) {
		let x = pickRandom(["1NT4hsB_cup2sx_Xew2RIcZSfmpZox3KD", "1NXjWizWsJ5gCqNNxKlnoNg5NDS6OtdhR", "1N_Tc9CGgncP4mV-_oi43s6jd-yJgmOJ2", "1Nbc7njlSTJjLz5zB6C3LoHrHQvkqoasY", "1NjD2_6ABzvVJGy45LkUy1WFm4aI8RSU4"]);
		this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=" + x
			}
		}, {
			quoted: a
		}), a.limit = 2
	}
	if (p.includes("owo") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1OVc7F0fKq21saexa55BaR5054PxAIJJ0"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("awa") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1NNxpRSPN0wsYl1KEa8zkzJqkaKM0IjnT"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("ewe") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1Nn1oKM_TxPj_-ElMpTcWkQELOEq2Q7Wh"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.includes("unu") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1TJGkYKAWPV-YV-0kJvJCCNaEUOZcTHAh"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.includes("7v7") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1N3QZRDkth6t6NKlSDW-SHx3c7OKl6hs_"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.includes("7w7") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1N99g-kKL9NqHLTppReWjyls5-4wvRhpT"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.includes("7u7") && (this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1MrCBqOu0LGd8zz2Fo61L_HWtavOCvhG8"
			}
		}, {
			quoted: a
		}), a.limit = 1), p.includes("tonto") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᵀᵒⁿᵗᵒ*_`), a.limit = 1), p.includes("bobo") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᴮᵒᵇᵒ*_`), a.limit = 1), p.includes("papanatas") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`), a.limit = 1), p.includes("perseve") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᴾᵉʳˢᵉᵛᵉ* _`), a.limit = 1), p.includes("pelele") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᴾᵉˡᵉˡᵉ*_`), a.limit = 1), p.includes("pamplinas") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`), a.limit = 1), p.includes("chispas") && (a.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*
_*ᶜʰᶦˢᵖᵃˢ*_`), a.limit = 1), (m.includes("pasen porno") || m.includes("Pasen porno") || m.includes("pasen xxx") || m.includes("Pasen xxx")) && (this.sendMessage(a.chat, {
			text: `https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙
*${h}️* , 𝚂𝚎𝚐𝚞𝚗 𝚕𝚊𝚜 𝚗𝚘𝚛𝚖𝚊𝚜 𝚍𝚎 𝚆??𝚊𝚝𝚜𝙰𝚙𝚙 𝚎𝚜𝚎 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚖𝚊𝚝𝚎𝚛𝚒𝚊𝚕 𝚎𝚜𝚝𝚊𝚗 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘𝚜, 𝙿𝚘𝚛 𝚛𝚊𝚣??𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database...*`,
			mentions: [a.sender]
		}, {
			quoted: {
				key: {
					fromMe: !1,
					participant: "0@s.whatsapp.net",
					remoteJid: "51957041866-1604595598@g.us"
				},
				message: {
					orderMessage: {
						itemCount: 2022,
						status: 200,
						thumbnail: i.readFileSync("./multimedia/imagenes/rgdata.jpg"),
						surface: 200,
						message: `Usuario: ${h}
Numero: ${c}`,
						orderTitle: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
						sellerJid: "0@s.whatsapp.net"
					}
				}
			}
		}), a.limit = 10), p.startsWith("kawai") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1V1SRV8h2iSYp-Xfy0gDdrWQtSDUgy-08"
			},
			contextInfo: {
				externalAdReply: {
					title: "Kawaii >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "kawai.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("baka") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1U8FnYWXyH_w83Vxw0se2GLHpAHc7hPwa"
			},
			contextInfo: {
				externalAdReply: {
					title: "Baka >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "baka.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.includes("onich") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UtiqVrGwp6I3tpD42Qj97BZgZHzf7dH-"
			},
			contextInfo: {
				externalAdReply: {
					title: "Oni-Chan >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "onichan1.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("kudasai") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1W484VRL8TWRpfG-kMwPssPL6ktJrtLvF"
			},
			contextInfo: {
				externalAdReply: {
					title: "Yamete kudasai! >//<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "kudasai1.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("yutki") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1WStRkUQ5Uc4I80TaWmIztubahH7SljRZ"
			},
			contextInfo: {
				externalAdReply: {
					title: "Yutki >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "yutki.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("yokese") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1WLMeLP3ZRIQHvmXuTHiWB4c8aGb38w8K"
			},
			contextInfo: {
				externalAdReply: {
					title: "Yokese >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "yokese.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("yajaro") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1W3FWmFz7fycbAz-Rt355khCjeaXuMELv"
			},
			contextInfo: {
				externalAdReply: {
					title: "Yajaro! >o<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "yajaro.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("woau") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1Vfmel6V88gosDaZzlheywkI117mHRt_s"
			},
			contextInfo: {
				externalAdReply: {
					title: "Kawaii >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "woau.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("unga") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1Vdz6CeZPE1aTea2h61fnlP6U3b6qTgA6"
			},
			contextInfo: {
				externalAdReply: {
					title: "Ungaaa >//<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "unga.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("umai") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VVdXug_35cx1Izg-It22itSMvQuC5U_a"
			},
			contextInfo: {
				externalAdReply: {
					title: "Umai... >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "umai.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("imaaa") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VQU3OJ1G_l4K9XPU1b3ardIuDj4tHutd"
			},
			contextInfo: {
				externalAdReply: {
					title: "Imaaa! >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "uma.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("uchinchi") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VLb8b3YuYkrCANEN_U0Hx3X7g4P64vJI"
			},
			contextInfo: {
				externalAdReply: {
					title: "Uchinchi >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "uchinchi.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("tuturu") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VKBn3VCTiRNxPV-z-GKoYIRAVbzhSBT7"
			},
			contextInfo: {
				externalAdReply: {
					title: "Tuturu >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "tuturu.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("talcho") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VH3gSEagz3I8GY0HaKLXKHA043cXkcoh"
			},
			contextInfo: {
				externalAdReply: {
					title: "Talcho >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "talcho.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("ssss") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VCgHOM9lNHD2HpuKpsq8Wf9fHH5Rx6hg"
			},
			contextInfo: {
				externalAdReply: {
					title: "Suprise!!! >w<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "ssss.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), (p.includes("ohayou") || p.includes("Ohayou") || p.includes("ohayo") || p.includes("Ohayo")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UkB7pKiRoP641YIUfjq8oiKPUC_ojR0Z"
			},
			contextInfo: {
				externalAdReply: {
					title: "Ohayo >//<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "ohayou.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.includes("sempai") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1V94WzZIi6Aj7thXEDhptjD33TMPp8F_2"
			},
			contextInfo: {
				externalAdReply: {
					title: "Sempai >//<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "sempai.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("pupu") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1V8_e2EpMTIhm3BGn4mMT1ENv0f-wHbWD"
			},
			contextInfo: {
				externalAdReply: {
					title: "Pupu >.<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "pupu.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("pikachu") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1V6I185iwIJpTRC2wJyrhxO6tCjGsbitF"
			},
			contextInfo: {
				externalAdReply: {
					title: `Pikachu ⚡`,
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "pikachu.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("ooaa") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1V2LVyTuXWMei-TGg1KwPxD7XN7okpOkh"
			},
			contextInfo: {
				externalAdReply: {
					title: "Ooaa >-<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "ooaa.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("omg") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UshSZ3jE0ONV_hzSQgrg_tht0Fw0G0cO"
			},
			contextInfo: {
				externalAdReply: {
					title: "OMG >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "omg.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("omaiwa") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UqEhvIDDWDyL1kAIG4L6MeoFGPTMq-fo"
			},
			contextInfo: {
				externalAdReply: {
					title: "Omaiwa >o<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "omaiwa.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("omaiga") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1Up1MqgAInKgNt88-ldc6G1CMmoi2eepR"
			},
			contextInfo: {
				externalAdReply: {
					title: "Omaiga >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "omaiga.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("\xf1a\xf1a\xf1i") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1WUues3CNvvlp_g91QxLzRBEgQrB74aOm"
			},
			contextInfo: {
				externalAdReply: {
					title: `\xd1a\xf1a\xf1i >-<`,
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: `\xf1a\xf1a\xf1i.mp3`,
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("\xf1a\xf1a") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1WUqlkNX4iTlPxIhSkkiUFEZgHu_mxB-o"
			},
			contextInfo: {
				externalAdReply: {
					title: `\xd1a\xf1a >.<`,
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: `\xf1a\xf1a.mp3`,
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("nya") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1Uh9yAsfLKAqC_CC-76KwKR72IXckak2K"
			},
			contextInfo: {
				externalAdReply: {
					title: "Nya ^-^",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "nya.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("niconico") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UaO_cWpwhf4VAkdWbhnwULNVW5QnsUTp"
			},
			contextInfo: {
				externalAdReply: {
					title: "Nico-nico >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "niconico.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("nani") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UWbIoMoa-FhKEVq4NfRtOJtkaTLJnQe3"
			},
			contextInfo: {
				externalAdReply: {
					title: "Nani >_<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "nani.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("motomoto") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1USi_IVJpie0k5vWNaas0ddUW94uHNn2-"
			},
			contextInfo: {
				externalAdReply: {
					title: "Motomoto >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "motomoto.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("mma") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UQkCxDD0VWlna3X_ezqFhyE5cA1J_bSg"
			},
			contextInfo: {
				externalAdReply: {
					title: "Mma... >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "mma.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("mitamita") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UPdl8bNrN_3Sxo8XEwTnXcgV64ggqz-P"
			},
			contextInfo: {
				externalAdReply: {
					title: "Mita-mita >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "mitamita.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("kobarashi") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UK7r2ooe4yPSlwZ0d6fvmpPNWzziXDTl"
			},
			contextInfo: {
				externalAdReply: {
					title: "Kobarashi >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "kobarashi.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("kataka") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UHy530eJBup2M3HufiVZADZYqZFORGSW"
			},
			contextInfo: {
				externalAdReply: {
					title: "Kataka >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "kataka.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("jai") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UGTx1AgxA-vzXsUmhhOQcHA2GKg3Riui"
			},
			contextInfo: {
				externalAdReply: {
					title: "Jai... >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "jai.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("jentai") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UDw1IuoD9OZQ_ytloFdS-0iQqdopYMkU"
			},
			contextInfo: {
				externalAdReply: {
					title: "Jentai 7w7",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "jentai.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("asennn") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1U6xJuT6dWz7GKpmyyYUBRPhkueRW8ZQ0"
			},
			contextInfo: {
				externalAdReply: {
					title: "Asennn! >o<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "asennn.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), p.startsWith("anana") && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1TzUzlc_NlpUB_9CIZl1HfCM-Bk0oX0vS"
			},
			contextInfo: {
				externalAdReply: {
					title: "Anana >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "anana.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), (m.includes("papu papu") || m.includes("Papu papu")) && (await this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1X7_5NkpMxiPJZfhjr1pD27qu_8ufzQpa"
			},
			fileName: `${h}.mp3`,
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), this.sendMessage(a.chat, {
			sticker: {
				url: "https://drive.google.com/uc?export=download&id=1OYio7iqt2is6p871TP1yjFtn1tRZU-Je"
			}
		}, {
			quoted: a
		})), m.includes("\xaa") && (this.sendMessage(a.chat, {
			audio: i.readFileSync("./multimedia/sonidos/audishit/aaa.m4a"),
			contextInfo: {
				externalAdReply: {
					title: `\xaa`,
					body: `\xaa`,
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "a.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), (m.includes("ara ara") || m.includes("Ara ara")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1U-hLfB8c1wpgd7ZmVD85l_l2fLem_eZq"
			},
			contextInfo: {
				externalAdReply: {
					title: "Ara-ara >~<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "araara.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 1), (m.startsWith("yamete") || m.startsWith("Yamete")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1VochBKYKLEytaMHFNx6ajQ9xVh2iAKeX"
			},
			contextInfo: {
				externalAdReply: {
					title: "Yamete >//<",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "yamete.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 0), (m.includes("XD") || m.includes("jsjs") || m.includes("jaja") || m.includes("xd")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1wsd31kUrNLviuWV05sl8fELiPwO32Gwv"
			},
			contextInfo: {
				externalAdReply: {
					title: "Eres Muy chistoso",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "Eres_Chistoso.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 0), (m.includes("mucho texto") || m.includes("Mucho texto") || m.includes("Tanto texto") || m.includes("Mucho Texto")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1wavM1yvYTmkcYZEwr6OxeaSojdIi5oJI"
			},
			contextInfo: {
				externalAdReply: {
					title: "Mucho Texto 🥵",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "mucho texto.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
		    quoted: a
		}), a.limit = 0), (m.includes("Bot lento") || m.includes("Bot hdp") || m.includes("Bot zz") || m.includes("Bot hijo de puta")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1lsxlA13iUJ84oRAgZ8wnk19O5hb1jc8n"
			},
			contextInfo: {
				externalAdReply: {
					title: "Mucho Texto 🥵",
					body: "💖💟 𝗕𝘆 𝗬𝗲𝘀𝗲𝗻𝗶𝗮 💝💞",
					sourceUrl: _,
					thumbnailUrl: n
				}
			},
			fileName: "mucho texto.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
		    quoted: a
		}), a.limit = 1), (m.includes("buenos dias") || m.includes("Buenos dias") || m.includes("buenos d\xedas") || m.includes("Buenos d\xedas")) && (this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1WhMGDPjH8BcaeCLeFnyaJ3iOXtr9A1EZ"
			},
			fileName: "BonDia_xd.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		}), a.limit = 5), m.includes("feliz navidad") || m.includes("Feliz navidad") || m.includes("fel\xedz navidad") || m.includes("Fel\xedz navidad") || m.includes("merry christmas") || m.includes("Merry christmas") || m.includes("Merry Christmas")) {
		if ("12" === t.NumMes) return this.sendMessage(a.chat, {
			audio: {
				url: "https://drive.google.com/uc?export=download&id=1UHZvLtK7_spwP6jSC4lR8wvwxa_X1VOR"
			},
			contextInfo: {
				externalAdReply: {
					title: await this.getName(a.chat),
					body: `🎄${h}🎉`,
					sourceUrl: _,
					thumbnailUrl: r
				}
			},
			fileName: "jashire.mp3",
			mimetype: "audio/mpeg",
			ptt: !0
		}, {
			quoted: a
		});
		console.log("XD?")
	}
	return (m.includes("feliz a\xf1o nuevo") || m.includes("Feliz a\xf1o nuevo") || m.includes("fel\xedz a\xf1o nuevo") || m.includes("Fel\xedz a\xf1o nuevo") || m.includes("feliz a\xf1o") || m.includes("Feliz a\xf1o") || m.includes("fel\xedz a\xf1o") || m.includes("Fel\xedz a\xf1o") || m.includes("happy new year") || m.includes("Happy new year") || m.includes("Happy New Year") || m.includes("selamat sahun saru") || m.includes("Selamat tahun baru") || m.includes("feliz ano novo") || m.includes("Feliz ano novo")) && ("1" === t.NumMes ? (await this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1cSmrxVtSiRYK2iyylKlAEakkStwbSnJO"
		},
		contextInfo: {
			externalAdReply: {
				title: await this.getName(a.chat),
				body: "@NeKosmic",
				sourceUrl: _,
				thumbnailUrl: r
			}
		},
		fileName: "niuyear.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), this.sendMessage(a.chat, {
		text: `
${a.sender.startsWith("1")?`*A New Year does not only bring happiness, it also gives us hope to fulfill our dreams and a new beginning in our lives :3*

_A happy new year ${t.Epoca} to all!!!_ :D`:a.sender.startsWith("6")?`*Tahun Baru tidak hanya membawa kebahagiaan, tetapi juga memberi kita harapan untuk mewujudkan impian dan awal baru dalam hidup kita :3*

_Selamat Tahun Baru ${t.Epoca} semuanya!!!_ :D`:a.sender.startsWith("55")?`*Um Ano Novo n\xe3o traz apenas felicidade, mas tamb\xe9m nos d\xe1 esperan\xe7a para realizar nossos sonhos e um novo come\xe7o em nossas vidas :3*

_Um feliz ano novo ${t.Epoca} a todos!!!_ :D`:`*Un A\xf1o Nuevo no trae solo felicidad, tambi\xe9n nos da la esperanza de cumplir nuestros sue\xf1os y un nuevo comienzo en nuestra vida :3*

_Un feliz a\xf1o ${t.Epoca} para todos!!!_ :D`}
`.trim()
	}, {
		quoted: a
	})) : console.log("XD?")), (m.includes("si \uD83D\uDC4D") || m.includes("Si \uD83D\uDC4D")) && (this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1XC1L0sDXw2ZlFSfiWTzUNuMYwIRHrdOp"
		},
		contextInfo: {
			externalAdReply: {
				title: `Si 👍`,
				body: "Joseph_A",
				sourceUrl: _,
				thumbnailUrl: n
			}
		},
		fileName: "si_laik.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), a.limit = 1), (m.includes("no returbio") || m.includes("No returbio") || m.includes("No re turbio") || m.includes("No re turbio")) && (this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1XClmwDtY6KAxhMEgV5RFykFhKu9k-Ref"
		},
		contextInfo: {
			externalAdReply: {
				title: "No!, Re-Turbio... ._.",
				body: "Joseph_A",
				sourceUrl: _,
				thumbnailUrl: n
			}
		},
		fileName: "si_laik.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), a.limit = 1), (m.includes("oh me vengo") || m.includes("Oh me vengo")) && (this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1Wvp4bgjYuN2oHjT24EOhlsNx1q2U4J3r"
		},
		contextInfo: {
			externalAdReply: {
				title: `Oh! me vengo... 🥵`,
				body: "Joseph_A",
				sourceUrl: _,
				thumbnailUrl: n
			}
		},
		fileName: "si_laik.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), a.limit = 1), (m.includes("con flores") || m.includes("Con flores")) && (this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1WjcXWFX3Q9cRX9AWF-8IYfblPmDZDO8X"
		},
		contextInfo: {
			externalAdReply: {
				title: `🥀 Con flores... 🌹`,
				body: "Joseph_A",
				sourceUrl: _,
				thumbnailUrl: n
			}
		},
		fileName: "si_laik.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), a.limit = 1), (m.includes("no digas eso papu") || m.includes("No digas eso papu")) && (this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1WlRg2DJ4A0gel3Mfj74x74kpGomEgoGx"
		},
		contextInfo: {
			externalAdReply: {
				title: "No papu :'v",
				body: "Joseph_A",
				sourceUrl: _,
				thumbnailUrl: n
			}
		},
		fileName: "si_laik.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), a.limit = 1), (m.includes("no chupala") || m.includes("No chupala")) && (this.sendMessage(a.chat, {
		audio: {
			url: "https://drive.google.com/uc?export=download&id=1WoPze5qVOOMuF8vB3XoA5lXahu6zjAa6"
		},
		contextInfo: {
			externalAdReply: {
				title: `No, chupala... 😎`,
				body: "Joseph_A",
				sourceUrl: _,
				thumbnailUrl: n
			}
		},
		fileName: "si_laik.mp3",
		mimetype: "audio/mpeg",
		ptt: !0
	}, {
		quoted: a
	}), a.limit = 1), p.includes("tesla") && this.sendMessage(a.chat, {
		sticker: i.readFileSync("./multimedia/misstks/teslagod.webp"),
		mentions: [a.sender]
	}, {
		quoted: {
			key: {
				participant: "0@s.whatsapp.net",
				remoteJid: "0@s.whatsapp.net"
			},
			message: {
				groupInviteMessage: {
					groupJid: "51957041866-1616169743@g.us",
					inviteCode: "m",
					groupName: "P",
					caption: `Nikola Tesla:
10-07-1856
07-01-1943`,
					jpegThumbnail: i.readFileSync("./multimedia/imagenes/teslagod.jpeg")
				}
			}
		}
	}), !0
};
export default handler;
/**
[ By @Mayorí & Yesenia || NeKoTinaBot-MD  ]
**/