//when you say something in a channel it responds want to figure this one out.
//connect to API(s)
//host somewhere eventually

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

//respond to direct messages
app.message('animal', async ({ command, say }) => {
    try {
        say('Woot! The message works. Cats are soft 🐈.');
    } catch(error) {
        console.log('err')
        console.log(error)
    }
});

//listen for @ mentions
app.event('app_mention', async ({ event, context, client, say }) => {
    try {
        say('Did I hear my name being called? Here is your random animal fact: Random Animal Fact.');
    } catch(error) {
        console.log('err')
        console.log(error)
    }
});

//respond to strings that show up in channels the bot is added to

const dogApiUrl = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';


// Dog Facts API https://dukengn.github.io/Dog-facts-API/
const testingDogApi = (url) => {
    console.log('URL: ', url);
    console.log('Calling Dog API.');
};

testingDogApi(dogApiUrl);