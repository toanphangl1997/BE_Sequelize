import express from "express";
import rootRouter from "./src/routers/root.router.js";
import { createServer } from "node:http";

const app = express();

const server = createServer(app);

app.use(express.json());

app.use(rootRouter);

const PORT = 3009;

server.listen(3009, () => {
  console.log(`Server online at port ${PORT}`);
});
