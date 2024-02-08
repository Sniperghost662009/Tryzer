let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Tryzer 🇮🇩;;\nFN:Tryzer 🇮🇩 ⁩⁩\nORG:Tryzer 🇮🇩\nTITLE:\nitem1.TEL;waid=18199751245:18192011470\nitem1.X-ABLabel:Tryzer 🇮🇩⁩⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Tryzer 🇮🇩 \nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Tryzer 🇮🇩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
