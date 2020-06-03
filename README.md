# ScrimBot
A Discord bot for organizing Valorant custom games. Based off [Mountainz](https://github.com/Kalissaac/Mountainz).

## Running this yourself
The bot is pretty simple to set up, it really only needs a Discord bot token and a Firebase project.
1. First, get your bot token from Discord.
2. Create a file named .env in the root directory of the bot, with the following contents:
```
TOKEN=<discord bot token>
FIR_SERVICEACCOUNT=<service account file name>
```
3. Replace `<discord bot token>` in the file with your bot token.
4. Create a Firebase project at console.firebase.google.com, and go to Settings > Service Accounts > Firebase Admin SDK > Generate a new key
5. Place the downloaded json file in the root directory of the bot, and copy the filename
6. Replace `<service account file name>` with your json filename

7. Run `npm install` and let it install the dependencies
8. Then run `npm start` and the bot should be online!