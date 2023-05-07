import figlet from "figlet";
import { Command, OptionValues } from "commander";
import path from "path";
import logger from "./utils/logger";
import testConfig from "./config/getConfig";
import * as replace from "./utils/replace";

const program = new Command();

program
  .version("0.0.1")
  .description("MetaCSR Generator")
  .option("-v, --verbose", "Verbose output")
  .option("-c, --config <path>", "Path to config file");

const options = program.opts();
program.parse(process.argv);
var verbose = false;

verbose = options.verbose;

export async function load() {
  if (options.verbose) {
    console.log(figlet.textSync("MetaCSR Generator"));
  }

  if (options.config) {
    console.log("Using config file: " + options.config);
    const absolutePath = path.resolve(options.config);
    logger.debug("Absolute path: " + absolutePath);

    replace.loadReplaces(await testConfig(options.config));
  }

}

export function getProgram(): Command {
  return program;
}

export function getOptions(): OptionValues {
  return options;
}

export function isVerbose(): boolean {
    return verbose;
}

load();

export default {
  load,
  getProgram,
  getOptions,
  isVerbose
};
