import { config, route, replaceMap } from "./../interfaces/config";
import path from "path";
import fs from "fs";
import logger from "./logger";

export function replaceAll(
    originalContent: string,
    writeaPath: string,
    search: string,
    replace: string,
    replaceMap?: replaceMap[]
) {
    try {

        if (writeaPath.endsWith("/.html")) {
            writeaPath = writeaPath.replace(".html", "index.html");
        }
        
        fs.mkdirSync(path.dirname(path.resolve(writeaPath)), { recursive: true });

        let newContent = originalContent.replace(search, replace);
        
        if (replaceMap) {
            replaceMap.forEach((replace: replaceMap) => {
                newContent = newContent.replace(replace.search, replace.replace);
            });
        }

        fs.writeFileSync(path.resolve(writeaPath), newContent, "utf8");
    } catch (err) {
        logger.error(
            "An error occured while replacing the content of the file: " + err
        );
    }
}

export function loadReplaces(config: config) {
    const folder = path.dirname(path.resolve(config.baseHtmlPath));

    const originalContent = fs.readFileSync(path.resolve(config.baseHtmlPath), "utf8");

    config.routes.forEach((route: route) => {
        fs.mkdirSync(path.resolve(config.distPath as string), { recursive: true });

        logger.debug("Replacing " + route.name + " with " + route.path);
        replaceAll(
            originalContent,
            config.distPath + route.path + "/" + "index.html",
            "{%description%}",
            route.description as string,
            route.replaceMap
        );
    });
}
