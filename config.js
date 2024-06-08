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
global.devs = "233509747946";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "233509747946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RkZEQ3U05vN0psKzRIQ2tsbjdBUkRIYUNab3l6SHRqMWtFRFFEZmptTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2NHVlB1TUxrVkpRVlNwY1lERkdlVCs2YXVJL0Jrb1BaVFNGSlM0a0VnZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRXVKMk9mRzZ2aWhJS0s0R1EzVFZFQlM2ci84V1pXQVVoYVRPMTdGNUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NTdsdyt5UGhPU2s5dUlTMWlOQmpBVlFmZVhRUkUyRUFWR014eTJrMzJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPcnJXNWdsc20zcmNOZkxHUDdKdm1IZHdDM0lyL1JHUjc4Q3BZZDFPVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild5OGxyQjJ3WkRmRnZTVjN3NFZmSGZMQUlzYVFuU04xbVh2S1hWYWtzR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tldXA5dWxGVHcreUhDWi82WFVsdENuOE9NWm9rT3djN3JnOFdMRDVHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1czeGxxT1BBaU9ORmVmMDJJTkNreWxyTFlTOCtodDFOWS9lS3BkTzJsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1rM2s4V1d5ZGhDaUtWdTJ0bFFoSDBHOHNXaC9iR0RwbERPVlhYZElYSlY0RmVzbTlNbjBkUHpjWGk3bU9hZDMwNTdBUUVxc2NtQnQ0Z24rcktESWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5Ijoic2QwTmwwTlFMTG0xNm1aVW9WMmllUjFITWY4cVBaTWJuMGdhOUgzL09paz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzM1MDk3NDc5NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjJGNkY3NzQ0NUI2NTc4NjVGREMxNzIwMTQ4RjFGQkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzg0MTM3N31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNE5rNkRmRm1UbzYtbkxaZFRKREFzZyIsInBob25lSWQiOiI1MTRhMTc0Yi1kNGRhLTQyODMtODZmOC0zZmU4OTQ5MjEzNmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNno3NXFZTFlJdk9yUUVMdmxYMVhUUm5kT0VjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVTRkYyUnYyRmF1L0gycHMvaERtUlVaeHpMVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1NVYyMlpZQiIsIm1lIjp7ImlkIjoiMjMzNTA5NzQ3OTQ2OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifkFtIE1lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcWRvL3dIRU03YmtMTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGVmxnQmtOMXhJSkwrODNWeFNvRVd0YXNhSkYzL1pXNTBFditMZzdVZlRFPSIsImFjY291bnRTaWduYXR1cmUiOiJSa2ZrUGJZWlZ4T1lnelUyRUdRV1Fpc25UOGN0bUpsMytQU0c2cmZBZWRjajZBUFYzWkh2a2hDQ01iSER4b0tkQXBrWWVEK0VpUWdMU2V3TXRQTTdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS3lKNEtScFVTODhtdWZUeXJuTXBoKzY3b1Y2V3d5cko3eTVpNXlBcUJuMWRINkdxYjdQSUU4Z3VsdHRKNVVuOUJtOXMyQzVkVWN1NXhNSWNPQnp2akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1MDk3NDc5NDY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVlpZQVpEZGNTQ1Mvdk4xY1VxQkZyV3JHaVJkLzJWdWRCTC9pNE8xSDB4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3ODQxMzcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVldiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "JAY BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
