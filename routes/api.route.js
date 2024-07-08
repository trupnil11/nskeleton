import { Router } from 'express';
import { readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();
const apiPath = join(__dirname, '../app/api');

// Function to load routes dynamically
const loadRoutes = (path) => {
    const modules = readdirSync(path);
    modules.forEach((module) => {
        const modulePath = join(path, module);
        const stat = statSync(modulePath);
        if (stat.isDirectory()) {
            const routeFiles = readdirSync(modulePath);
            routeFiles.forEach((file) => {
                if (file.endsWith('.routes.js')) {
                    const filePath = join(modulePath, file);
                    const fileUrl = pathToFileURL(filePath).href;

                    import(fileUrl).then((route) => {
                        const routePath = `/${module.toLowerCase()}`;
                        router.use(routePath, route.default);
                    }).catch((err) => {
                        console.error(`Error importing ${file}:`, err);
                    });
                }
            });
        }
    });
};

// Load all routes in the apiPath
loadRoutes(apiPath);

export default router;
