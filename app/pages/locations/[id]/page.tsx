import BtnStartWash from "@/app/components/BtnStartWash/BtnStartWash";
import ProgramDetails from "@/app/components/ProgramDetails/ProgramDetails";
import Programs from "@/app/components/Programs/Programs";

async function getLocationData(locationId: string) {
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
  console.log(locationName);

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
      <div className="flex justify-between max-w-7xl w-full">
        <div>
          <div className="mb-16">
            <span className="text-lg font-bold">1. Your car</span>
            <p className="text-sm mt-2 mb-4 w-96">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio architecto ut vel quia placeat sint impedit expedita
              totam cum!
            </p>
            <div>
              <span>DK</span>
              <span>{locationData.lpn}</span>
            </div>
          </div>

          <div className="mb-16">
            <span className="text-lg font-bold">2. Location</span>
            <p className="text-sm mt-2  w-96">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              accusamus nisi quasi ut voluptate amet odit eos facere autem modi?
            </p>
          </div>

          <div className="mb-14">
            <span className="text-lg font-bold">3. Choose your program.</span>
            <p className="text-sm mt-2 mb-4  w-96">
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
