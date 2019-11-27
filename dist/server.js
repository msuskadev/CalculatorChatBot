"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const botbuilder_1 = require("botbuilder");
const server = restify.createServer();
server.get("/test", (req, res) => {
    res.send("dziala");
});
server.post('/api/messages', (req, res) => {
    const adapter = new botbuilder_1.BotFrameworkAdapter({
    //appId: process.env.MICROSOFT_APP_ID,
    //appPassword: process.env.MICROSOFT_APP_PASSWORD
    });
    adapter.processActivity(req, res, async (turnContext) => {
        return turnContext.sendActivity(`You said ${turnContext.activity.text}`);
    });
});
server.listen(3600, () => {
    console.log(`\n ${server.name} listening to ${server.url}`);
});
//# sourceMappingURL=server.js.map