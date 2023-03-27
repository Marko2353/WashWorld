import * as Unicons from "@iconscout/react-unicons";

async function getPrograms() {
  const res = await fetch(
    "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:lpn"
  );
  const data = await res.json();
  return data?.response.products as any[];
}

export default async function Programs() {
  const programs = await getPrograms();

  return (
    <div className="flex flex-col w-fit divide-y-1 border-1 border-black border-solid">
      {programs?.map((program) => {
        return <Program key={program.productid} program={program} />;
      })}

      {/* <div role={"button"} className="program-btn">
        <span className="flex items-center">
          <Unicons.UilCircle className=" mr-4" />
          Premium Plus
        </span>{" "}
        <span>DKK 159/month</span>
      </div>
      <div role={"button"} className="program-btn">
        <span className="flex items-center">
          <Unicons.UilCircle className=" mr-4" />
          Premium
        </span>{" "}
        <span>DKK 149/month</span>
      </div>
      <div role={"button"} className="program-btn">
        <span className="flex items-center">
          <Unicons.UilCircle className=" mr-4" />
          Gold
        </span>{" "}
        <span>DKK 119/month</span>
      </div>
      <div role={"button"} className="program-btn">
        <span className="flex items-center">
          <Unicons.UilCircle className=" mr-4" />
          Basic
        </span>{" "}
        <span>DKK 69/month</span>
      </div> */}
    </div>
  );
}

function Program({ program }: any) {
  const { id, name, price } = program || {};

  return (
    <div key={id} role={"button"} className="program-btn">
      <span className="flex items-center">
        <Unicons.UilCircle className=" mr-4" />
        {name}
      </span>{" "}
      <span>DKK {price}/month</span>
    </div>
  );
}
