const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347035648535";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_32_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkwwUWpaMDYrbjk0QjJYRDRrVWo3NjQzbmNNOS9ScGZhckh2bGZ2YkNJdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemlJa1ZlXzZTNDJaRVhNdDRKeE1JZ1wiLFxuICBcInBob25lSWRcIjogXCIxN2JiZjBiMi04YjE1LTQ2YWYtYTdjYS02ODY1ODUwODI5OWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICAxMDcsXG4gICAgICAyNSxcbiAgICAgIDEzMCxcbiAgICAgIDE3NixcbiAgICAgIDEwMyxcbiAgICAgIDMwLFxuICAgICAgMjI3LFxuICAgICAgOTMsXG4gICAgICAxMTIsXG4gICAgICAyMTcsXG4gICAgICAxMjksXG4gICAgICA4NSxcbiAgICAgIDE3NixcbiAgICAgIDEwOSxcbiAgICAgIDExMSxcbiAgICAgIDE5MyxcbiAgICAgIDE5MyxcbiAgICAgIDIwNCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAyNDgsXG4gICAgICAxMzgsXG4gICAgICAxNDQsXG4gICAgICA4NixcbiAgICAgIDE1OSxcbiAgICAgIDM1LFxuICAgICAgMTM4LFxuICAgICAgMjUxLFxuICAgICAgMjM4LFxuICAgICAgMjcsXG4gICAgICAyMDcsXG4gICAgICAyMjYsXG4gICAgICAxMDUsXG4gICAgICAyNDQsXG4gICAgICA1LFxuICAgICAgNjUsXG4gICAgICAyNDUsXG4gICAgICA0OCxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhWRkRHMTNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM1NjQ4NTM1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwODkwODA0ODE4MTY1OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStjM053REVMbmlpTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3K255TDZEZEEzZ1ovYU5uTGQzWjhOZVJZVUZSdnUvMVE4d2lyaTdtMEQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVZM01LbXFjQkVLYnlFUUFPa201SzZlTEczTGFDN1FaSUl1VzVkaklwOG5HbmM0WVdSTVJvc21tTy9kY3g3cFh4Slkrc01aWitHUWdhb3hCQ2ZaNUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYrek1BUUcvOENMRTY3c2M5cEU0SzJNenF2ZmoyWVZheldRRVdLWmE1MTVHd3Q2NVhWeUQ3U3gvcnNOekFmRHRCU2dpUUxlUmFYMjhnMUpDUyt5OUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzU2NDg1MzU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTgwODMxN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
