import place from "../img/wash-place.png"
export default function LocationCard() {
  return (
<div className="max-w-sm mx-2 my-4 overflow-hidden bg-white shadow-lg">
  <img src={place} alt="imagen" className="object-cover w-full h-48" />
  <p>hello</p>
  <p>hello</p>
    <div className="flex justify-end">
  <a href="#" className="flex items-center justify-center w-1/3 px-4 py-2 font-bold text-white transform -skew-x-12 bg-green-500">Select</a>
  </div>
  </div>



  );
}