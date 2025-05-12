import dotenv from 'dotenv';
dotenv.config();

export class Logger {

  private static getTimestamp(): string {
    return new Date().toISOString();
  }

  static log(title: string, response: unknown) {
    console.log(`[${this.getTimestamp()}] ${title}:`);
    console.dir(response, { depth: null });
  }

  static error(title: string, error: unknown) {
    console.error(`[${this.getTimestamp()}] ${title}:`);
    console.dir(error, { depth: null });
  }
}