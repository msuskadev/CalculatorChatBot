import * as restify from "restify";
import { BotFrameworkAdapter } from "botbuilder";
import { calculate } from "./gateway/calculation-service.gateway";
import { config }  from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../.env") });
const server = restify.createServer();
server.get("/test", (req, res) => {
    const response = `
    BOT_PORT=${process.env.BOT_PORT}
    CALC_SERVICE_URL=${process.env.CALC_SERVICE_URL}
    MICROSOFT_APP_ID=${process.env.MICROSOFT_APP_ID}
    MICROSOFT_APP_PASSWORD=${process.env.MICROSOFT_APP_PASSWORD}`;

    res.sendRaw(response);
})

server.post('/api/messages', (req, res) => {
    const adapter = new BotFrameworkAdapter({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    });

    adapter.processActivity(req, res, async (turnContext) => {        
        const operation = turnContext.activity.text;

        if (!operation) {
            return;
        }
        const result = await calculate(operation);
        return turnContext.sendActivity(`${ operation }=${ result }`);
    });    
});

server.listen(process.env.BOT_PORT || 3600, () => {
    console.log(`\n ${ server.name } listening to ${ server.url }`);
});