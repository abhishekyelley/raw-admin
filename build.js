import { bundle } from '@adminjs/bundler';
import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();

(async () => {
    const files = await bundle({
        componentLoader,
        destinationDir: 'public', // relative to CWD
    });
})();