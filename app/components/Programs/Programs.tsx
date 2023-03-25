import * as Unicons from "@iconscout/react-unicons";

export default function Programs() {
  return (
    <div className="flex flex-col w-fit divide-y-1 border-1 border-black border-solid">
      <div role={"button"} className="program-btn">
        <span className="flex items-center">
          <Unicons.UilCircle className=" mr-4" />
          All Inclusive
        </span>{" "}
        <span>DKK 229/month</span>
      </div>
      <div role={"button"} className="program-btn">
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
      </div>
    </div>
  );
}
