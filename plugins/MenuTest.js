import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀 𝗕𝗕☀️!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`𝗛ola, ${taguser}* Espero que tengas un lindo dia o noche 🐕

╭─────────────┈
│╭─────────────┈⊷
││「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」  
│╰────────────┈⊷  
│           
│𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭:  
│https://github.com/AleXD0009/Jotchua-Bot
│
│ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ꜱᴀʙᴇʀ ᴛᴏᴅᴏ ʟᴏ ɴᴜᴇᴠᴏ ᴅᴇʟ ʙᴏᴛ:
│ _ComandosNuevos_
│ _Nuevo_
│
│╭────────────────
││𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
││𝙥𝙧𝙚𝙛𝙞𝙟𝙤:| . | / | # |
│╰────────────────         
│╭────────────────     
││🐶͘͜  _owner | creador_
││🐶͘͜  _repo | repositorio_
││🐶͘͜  _estado_
││🐶͘͜  _grupos | gruposjt_
││🐶͘͜  _dash | dashboard_
││🐶͘͜  _speedtest_
││🐶͘͜  _instalarbot | infoinstalar_
││🐶͘͜  *bot/sub bot:*${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
│╰────────────────  
│ 
│╭─────────────┈⊷
││ 「 𝐌𝐄𝐍𝐔𝐒 」
│╰────────────┈⊷            
│╭────────────────            
││🐶͘͜  _MenuPorn | porn_
││
││🐶͘͜  _menuanimes | animes_
││
││🐶͘͜  _menuaudios | audios_
││
││🐶͘͜  _MenuCreador_
││
││🐶͘͜  _MenuDescargas | Descargas_
││
││🐶͘͜  _MenuRPG | RPG_
│╰────────────────
│ 
│ 
│╭─────────────┈⊷
││ 「 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒」
│╰────────────┈⊷
│╭────────────────        
││🐶͘͜  _kiss_
││🐶͘͜  _slap_
││🐶͘͜  _pat_
││🐶͘͜  _dado_
│╰────────────────
│
│╭─────────────┈⊷
││「𝐈𝐀 / 𝐁𝐎𝐓/ 𝐒𝐈𝐌𝐒𝐈𝐌𝐈」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _bot_
││🐶͘͜  _$iaimagen
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭──────────────── 
││⟼ Mensajes en espera
││🐶͘͜  _fixmsgespera_
│╰────────────────
│
│
│╭─────────────┈⊷
││「 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _join *<enlace / link / url>*_
│╰────────────────
│
│
│╭─────────────┈⊷
││「 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
│╰────────────┈⊷    
│╭──────────────── 
││🐶͘͜  _serbot_
││🐶͘͜  _serbot --code_
││🐶͘͜  _token_
││🐶͘͜  _bots_
││(si quiere sacar el subbot vaya 
││a dispositivos vinculados y cierre la sesion)
│╰────────────────
│
│   「 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄𝐒 𝐁𝐎𝐓 」
│   
│╭──────────────── 
││🐶͘͜  _${usedPrefix}enable restrict_
││🐶͘͜  _${usedPrefix}disable restrict_
││🐶͘͜  _${usedPrefix}enable autoread_
││🐶͘͜  _${usedPrefix}disable autoread_
││🐶͘͜  _${usedPrefix}enable antispam_
││🐶͘͜  _${usedPrefix}disable antispam_
││🐶͘͜  _${usedPrefix}enable anticall_
││🐶͘͜  _${usedPrefix}disable anticall_
││🐶͘͜  _${usedPrefix}enable modoia_
││🐶͘͜  _${usedPrefix}disable modoia_
││🐶͘͜  _${usedPrefix}enable audios_bot_
││🐶͘͜  _${usedPrefix}disable audios_bot_
││🐶͘͜  _${usedPrefix}enable antiprivado_
││🐶͘͜  _${usedPrefix}disable antiprivado_
│╰────────────────
│
│ 
│
│       「 𝐉𝐔𝐄𝐆𝐎𝐒 」
│
│╭──────────────── 
││🐶͘͜  _mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
││🐶͘͜  _fake *<texto1> <@tag> <texto2>*_
││❥꫶ꪆꦿꦼ͜͡🐶͘͜  _ppt *<papel / tijera /piedra>*_
││❥꫶ꪆꦿꦼ͜͡🐶͘͜  _prostituto *<nombre / @tag>*_
││❥꫶ꪆꦿꦼ͜͡🐶͘͜  _prostituta *<nombre / @tag>*_
││❥꫶ꪆꦿꦼ͜͡🐶͘͜  _gay2 *<nombre / @tag>*_
││❥꫶ꪆꦿꦼ͜͡🐶͘͜  _lesbiana *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _pajero *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _pajera *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _puto *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _puta *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _manco *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}manca *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}rata *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}love *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}doxear *<nombre / @tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pregunta *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}suitpvp *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}slot *<apuesta>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttt *<nombre sala>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}delttt_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}acertijo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sorteo (nombre de lo que va a sortear)_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}top *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}topgays_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}topparejas_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}amistad_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}trivia_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}topotakus_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}formarpareja_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}verdad_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}reto_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cancion_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pista_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}advpe_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}palabra_
╰────────────────


    「 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 」

╭────────────────     
│🐶͘͜  _enable
│🐶͘͜  _disable
╰────────────────


   「 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」

╭────────────────    
│🐶͘͜  _reporte *<texto>*_
╰────────────────


     「 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 」
     
╭────────────────      
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}githubsearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pelisplus *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}modapk *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickersearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickersearch2 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}xnxxsearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}animeinfo *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}google *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}letra *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wikipedia *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ytsearch *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}playstore *<texto>*_
╰────────────────

     「 𝐆𝐑𝐔𝐏𝐎𝐒 」
     
╭────────────────      
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}add *<numero>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kick *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kick2 *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}listanum *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}kicknum *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}grupo *<abrir / cerrar>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}grouptime *<opcion> <tiempo>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}promote *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}demote *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}demote *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}infogroup_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}resetlink_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}link_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setname *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setdesc *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tagall *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setwelcome *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setbye *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hidetag *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}warn *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}unwarn *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}listwarn_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fantasmas_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}destraba_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}setpp *<imagen>*_
╰────────────────


    「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toanime *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}togifaud *<video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toimg *<sticker>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tomp3 *<video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tomp3 *<nota de voz>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toptt *<video / audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tovideo *<sticker>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tourl *<video / imagen / audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tts *<idioma> <texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tts *<efecto> <texto>*_
╰────────────────


      「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 」 
      
╭────────────────       
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}logos *<efecto> <texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}logochristmas *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}logocorazon *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ytcomment *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hornycard *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}simpcard *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}lolice *<@tag>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}itssostupid_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pixelar_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}blur_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}toanime_
╰────────────────


     「 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}piropo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}consejo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fraseromantica_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}historiaromantica_
╰────────────────


     「 𝐑𝐀𝐍𝐃𝐎𝐌 」

╭────────────────     
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}cat_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dog_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}meme_
╰────────────────


     「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 」

╭────────────────     
│*RESPONDE A AUDIO O NOTA DE VOZ*
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}bass_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}blown_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}deep_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}earrape_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fast_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}fat_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nightcore_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}reverse_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}robot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}slow_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}smooth_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tupai_
╰────────────────


  「 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 」

╭────────────────   
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}start_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}next_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}leave_
╰────────────────


      「 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 」

╭──────────────── 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}inspect *<link wa_gc>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}chatgpt *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}delchatgpt
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}gptvoz *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dall-e *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}readviewonce *<imagen / video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}clima *<país> <ciudad>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}encuesta *<texto1|texto2...>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}afk *<motivo>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ocr *<responde a imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hd *<responde a imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}acortar *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}calc *<operacion math>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}del *<mensaje>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}whatmusic *<audio>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}readqr *<imagen (QR)>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}qrcode *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}readmore *<texto1| texto2>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}styletext *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}traducir *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nowa *<numero>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}covid *<pais>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}horario_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}dropmail_
╰────────────────



            「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 」

╭────────────────             
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker *<responder a imagen o video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker2 *<responder a imagen o video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sticker2 *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}s *<responder a imagen o video>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}s *<enlace / link / url>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}scircle *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}sremovebg *<imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}semoji *<tipo> <emoji>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}qc *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}attp *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}attp2 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}attp3 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp2 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp3 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp4 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ttp5 *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}wm *<packname> <author>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickermarker *<efecto> <imagen>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰────────────────`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '☆ 𝗟𝗢𝗕𝗢 - 𝗕𝗢𝗧 - 𝗠𝗗 ☆', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
export default handler;
                                                                                                                                                                                                                                                                
