import { replaceMap } from './../interfaces/config';
import path from "path"
import logger from "../utils/logger";
import config from "../interfaces/config";

export default async (configPath: string):Promise<config> => {
    const absolutePath = path.resolve(configPath);
    logger.debug("Absolute path: " + absolutePath);
    try {
        const configRaw = await import(absolutePath);
        let config:config = configRaw.default;
        if (!config) {
            logger.error("Config file not found");
            process.exit(1);
        }
        return config;
    } catch (err) {
        logger.error("Config file not found " + err);
        process.exit(1);
    }
}