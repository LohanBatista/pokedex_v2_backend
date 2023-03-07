import { IncomingMessage, ServerResponse } from "http";

const http = require("http"); // Import Node.js core module
const port = 3000; // port number

const routes = {
  "/": "Hello World!",
  "/register": "cadastro de usuário",
  "/login": "login de usuário",
  "/logout": "logout de usuário",
  "/profile": "perfil de usuário",
};

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    //create web server
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]);
  }
);

server.listen(port, () => {
  // - listen for any incoming requests
  console.log(`Server listening on port ${port}`);
});
