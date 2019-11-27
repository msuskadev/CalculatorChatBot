import * as restify from "restify";

const server = restify.createServer();

server.post("/calculate", (req, res) => {
    const operation = Buffer.from(req.read()).toString();
    
    if (operation.indexOf("+") >= 0) {
        const numbers = operation.split("+");
        return res.send(200, Number(numbers[0]) + Number(numbers[1]));
    }

    if (operation.indexOf('-') >= 0) {
        const numbers = operation.split("-");
        return res.send(200, Number(numbers[0]) - Number(numbers[1]));
    }

    if (operation.indexOf('*') >= 0) {
        const numbers = operation.split("*");
        return res.send(200, Number(numbers[0]) * Number(numbers[1]));
    }

    if (operation.indexOf('/') >= 0) {
        const numbers = operation.split("/");
        return res.send(200, Number(numbers[0]) / Number(numbers[1]));
    }
})

server.listen(3001, () => {
    console.log(`\n ${ server.name } listening to ${ server.url }`);
});
