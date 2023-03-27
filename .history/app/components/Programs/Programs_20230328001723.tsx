import * as Unicons from "@iconscout/react-unicons";
import { useState } from "react";

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
  function ProgramButton({ id, name, price }) {
    const [selected, setSelected] = useState(false);
  
    const handleClick = () => {
      setSelected(!selected);
    };
  
    return (
      <div
        key={id}
        role={"button"}
        className={`program-btn ${selected ? "bg-gray-200" : ""}`}
        onClick={handleClick}
      >
        <span className="flex items-center">
          {selected ? (
            <Unicons.UilCheckCircle className="mr-4" />
          ) : (
            <Unicons.UilCircle className="mr-4" />
          )}
          {name}
        </span>{" "}
        <span>DKK {price}/month</span>
      </div>
    );
  }
  
