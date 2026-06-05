import { getData } from "../lib/getData";
import type { TrajectoryData } from "../types/home/trayectoria";

import Trayectoria from "./Trayectoria";
import TrayectoriaTimeline from "./TrayectoriaTimeline";
import TrayectoriaInfo from "./TrayectoriaInfo";

export default async function PageTrajectory() {
    const trajectory = await getData<TrajectoryData>(
        "/data/home/trayectoria.json"
    );

    return (
        <>
            <Trayectoria trajectory={trajectory} />
            <TrayectoriaTimeline trajectory={trajectory} />
            <TrayectoriaInfo trajectory={trajectory} />
        </>
    );
}