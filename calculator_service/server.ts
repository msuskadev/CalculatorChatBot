import * as restify from "restify";

const server = restify.createServer();
server.get("/calculate", (req, res) => {
    res.send("calculated");
})

server.listen(3001, () => {
    console.log(`\n ${ server.name } listening to ${ server.url }`);
});