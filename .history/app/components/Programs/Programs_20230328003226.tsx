import * as Unicons from "@iconscout/react-unicons";

async function getPrograms() {
  const res = await fetch(
    "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:BV99123"
  );
  const data = await res.json();
  console.log(data);
  return data?.response.products as any[];
}

export default async function Programs() {
  const programs = await getPrograms();

  return (
    <div className="flex flex-col border-black border-solid w-fit divide-y-1 border-1">
      {programs?.reverse().map((program) => {
        return <Program key={program.productid} program={program} />;
      })}
    </div>
  );
}

function Program({ program }: any) {
  const { id, name, price } = program || {};

  return (
    <div key={id} role={"button"} className="program-btn hover:bg-gray-200">
  <span className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-inner-shadow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18.364 18.364a9 9 0 1 1 -12.728 -12.728a9 9 0 0 1 12.728 12.728z"></path>
   <path d="M16.243 7.757a6 6 0 0 1 0 8.486"></path>
</svg>
    {name}
  </span>{" "}
  <span>DKK {price}/month</span>
</div>
  );
}
