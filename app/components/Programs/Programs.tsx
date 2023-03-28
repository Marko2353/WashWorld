import { useDispatch, useSelector } from "react-redux";
import { addClass } from "@/app/GlobalRedux/Features/selection/selectionSlice";
import * as Unicons from "@iconscout/react-unicons";

async function getPrograms() {
  const res = await fetch(
    "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:BV99123"
  );
  const data = await res.json();
  return data?.response.products as any[];
}

// const className = useSelector((state: any) => state.class.classes);
// const dispatch = useDispatch();

// const handleClick = () => {
//   dispatch(addClass("selected"));
// };

export default async function Programs() {
  const programs = await getPrograms();

  return (
    <>
      <div className="flex flex-col border-black border-solid w-fit divide-y-1 border-1">
        {programs?.reverse().map((program) => {
          return (
            <>
              <Program key={program.productid} program={program} />;
            </>
          );
        })}
      </div>
    </>
  );
}

function Program({ program }: any) {
  const { id, name, price } = program || {};

  return (
    <>
      <div
        // onClick={handleClick}
        key={id}
        role={"button"}
        className="program-btn hover:bg-gray-200"
      >
        <span className="flex items-center">
          <Unicons.UilCircle className="mr-4" />
          {name}
        </span>{" "}
        <span>DKK {price}/month</span>
      </div>
    </>
  );
}
