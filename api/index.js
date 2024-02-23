import { config } from "dotenv";
config();

import AdminJS from "adminjs";
import { buildRouter } from "@adminjs/express";
import express from "express";


// resource: Transaction,
//     options: {
//     properties: {
//         price: {
//             type: 'currency',
//       },
//         phone: {
//             type: 'phone',
//       },
//     },
//     navigation: {
//         name: 'App',
//             icon: 'Settings',
//     }
// }
let staticsURL;
try{
    staticsURL = new URL("/", process.env.VERCEL_URL || 'http://localhost:3000');
}
catch(e) {
    console.error(e);
    staticsURL = 'https://raw-admin-cokt.vercel.app/';
}
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
app.get('*', (req, res) => {
    res.send(`
    <a href='/admin'><h1>Go to admin page</h1></a>
    `);
});
export default app;
