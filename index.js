const SlackBot = require('slackbots');
const axios = require('axios');

//initializing slackbot
const bot = new SlackBot({
    token: 'xoxb-785032392182-2984680086503-NNF4WXXzyhIPvELAui67Np9N',
    name: 'Animal Facts'
});

// Start handler - what happens when we start the bot.
bot.on('start', () => {
    var params = {
        icon_imoji: ':horse:'
    };

    //define channel where bot exists.
    bot.postMessageToChannel('general', 'Get ready to know a lot about animals...', params);
});