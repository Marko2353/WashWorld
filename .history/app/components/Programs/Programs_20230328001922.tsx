import { useState } from "react";
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
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      key={id}
      role="button"
      className={`program-btn hover:bg-gray-200 ${
        isSelected ? "bg-gray-200" : ""
      }`}
      onClick={handleClick}
    >
      <span className="flex items-center">
        <Unicons.UilCircle className="mr-4" />
        {name}
      </span>{" "}
      {isSelected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-check-filled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>
      )}
      <span>DKK {price}/month</span>
    </div>
  );
}
