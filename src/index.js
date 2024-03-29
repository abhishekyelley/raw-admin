import AdminJS from "adminjs";
import { ComponentLoader } from "adminjs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();
const DemoPage = componentLoader.add('demoPage', path.resolve(__dirname, "demoPage.jsx"));

let staticsURL;
// PUBLIC_URL is added in vercel
staticsURL = process.env.PUBLIC_URL ? ("https://" + process.env.PUBLIC_URL) : "http://localhost:3000";
staticsURL = new URL("/", staticsURL).href;  // ./public folder is made static and all files inside will be available at `${baseURL}/`

const adminOptions = {
    assetsCDN: staticsURL,
    branding: {
        logo: false,
    },
    componentLoader,
    pages: {
        demoPage: {
            label: "Demo Page",
            component: DemoPage,
            icon: "Info",
        }
    }
};

export const adminjs = new AdminJS(adminOptions);