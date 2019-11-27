import * as restify from "restify";
import { BotFrameworkAdapter, TurnContext } from "botbuilder";

const server = restify.createServer();
server.get("/test", (req, res) => {
    res.send("dziala");
})

server.post('/api/messages', (req, res) => {
    const adapter = new BotFrameworkAdapter({
        //appId: process.env.MICROSOFT_APP_ID,
        //appPassword: process.env.MICROSOFT_APP_PASSWORD
    });

    adapter.processActivity(req, res, async (turnContext) => {
        return turnContext.sendActivity(`You said ${ turnContext.activity.text }`);
    });    
});

server.listen(3600, () => {
    console.log(`\n ${ server.name } listening to ${ server.url }`);
});