const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("CT!");


client.on("message",(message) => {

    if(message.content === prefix + "bonjour"){
        message.channel.send("Yo mon BOY! :sunglasses: ")
    }

    if(message.content === prefix + "live"){
        message.channel.send("Tiens voila pour toi : https://www.twitch.tv/carlosparis ")
    }

    if(message.content === prefix + "planning"){
        message.channel.send(`Tu connais les horaires grâce à moi maintenant :  
    - Lundi 22h
    - Mercredi 22h30
    - Vendredi 22h30
    - Samedi 15h30`)
    }

    if(message.content === prefix + "help"){
       var embed = new Discord.RichEmbed()
       .setDescription("COMMANDE DU BOT")
       .addField("Dit moi coucou avec :", "CT!bonjour")
       .addField("Je te donne le lien du Twitch :", "CT!live")
       .addField("Je te donne les horaires de stream :", "CT!planning")
    message.channel.sendEmbed(embed)   
    }

    if(message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
        .setDescription("INFORMATION DU DISCORD")
        .addField("Nom du discord ", message.guild.name)
        .addField("Crée le ", message.guild.createdAt)
        .addField("Tu as rejoins le ", message.guild.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }

});

    client.on("guildMemberAdd", member => {
        member.guild.channels.find("name", "arrivée").send(`Bienvenue ${member} sur le discord des personnes les plus cool de la ville :sunglasses:
        
ici on va pouvoir rigoler entre copain et faire plein de betises sans que nos parents le voient. On pourra jouer au jeux video et se faire la gueule du a la rage a cause d'un jeux`)
    });

