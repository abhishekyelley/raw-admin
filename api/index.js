import { config } from "dotenv";
config();

import AdminJS from "adminjs";
import { buildRouter } from "@adminjs/express";
import express from "express";

const staticsURL = new URL("/", process.env.NEXT_PUBLIC_URL);
const adminjs = new AdminJS(
    {
        assetsCDN: staticsURL,
        branding: {
            logo: false,
        }
    }
);
// adminjs.initialize();
const router = buildRouter(adminjs);
const app = express();
app.use(adminjs.options.rootPath, router);
export default app;
