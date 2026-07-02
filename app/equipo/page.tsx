import Equipo from "./Equipo";
import type { Lawyer } from "@/app/types/team/team";
import fs from "fs/promises";
import path from "path";

async function getLawyers(): Promise<Lawyer[]> {
    const filePath = path.join(
        process.cwd(),
        "public/data/team/index.json"
    );
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

export default async function Page() {
    const lawyers = await getLawyers();
    return <Equipo lawyers={lawyers} />;
}