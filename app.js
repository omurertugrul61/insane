const Discord = require("discord.js");
const {MessageEmbed}=require("discord.js");
const {Intents}=Discord;
const client = new Discord.Client({
"intents":[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGES]
})


client.once("ready",()=> {
	console.log("selaminelykum");
	client.user.setPresence({status:"dnd",activities:[{name:"alpin annesiyle",type:"PLAYING"}]})
})

client.on("messageCreate",msg=>{
	if(msg.content.toLowerCase().includes("neden")){
		msg.reply("ananin amindan dolayi")
	}	
})
client.on("messageCreate",msg=>{
	if(msg.content.toLowerCase().includes("nerde")){
		msg.reply("ananin aminda")
	}	
})
client.on("messageCreate",msg=>{
	if(msg.content.toLowerCase().includes("nerede")){
		msg.reply("ananin aminda")
	}	
})
client.on("messageCreate",msg=>{
	if(msg.content.toLowerCase().includes("gibi")){
		msg.reply("seni siktigim gibymi")
	}	
})
client.on("messageCreate",msg=>{
	if(msg.content.toLowerCase().includes("sa")){
		msg.reply("cami mi burası orospu evladı")
	}	
})

client.login("");
