import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
// const route = require("./route/index.js");

const server = express();
// server.name = "backend";

server.use(bodyParser.urlencoded({ extended:true, limit:"50mb" }));
server.use(bodyParser.json({ limit: "50mb"}));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((request, response, next) => {
    const allowedOrigins = ["http://localhost:3000","http://localhost:3001","http://localhost:3002"];
    const origin = request.headers.origin;
    if (allowedOrigins.includes(origin)) {
        response.setHeader('Access-Control-Allow-Origin', origin);
    }
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
    response.header('Access-Control-Allow-Credentials', true);
    return next();
});

// server.use("/", route);
server.use((err, request, response, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    response.status(status).send(message);
});

export default server;
