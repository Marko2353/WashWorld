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
  const [valor, setValor] = useState(0);
  return (
    <div key={id} role={"button"} className="program-btn hover:bg-gray-200">
  <span className="flex items-center">
    <Unicons.UilCircle className="mr-4" />
    {name}
    <div>
      <p>El valor actual es: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Incrementar</button>
    </div>
  </span>{" "}
  <span>DKK {price}/month</span>
</div>
  );
}
