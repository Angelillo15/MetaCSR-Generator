import {isVerbose} from "../index";

export const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  reset: "\x1b[0m",
};

/**
 * Logs an info message to the console
 * @param message Message to be logged
 */
export const info = (message: string): void => {
  console.log(`${colors.cyan}[✨]${colors.reset} ${message} ${colors.reset}`);
};

/**
 * Logs an error message to the console
 * @param message Message to be logged
 */
export const error = (message: string): void => {
  console.log(`${colors.red}[❌]${colors.reset} ${message} ${colors.reset}`);
};

/**
 * Logs a success message to the console
 * @param message Message to be logged
 */
export const success = (message: string): void => {
  console.log(`${colors.green}[✅]${colors.reset} ${message} ${colors.reset}`);
};

/**
 * Logs a warning message to the console
 * @param message Message to be logged
 */
export const warning = (message: string): void => {
  console.log(`${colors.yellow}[⚠️]${colors.reset} ${message} ${colors.reset}`);
};

/**
 * Clear the console
 */
export const clear = (): void => {
  console.clear();
};

/**
 * Logs a debug message to the console
 * @param message Message to be logged
 */
export const debug = (message: string): void => {
  if (!isVerbose()) return;
  console.log(`${colors.magenta}[🐛]${colors.reset} ${message} ${colors.reset}`);
};

export default {
  colors,
  info,
  error,
  success,
  warning,
  clear,
  debug
};
