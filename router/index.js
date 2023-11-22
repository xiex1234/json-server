const jsonServer = require("json-server");
const server = jsonServer.create();
let LoginRouter = require("./login");
let root = require("./root");

server.use(LoginRouter);
server.use(root);

module.exports = server;
