export default function ProgramsDetails() {
  return (
    <div className="w-96">
      <div className="bg-green-200 px-4 pt-6 pb-4">
        <span className="font-bold text-3xl">Your basket</span>
        <p className="font-bold text-lg my-4">
          Pay for the chosen program and wash immediately
        </p>

        <div className="flex justify-between">
          <span className="text-sm">Premium</span>
          <span className="text-sm">DKK 149</span>
        </div>
      </div>
      <div className="bg-green-400 px-4 py-6 flex justify-between">
        <span className="font-bold text-2xl text-green-800">Payment now</span>
        <span className="font-bold text-2xl text-green-800">DKK 149</span>
      </div>
    </div>
  );
}
