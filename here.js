client.on("message", message => {
    var gs = require('github-scraper');//require github-scraper package
     let args = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + "github")) {
        if(!args) return message.channel.send("Type The Username To Scrap The Informations")
  gs(args, function(err, data) {
    let embed = new Discord.RichEmbed()
        .setAuthor(data.username, data.avatar)
        .setTitle(`${args} Profile:`)
        .setURL(`https://github.com/${args}`)
        .setThumbnail(data.avatar)
        .setDescription(`User Description: ${data.bio}`)
        .addField("Username:", `${data.name}`)
        .addField("User ID:", `${data.uid}`)
        .addField("Repositorys:", `${data.repos}`)
        .addField("Projects:", `${data.projects}`)
        .addField("Stars:", `${data.stars}`)
        .addField("Followers:", `${data.followers}`)
        .addField("Worksfor:", `${data.worksfor}`)
        .addField("Location:", `${data.location}`)
        .addField("Website:", `${data.website}`)
        .setColor("BLACK")
        .setFooter(message.author.tag, message.author.avatarURL)
        message.channel.sendEmbed(embed)
        if(err) return console.log(err)        

        })
    }
});
