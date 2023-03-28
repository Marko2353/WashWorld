import LocationCard from "@/app/components/LocationCard/LocationCard";
import Link from "next/link";

async function getLocations() {
  const res = await fetch(
    "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations"
  );
  const data = await res.json();
  return data?.response.locations as any[];
}

export default async function Locations() {
  const locations = await getLocations();

  return (
    <section>
      {locations?.map((location) => {
        return <Location key={location.id} location={location} />;
      })}
    </section>
  );
}

function Location({ location }: any) {
  const { id, name, status } = location || {};

  return (
    <LocationCard name={name} status={status} link={`/pages/locations/${id}`} />
  );
}
