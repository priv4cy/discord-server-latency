const { Client } = require('discord.js');
const ALL_INTENTS = 32767;
const bot = new Client({ intents: ALL_INTENTS, partials: ['MESSAGE', 'CHANNEL', 'REACTION'], });
const token = 'token';

bot.on('ready', () => {
    console.log('Ready');
    bot.application.commands.set([
        { name: 'ping', description: 'Check the latency and status of the Main Server', options: [], }
    ]);
});

bot.on('interactionCreate', (interaction) => {
    if (interaction.isCommand() && interaction.commandName === 'ping') {
        const startTime = interaction.createdTimestamp;
        interaction.channel.send('[Server Status] Main Server Online').then(sentMessage => {
            const endTime = sentMessage.createdTimestamp;
            const latency = endTime - startTime;
            interaction.channel.send(`[Server Status] Main Server ${latency}ms`);
        });
    }
});



bot.login(token);
