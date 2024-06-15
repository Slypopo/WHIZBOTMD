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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09hK2IxZnl4aitpemxRaW1YeXhaT0hYUVIwWXozQUpLTjl2L1J6cjJHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUI3NVNydFhSNElPNnpLSzRpeU84YndnOGtUWjJJcEdlVjUzRjRkVHVFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTG1YeWU2VzlWVWt0TjY3UEpjMzRpOXdNTlBOSTEvaThZVWpjLzVKZkU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxdUJueHVkTlFpOEs3QXovZlVpZzhqR09xTGtXYXArbU83TU1vdUYzVzBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOQzd4NVh1WFkvUXpOOGtxVXFIWkdwVWFkOGtVS25GNXpZSmF2STZBM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJoODRlMHBsQk9rTTdpai9wYStSSEZnRGgvR0diYzJrQ3UrdUc1MnhCems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZvdFQ0NDVSMmhablhoK3NSU2ErN0MrbmNXa2l1b2dLTGN5bG9Ya1pGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2lzM0dJcTRDb05OTWtORFA1ZEx4TWxDUm83Q2YvRldVTGpsVkc5VmF3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjVURYdCtoWE1jQzdVYk4rRCtNZVZPVnZxRk1vMXkwVTVaZE5mbjZpdEFGeEpGa24wWm9nUExkbFc3Q2t5b3A5enkzbHAzcC8wUWE2ZndzY242MURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJaZDlBVEcwT2ZDNUNMd0lINW1JVU5wczZNR3FrSVVBczQzNUV0MitKSlRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaZzRhLXlNRlNSV3F1dE85UjljeU93IiwicGhvbmVJZCI6ImJjMTllMWIwLTYyZmEtNDRiMy04ODJmLTBlM2E3ZWU2ODZlOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNng5UXUxZU1sVTlTbSsxR252Y1ptdXpGaHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXRpdkhtemR4MWt3cFY4eTBzTDRrejFqdUJ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdIWFZXQVhQIiwibWUiOnsiaWQiOiIyMzM1OTY3ODA2ODU6NDdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT2RzIFRlY2hub2xvZ2llcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpYN01JQkVLM0p0ck1HR0NrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWjN1MXJ2WDBVUFdZQ1hheXhsNGtVYnRjaURwbG5VU1hyYmd3SlBjQ01pUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibS9mSHlSeUFFSTNZQlJJUEJlNUcxQmRjWVlQWmVMUUlFWFBCbi9Hb3hOQ3VwNU9oUzRpQitqNG5PK3VRSkJ0aHo1VkhpTjh5dDdLdVIweWxUTGVWQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImRaS1dWNmVnNExpTXJhd3FDNnd3ZWVIVzdzdGJ3cmtVQUwyM0hLaURaNmV1eGd4WEZMSWtENS9SSDhLdHFYbnpKQ0NJRHpUcWM1Z3N6VFRNYlNQMENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTk2NzgwNjg1OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldkN3RhNzE5RkQxbUFsMnNzWmVKRkc3WElnNlpaMUVsNjI0TUNUM0FqSWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg0NjE2MjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXZKIn0="
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
