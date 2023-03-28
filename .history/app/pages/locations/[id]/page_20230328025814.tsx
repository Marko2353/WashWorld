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
  return data;
}

export default async function LocationPage({ params }: any) {

  const locationData = await getLocationData(params.id);

  return (
    <section className="flex flex-col items-center px-6">
      <div className="max-w-7xl">
        <h2 className="mb-2 text-3xl font-bold mt-14">Some text here</h2>
        <p className="w-2/3 text-base mb-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          vel maxime, illum odit a commodi ad et impedit voluptatibus sed, est,
          quas aliquam repudiandae! Recusandae maxime rerum nesciunt quibusdam
          doloribus.
        </p>
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
        value="BV99123"
        className="w-full outline-none"
      />
    </div>

            </div>
          </div>

          <div className="mb-16">
            <span className="text-lg font-bold">2. Location</span>
            <p className="mt-2 text-sm w-96">
            {params.id == 1 ? "Dynamovej 10" : params.id == 2 ? "Dynamovej 22" : params.id == 3 ? "Aalborg hovedvej 19" : "Køgevej 198"}
</p>
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
          <Link>
          <BtnStartWash />
          </Link>
        </div>
      </div>
    </section>
  );
}
