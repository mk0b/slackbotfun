
//Setting the server
const { App } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode:true, //enable the following to use socket mode
    appToken: process.env.APP_TOKEN
});

(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();

//slash command to get 1 random animal fact!
app.command('/animalfact', async ({ command, ack, say }) => {
    try {
        await ack();
        say('Yay! The command is working. Dogs are loyal 🐕.')
    } catch (error) {
        console.log('err')
        console.log(error)
;    }
});