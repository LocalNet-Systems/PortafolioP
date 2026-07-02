import { getData } from "../../lib/getData";
import type { LawyerProfile } from "../../types/team/lawyer";

import Perfil from "../components/Perfil";
import ExperienciaTimeline from "../components/ExperienciaTimeline";
import PerfilInfo from "../components/PerfilInfo";

export default async function PageProfile({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params
    const profile = await getData<LawyerProfile>(
        `/data/team/lawyers/${id}.json`
    );
    return (
        <>
            <Perfil profile={profile} />
            <ExperienciaTimeline profile={profile} />
            <PerfilInfo profile={profile} />
        </>
    );
}