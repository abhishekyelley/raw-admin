import { bundle } from '@adminjs/bundler';
// import { ComponentLoader } from 'adminjs';
// const componentLoader = new ComponentLoader();
import { adminjs } from './src/index.js';
const componentLoader = adminjs.componentLoader;

(async () => {
    const files = await bundle({
        componentLoader,
        destinationDir: 'public', // relative to CWD
    });
})();