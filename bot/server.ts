import * as restify from "restify";
import { BotFrameworkAdapter } from "botbuilder";
import { calculate } from "./gateway/calculation-service.gateway";

const server = restify.createServer();
server.get("/test", (req, res) => {
    res.send("it works");
})

server.post('/api/messages', (req, res) => {
    const adapter = new BotFrameworkAdapter({
        //appId: process.env.MICROSOFT_APP_ID,
        //appPassword: process.env.MICROSOFT_APP_PASSWORD
    });

    adapter.processActivity(req, res, async (turnContext) => {
        const operation = turnContext.activity.text;

        if (!operation) {
            return;
        }
        const result = await calculate(operation);
        return turnContext.sendActivity(`${ operation } = ${ result }`);
    });    
});

server.listen(3600, () => {
    console.log(`\n ${ server.name } listening to ${ server.url }`);
});