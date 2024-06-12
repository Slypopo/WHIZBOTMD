const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "233596780685";
global.sudo = process.env.SUDO || "233596780685";
global.owner = process.env.OWNER_NUMBER || "233596780685";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFVLzZCN3c2Qm8va3FTMWpYdU5TYUtQc3BhR09vWndTVWp0WmlmU2puMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnJ0ak1vQkN3M253bm8xR1ZkOERqaGRyMjQ5MmNqUSt1UjRkRmpRRTFscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSHpvVG9QNEV5UXVrSWo3ME0xMDR4bVk2aGR1NnhBRHpVMDNoNWlSQ21VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyRmtEQUpVd0pyRnJyQVBSZkxKam5rMWkyb0FaZXB1Rmg1M21rSHhNRWpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQL1Q4NlEvcmhjWDJvcVJsbHpWQkZEakMyMWtFaHVIV3NIdHFDT0x2blk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZqNWJHZm45V3RDeXlDS1BrT3IzNnBoQW4zWWVoTitsUXFIS3RjNDJuaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0QrKzduRllCRFFrdHczT3BPN2pFUHl0dmdUZFdWd090eFdZbFJPenVrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFFkTHFoZm9XTG9nMUZjL25LYWJmZmxON0Y0R0R0ODREblFHY0hCVzJoZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxxSVo1OXhOUUxyRkNEWHN2VHRYZXVqRi84Mk9kWmVoRlUyU0Z3cDFYNnlHMVZNYi9QTmUxYVBsTmtRUGRiZ2dkTEZxbGVFMUh5TXMvTU9uZUF4OEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6Im83bW1ycmJ1b3dic2ZDUlB0Yk0xTWc0SEJIcTNoV3lld0dvS3pUQkJpTGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVGNGlRcjZJUm1tdHJ1VDRGb0pJN0EiLCJwaG9uZUlkIjoiZmQxNjY5YTktODBkMi00MDk4LWEwZmItNDUzY2MxZDhmYmUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhLdndqeW5GNmhBU2Rlc0d1allqZmJNYjNKaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3ZDJFZ3BMeDNLUkJIc0xzS2hNcGpGTHRycE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUZNVldNNkIiLCJtZSI6eyJpZCI6IjIzMzU5Njc4MDY4NTozNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPZHMgVGVjaG5vbG9naWVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMalg3TUlCRU1XWXFMTUdHQjBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaM3UxcnZYMFVQV1lDWGF5eGw0a1VidGNpRHBsblVTWHJiZ3dKUGNDTWlRPSIsImFjY291bnRTaWduYXR1cmUiOiI4S3FqNDJvQ0ZVNWdkc3VJbk9DOUFZMWZUanBTbUZRRnlWUzhFaTNiL0l2d0RLTno5TkRYWEdRSkh4RHVvVEtDQXZISmUxZUtSZHdwbDBYcWZIbEFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibUZEcjN1NS9NTkZDM0s3blpZbWRWajZHQURodzZZb080cjhoeTAvREozSkxiOG83ZytMTXdYakZpS1g3b3J2ZmdYQkVQV0YwOFNCTWNMd2tjQ1lHQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1OTY3ODA2ODU6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2Q3dGE3MTlGRDFtQWwyc3NaZUpGRzdYSWc2WloxRWw2MjRNQ1QzQWpJayJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODIyNjAwMn0="
module.exports = {
  menu: process.env.MENU || "button",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 ODS TECHNOLOGIES",
  author: process.env.PACK_AUTHER || "ODS TECHNOLOGIES",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ODS TECHNOLOGIES",
  ownername: process.env.OWNER_NAME || "ODS TECHNOLOGIES",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-bac49722-9a7f-469b-9953-d6b6db443a2f",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "odstech",
  antilink_values: process.env.ANTILINK_VALUES || "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
