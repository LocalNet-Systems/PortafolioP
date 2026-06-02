import { promises as fs } from "fs";
import path from "path";

export async function getData<T>(filePath: string): Promise<T> {
  const fullPath = path.join(process.cwd(), "public", filePath);
  const file = await fs.readFile(fullPath, "utf-8");

  return JSON.parse(file);
}