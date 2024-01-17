//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'info Bot',
  'jadibot': 'SerBot - JadiBot',
  'game': 'JUEGOS',
  'econ': 'NIVEL & ECONOMIA',
  'xp': 'REGISTRO',
  'sticker': 'STICKER',
  'img': 'IMAGEN',
  'maker': 'MAKER',
  'prem': 'PREMIUM',
  'group': 'GRUPO',
  'nable': 'EN/DISABLE OPCIONES', 
  'nime': 'ANIME',
  'rnime': 'ANIME REACCION',
  'downloader': 'DESCARGAS',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'nsfw': 'NSFW +18',
  'ansfw': 'NSFW ANIME', 
  'owner': 'OWNER', 
  'advanced': 'AVANZADO',
}
const defaultMenu = {
  before: `
◈ ━━━━━ _*Jotchua -Bot*_ ━━━━━ ◈
╭───────────
┊  𝐌𝐞𝐧𝐮 𝟐.𝟎🐶
╰───────────
*AVISO:* este menu es nuevo por lo que sus comandos no estan al 100% ordenados


Hola *%name*
Usuarios : %totalreg
Tiempo activo : %muptime
%sbot
────────────
%readmore
  ≡ *LISTA DE COMANDOS*


`.trimStart(),
header: '┌─•✧〔 %category 〕✧•──┐\n┊╭───────────',
body: '┊┃  %cmd',
footer: '┊╰───────────\n└─── •✧🐶🐶🐶🐶✧• ────┘ \n',
after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by ALS https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `\n▢ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
  let pp = 'https://telegra.ph/file/59726cdbc90ef8e75d8bf.mp4'
    let pp2 = 'https://telegra.ph/file/2195a0c7565368aafbf1a.mp4'
    let pp3 = 'https://telegra.ph/file/b8bcafa1ce5d870374a7c.mp4'
    let pp4 = 'https://telegra.ph/file/5808e6ab5a7da1a27e6be.mp4'
    let pp5 = 'https://telegra.ph/file/475e1bbf9494df9a1d758.mp4'
    let pp6 = 'https://telegra.ph/file/6da66fb8305e430506c00.mp4'
    let pp7 = 'https://telegra.ph/file/c2c6a9a81ea0e34fd006e.mp4'
    let pp8 = 'https://telegra.ph/file/c2c6a9a81ea0e34fd006e.mp4'
    let pp9 = 'https://telegra.ph/file/c2c6a9a81ea0e34fd006e.mp4'
    let pp10 = 'https://telegra.ph/file/c2c6a9a81ea0e34fd006e.mp4'
    let pp11 = 'https://telegra.ph/file/6da66fb8305e430506c00.mp4'
    let pp12 = 'https://telegra.ph/file/6da66fb8305e430506c00.mp4'
    let pp13 = 'https://telegra.ph/file/6da66fb8305e430506c00.mp4'
    let pp14 = 'https://telegra.ph/file/6da66fb8305e430506c00.mp4'
    let pp15 = 'https://telegra.ph/file/6da66fb8305e430506c00.mp4'
    conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, {quoted: m});
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['Menu2.0', 'MenuTest', 'menu2.0'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}