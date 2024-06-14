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
global.warncount = process.env.WARN_COUNT || 10;
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1jV0RzRDVtdWNDMU5TZlpMWnc4ZERuUGFzeDAvYnYyQ2hoMkc4UFgyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTF3TlYvNVNBRDZ6UHY2bDBqQXNBaEp4aSthRURrK0ZQQ1VOZzJKNEdrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ3dNempWMW1SWE9MQ2ZRUFRRMFBCaUwrWVdsR1VRMnVndjZzUFdaTmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBM2ZmcE1LOS9hSEFzV0s3eHE5VW9TVlMxTUZoNy9OdU93RDVzNlJvT2hjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCZ1pUUHZhRGx6bVdodkFRVVp6dkRoR0Y3ZkFud0VXT3RzcG1IL2ppRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZtb1k0RUxpb202YWZ0YVBTM1hDQmJ4d1FoTHZXOU1oUm9XQkVnblcxaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU56WHJ6UjNnQXZkSnVyd0p1ZkwxdkhFWHgyTk9CZkF0TGFySE52QXoxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdYTW1ma2pvVkdKdk9abXF2RXlHeHA1UlFsU2R2NnBCM2JpelpPVGJWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc3SDdiYkttUVNCYVg3Ymx1NXlCTk95b1kyK1NKVHJMM1lCa0N3QU04YXlsd3BiSnNiRllxR25LZ2NBVnZvaEdzQjdxRVh2d2s0bS9rUWdLZVFJMGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJ0OXpZNmxDcGZQSFY4TDlKUXVxM0RwT0hpZGJOOWpzVVoySXgxY1dSMkpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU5Njc4MDY4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNTI2NDFBQTM4QTRDQjg5QUYyQ0UyREY3RDRCMThEQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4Mzc0OTA2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWTkpscnpxN1NOaXEyR2QxLW9OQk53IiwicGhvbmVJZCI6IjI1Njc0YmQzLTRjMTgtNDczZS05YWM4LWUwYmRkNzc2ODA5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0NUFINDgwM3VTdHFRRUd2N25kOG1zRi9SemM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkVTa0dQSVA4aVR0NXZ2eTJNOS9EQ1Y3ZmtvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZORkVIQjRNIiwibWUiOnsiaWQiOiIyMzM1OTY3ODA2ODU6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT2RzIFRlY2hub2xvZ2llcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpYN01JQkVPaWpzYk1HR0NVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWjN1MXJ2WDBVUFdZQ1hheXhsNGtVYnRjaURwbG5VU1hyYmd3SlBjQ01pUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMnE2UjRlUU4yY1VEZUV4b0lkL2VKYURaZjlnSkJLdFJySzZLZ1BqMGptcHhiRitZZnRXMWI3UVRmUnNOc2JqMGVkeXhYSG80UnYzaHhtR3ZMSE1QREE9PSIsImRldmljZVNpZ25hdHVyZSI6InVRb1hicVBBWWRtVGcwdlEvSVVsNmxrRDVZYjNlanNNSkFJV1hEMnNzQUx2cllDTE5lMTg1VUZEUzdtblFSNTM1KzBYTlBibG92TnBYWXNmUFloaWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTk2NzgwNjg1OjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldkN3RhNzE5RkQxbUFsMnNzWmVKRkc3WElnNlpaMUVsNjI0TUNUM0FqSWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTgzNzQ5MDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXZKIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 ODS TECHNOLOGIES",
  author: process.env.PACK_AUTHER || "ODS TECHNOLOGIES",
  packname: process.env.PACK_NAME || "ODSTECH",
  botname: process.env.BOT_NAME || "ODSTECH",
  ownername: process.env.OWNER_NAME || "ODS TECHNOLOGIES",
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
