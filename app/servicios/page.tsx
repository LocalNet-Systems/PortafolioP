// PageServices.tsx
import { getData } from "../lib/getData";
import type { ServicesData } from "../types/home/services";
import Servicios from "./Servicios";

export default async function PageServices() {
  const services = await getData<ServicesData>("/data/home/services.json");

  return <Servicios services={services} />;
}