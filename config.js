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


global.devs = "2348120494417" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348120494417";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_16_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRINVFydlZGbzNaeWlCVWVoek9EUktkL2J0QWoxMnZYUE5WdDFzM2NNMzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyMDQ5NDQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODNDRjkyRUQ3NTQ0NDZDODUxMDc4MTVDMEVFQjBDOTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjc0OTcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyMDQ5NDQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDBDM0FBRTA5RTRDMzM5MjNEMjExN0JBOEZFQUFFMDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjc0OTcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5tOFBtVDVsUUZxVmpkR3RIaDQ1QWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTJhOWI4ZGQtNTc4MS00YjI3LWI5NDMtYTQ3ZTVkMzQ3MTBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE0NyxcbiAgICAgIDIzOSxcbiAgICAgIDkyLFxuICAgICAgMTk4LFxuICAgICAgODEsXG4gICAgICAxOTUsXG4gICAgICAyNDMsXG4gICAgICAxNTcsXG4gICAgICA2MyxcbiAgICAgIDEyNyxcbiAgICAgIDIzMCxcbiAgICAgIDE3NCxcbiAgICAgIDczLFxuICAgICAgMTY4LFxuICAgICAgMjM0LFxuICAgICAgMTI0LFxuICAgICAgMjI5LFxuICAgICAgMjA2LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICA1NCxcbiAgICAgIDIxLFxuICAgICAgMTU2LFxuICAgICAgMTE2LFxuICAgICAgMTIsXG4gICAgICA3MSxcbiAgICAgIDYyLFxuICAgICAgMTM3LFxuICAgICAgMjE0LFxuICAgICAgOTQsXG4gICAgICAxOCxcbiAgICAgIDEwNSxcbiAgICAgIDI1LFxuICAgICAgMTc2LFxuICAgICAgMTYyLFxuICAgICAgNzEsXG4gICAgICAzNyxcbiAgICAgIDg3LFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1sd3JjREVKYlZ2YlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4M0RCQ0ZGL1BQNXM2NjBoY3hYbmhHU09uajFpMXJtTFdlN0ZDVWsrQWxBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhhc1l4ZVZTUGVoYUtNWHhiVXJaWkh5WFI4Z1I5MG04d3ZUUTMwOFFKNkhYTTU4UWVmdjFNdEg3Q1Z6a3p2VEE2SkpCeDFjRlFKMHpnOUdrQmI2bkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldKaEJoUmxPcnZIL3VKcGlTUEtCVVZjTDRPUEpNVXlncXZuMEs3OC8yN1BRSzRBK2hMWnFTUmJJUjZCTGwxRUkrSkVhc3pwa2JVODVlNWh2ZHBDTWhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMDQ5NDQxNzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbWVsaXRlIENyZWF0aXZlXCIsXG4gICAgXCJsaWRcIjogXCIyMTQxMTI4OTQyNDI4NDQ6NThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIwNDk0NDE3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2NzQ5NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHd3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd3cy5qc29uIjogIntcImtleURhdGFcIjpcIkJ4bWR5dUR4U3lndXRwRzFLYnhVS1hpMlRDSGpaMWN2Yzd0U2dNSHVXVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTIxNzM1ODk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHd3QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIweFh2QUp5UlE5ZmR5Sm5KQzI1OTBuZFdSQ0FBZ2NEOU85R3JUYlVBZ3R3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkyMTczNTg5NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3d1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiT0RBZXZuMmQrZmJ5K2pSSWlpNTlHdkI2L2hzRGdPV0lwNHZhM2RDaVZ3bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjE3MzU4OTcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY3NDk0NjY1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Jexi",
  ownername:process.env.OWNER_NAME|| "Limelite Creative",


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
