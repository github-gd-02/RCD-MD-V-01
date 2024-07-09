//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVGWjBlbU02Tlh4R2ZXems4TXdKTExhOFpVc3JvYUVjVllqV3hSWElIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlFJTjRqekw0a09xaDBJcCs5d05nRTgvZFdoUlRKYU40S2hDVFBmTG5BQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRmUza2tVKzJPMHRBZzAyQVg3cVMwM3BubXZDcExhdVg0Nlg1djcyUGtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNnJrNUVXK3JjUjUvNmpvUkIvQUU3TmxBTng4K1k0SlJPYlRzR0g1dGp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPU05qaW1lVndabVgzYUFnSms1SXR4ZjRnZXpVZkd5MXYxYW16UVBRMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJpZllvUFFHeTN5MmZscmcrSUQremZLMFRGKzVXQm1BbFgwYldnNVhZVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEM4SXkrYUtMdFliRklPeU5Da24vUjJUTHVoM2FEWWoydzZ1WVhGNS8zRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pVd0dhazFHVnVaSHVUUGt1VnBYT1BvQlp5Ykwxell1dG5oYjVPT1VrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowMEpucHFFU1RKM0k4cUZLdmk4c213eWxkcFlWcFZ2TCtEcGh3QlIzVmd0enJLRWw3Y2g2TGxKUDVqVUFnSnFma0pkKzZINm1zKzJFV0JueEJiM0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiIrLytpcW16MlhDRnE3cWNKYnluOWwyTzM2dGFvVUNhR1ZsMVVVajJYVndnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNjkxMzYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjczRjdGNUU5RDQ3QkU2Q0EzNTJBNjFGRUFFRTYwQkQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA1MDk0MTd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNjkxMzYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdCMzhEODlGNzBDMDQyQ0EzNTkyRjc2MTlDMEVGRTk5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA1MDk0MTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjgxbVFiOEpvUVRDdG5RVnpGZE5FVVEiLCJwaG9uZUlkIjoiMGZmMTMxYWMtNTg1MS00N2ZiLTg5NDItMDc4MDU2OTBkODQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFjd1EyeHpydGNtWFFFZjhGK3dveEZzTVpjUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSE9rdHR0MnpxTlVGT1pTdCs0YzVPemQrSlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjJMUVFTVzEiLCJtZSI6eyJpZCI6Ijk0NzAzNjkxMzYxOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5vIE5hbWXwn5G5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMS3Rwbm9RMjhlenRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEYlNPZ0RJQzI3Vjd1cE1ZSW5WVm9NbjJTQ0Z3b3h5bHhGK1dzZENqdlR3PSIsImFjY291bnRTaWduYXR1cmUiOiJtcEhNTnNTV3U5eXJmdTdFaUNOTFhmK0lDMkExTE82U1RPb1o1M1RYSVp1dzE1QlRseGprMk9nV2NkcGRJbDlWY3hBQUhJQTVHRjNkcWVtb0VVWmpEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWkw3bkkwYkJxQ2U0NFVsb0V6YVZuYm9nZVBOODhNWU8rMnZicTl6YkhVNUpQbjBkVWU0VDBBQ3NpeWI1M3I1SWFSc1RzbzFmeHVMMS9Db1FJYW1XQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMzY5MTM2MToyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRMjBqb0F5QXR1MWU3cVRHQ0oxVmFESjlrZ2hjS01jcGNSZmxySFFvNzA4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTA5NDE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgyViJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
