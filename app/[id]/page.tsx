import BtnStartWash from "@/app/components/BtnStartWash/BtnStartWash";
import ProgramDetails from "@/app/components/ProgramDetails/ProgramDetails";
import Programs from "@/app/components/Programs/Programs";
import Link from "next/link";

async function getLocationData(locationId: number) {
  const res = await fetch(
    `https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/cam/${locationId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data.response;
}

async function getLocationName() {
  const res = await fetch(
    `https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations`
  );
  const data = await res.json();
  return data.response.locations;
}

export default async function LocationPage({ params }: any) {
  const locationData = await getLocationData(params.id);
  const locationName = await getLocationName();

  return (
    <section className="flex flex-col items-center px-6">
      <div className="max-w-7xl">
        {locationName?.map((locationName: any) => {
          return locationData.location === locationName.id ? (
            <h2 className="text-3xl font-bold mb-2  mt-14">
              {locationName.name}
            </h2>
          ) : (
            ""
          );
        })}
        <p className="text-base w-2/3 mb-14">{locationData.description}</p>
      </div>
      <div className="flex justify-between w-full max-w-7xl">
        <div>
          <div className="mb-16">
            <span className="text-lg font-bold">1. Your car</span>
            <p className="mt-2 mb-4 text-sm w-96">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio architecto ut vel quia placeat sint impedit expedita
              totam cum!
            </p>
            <div>
              <span>DK</span>
              <div className="flex items-center w-full px-4 py-2 border-2 border-gray-400 rounded-lg">
                <div className="flex items-center justify-center w-6 h-6 px-4 mr-2 font-bold text-white bg-blue-500">
                  DK
                </div>
                <input
                  value={locationData.lpn}
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <span className="text-lg font-bold">2. Location</span>

            {locationName?.map((locationName: any) => {
              return locationData.location === locationName.id ? (
                <p className="mt-2 text-sm w-96">{locationName.name}</p>
              ) : (
                ""
              );
            })}
          </div>

          <div className="mb-14">
            <span className="text-lg font-bold">3. Choose your program.</span>
            <p className="mt-2 mb-4 text-sm w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus fugiat repudiandae ipsum repellat sequi cupiditate
              excepturi labore rem totam provident?
            </p>
            <Programs />
          </div>
        </div>

        <div>
          <ProgramDetails />

          <BtnStartWash />
        </div>
      </div>
    </section>
  );
}
