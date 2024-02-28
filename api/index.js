import { config } from "dotenv";
config();

import { buildRouter } from "@adminjs/express";
import express from "express";

import { adminjs } from "../src/index.js";

const router = buildRouter(adminjs);

const app = express();
app.use(express.static("./public"))
app.use(adminjs.options.rootPath, router);
app.get('/', (req, res) => {
    res.send(`<a href='/admin'><h1>Go to admin page</h1></a>`);
});

export default app;