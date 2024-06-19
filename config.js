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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.gurl = process.env.GURL || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.website = process.env.GURL || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.devs = "233509747946";
global.sudo = process.env.SUDO || "233509747946";
global.owner = process.env.OWNER_NUMBER || "233509747946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUY3ZUFUdVVXVWZZWXljY1ptNUpWbjFaVHMxNVFZc01GRlJOb2ZOby9sOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1lzV2p3NGNsWk1CbHFBVHY5cTd5N29hMDF6dnNyNzBJREZGQnRQajJRbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUHRweHR1SVl5T04wNnFIbE1jNCs4L082ZGZsSCs5akcvdE8vQTAyRjJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiRmhRR0VtdERVWjAyb0FRVlZQQk1zd3d0ZzhpNngvbnM1MHB0MVoydVdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPV1RrbnF1WkJqVFNLN1NZNFlDK2FZYXRrMlNrRmhsQm5LQ1VzWEo4a2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ5Skp5TEZZSE5IRGNGRzBaaHdrSWc1R0dvOEc2M0xhM3JJV0owNEs4d2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUEyQ3hjSDBOWDM2alJITXM3ek5UYTdmR0U3M3JjNWZtWkV5RFo4TWtXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEt3ZFgzd1hnWDB6NXA0dWl2R09GekxtMlR0RG1BV2xYTkxQbEhIeWR5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlczMGJjd2dlNmpvWVU2SGRvek1Uc0xaeXVpMDRteXVXbnN1NTJ1MHRqSkg0Y0lDMDA2cEhORFcyMytXS25QS09MVG1sUVdORXVmeTUyVzJ6bTc2VkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJ5UFFZak1Bd08zT3lGN3JDcTd4NkVnQ1o0QU5qZVpuR3FjdHl1VThCZzJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJncjJiMGFhWVJaR0xMX1VuSHpIWkRRIiwicGhvbmVJZCI6ImJhYjVjZDQwLTNiYmEtNDNiZi1hYWZlLTNjNjUxMWVkNzdlMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYVVN2QVpVSU5zQ25oT2hFQWRqTjBYUHg0K0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzFTdkNRcEdJOFVjZmFFY0dmVE1pdzVEUGgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZNR1hQN0pQIiwibWUiOnsiaWQiOiIyMzM1MDk3NDc5NDY6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05hZG8vd0hFT0dkemJNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZWbGdCa04xeElKTCs4M1Z4U29FV3Rhc2FKRjMvWlc1MEV2K0xnN1VmVEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNtM21RQklhYm9LTXJhWWRVK0JxcUVQcTNoaWptN0RMVmFvWmthQmFsY3E2bGkraENYMXZBUmZOV0xGenBkWmxwYlJYaHVzaUVWa09HcVBNWURKWUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtbWdjQmRpY1VmOUJ2L2hNT05VQmFRS0dvQUt4a0pZYVJFVEJKUGZHeldoandvc2FaU0VSMDhzbEF3WjAzcFc1M3RIOEZQaC9FQ3pvVzlQYVprY3pBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUwOTc0Nzk0NjoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVlpZQVpEZGNTQ1Mvdk4xY1VxQkZyV3JHaVJkLzJWdWRCTC9pNE8xSDB4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4ODMyODc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBFQyJ9"
module.exports = {
  menu: process.env.MENU || "button",
  HANDLERS: process.env.PREFIX || ".",
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
