const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola hijo de tu madre, te invito a unirte a los grupos de Alexis y yo para convivir con la comunidad :D (son unos pendejos)*

                 ɢʀᴜᴘᴏꜱ ᴅᴇ ᴊᴏᴛᴄʜᴜᴀ-ʙᴏᴛ-ᴍɪɴɪ
       
⎯⎯  \\\ 𝕭𝖔𝖙𝖘 /// ⎯⎯ https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB ⎯⎯  \\\ 𝕭𝖔𝖙𝖘 /// ⎯⎯


ɢʀᴜᴘᴏꜱ ᴄᴏʟᴀʙ ᴊᴏᴛᴄʜᴜᴀ-ʙᴏᴛ-ᴍɪɴɪ

`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Sniperghost662009`},
    'mimetype': `application/${document}`,
    'fileName': `ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ - ᴍɪɴɪ`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ - ᴍɪɴɪ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/GR9pMnqYI8DB9HoJnl2HkB'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['xwaifu']
handler.tags = ['main'];
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
