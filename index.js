// Require the necessary discord.js classes
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,ComponentType ,EmbedBuilder  } = require("discord.js")
const { token } = require("./config.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})
const prefix = ".";
const wait = require('node:timers/promises').setTimeout;
client.on("ready", () => {
  console.log("The bot is ready")
});
/*client.on('interactionCreate', interaction => {
  
    if (!interaction.isButton()) return;

    //if (interaction.customId == "id1") {
        interaction.reply({ content: `Эта кнопка не для тебя!`, ephemeral: true }); 
        // Do what you want with button 'id1'.
    //}

});*/
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  if (command === "спать") {
    //const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`https://i.gifer.com/7asX.gif`);
  }
  if (command === "наруто") {
    //const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`https://i.gifer.com/4Kj3.gif`);
  }
  if (command === "шрек") {
    //const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`https://i.gifer.com/AnA.gif`);
  }
   if (command === "машу") {
    //const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Ананас вам машет https://i.gifer.com/origin/5c/5c7eef7788caadfe10ad05245910ff49_w200.gif`);
  }
   if (command === "махаю") {
    //const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Ананас подает сигналы в космос https://i.gifer.com/7HRI.gif`);
  }
   if (command === "маху") {
    //const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Ананас пытается что-то сделать https://usagif.com/wp-content/uploads/2022/fzk5d/1-funny-jumping-pineapple.gif`);
  }
  if (command === "битва") {
    
    let user = message.mentions.users.first();
    if(!user) return message.reply("Вы не указали с кем хотели бы драться!");

    //checks if the users is trying to fight themselves
    if(user.id == message.author.id) return message.reply("Вы не можете драться с собой!");

    //checks if the user is trying to fight the bot
    if(user.bot ==  true)
        return message.reply("Вы не можете бороться с ботом!");

    //saves the two user ids to variables
    var fighter1 = message.author.id;
    var fighter2 = user.id;
    //let author1 = message.author.username;
    let author1 = message.author.toString();

    //announces challenge and awaits response
    var challenged = user.toString();


    const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("yes")
                    .setLabel('Согласиться')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                .setCustomId("no")
                .setLabel('Убежать')
                .setStyle(ButtonStyle.Primary),
            );
    message.channel.send({ content: `${challenged}, ${author1} вызвал вас на дуэль. Вы принимаете вызов?`,ephemeral: true, components: [row]})
        .then((mes) => {
            //const ifilter = i => i.user.id === fighter2; //|| i.user.id === fighter1 ;
            //const ifilter = mes.user.id === fighter2; //|| i.user.id === fighter1 ;
            const collector = mes.createMessageComponentCollector();/*{ componentType: ComponentType.Button/* ,filter: ifilter/*, time: 30000 })*/ //30000
            collector.on("collect", async button => {
            //console.log(mes.user === fighter2);
            if(button.user.id === fighter2){
                button.deferUpdate();
                console.log(button.customId);
                if (button.customId === 'yes') {
                        let duels = [challenged, author1];
                        var winner = duels[(Math.random() * duels.length) | 0];
                        await message.channel.send(`Побеждает ${winner}!`);
                        //await button.editReply({ content: `${challenged} принял вызов!`, components: [] });
                        await mes.delete();
                        return;
                }
                else{
                    await message.channel.send(`${challenged} отказывается биться с ${author1} 👎!`);
                    await mes.delete();
                    //await button.editReply({ content: `${challenged} отказывается биться с ${author1} 👎!`, components: []});
                    return;
                }
            }
            else{
                await button.reply({ content: `Эта кнопка не для тебя!`, ephemeral: true })
                return;
            }
            });
        });


  }

});

// Log in to Discord with your client"s token
client.login(token);