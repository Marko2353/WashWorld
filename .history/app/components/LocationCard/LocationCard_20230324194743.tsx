import place from "../img/wash-place.png"
export default function LocationCard() {
  return (
<div className="max-w-sm mx-2 my-4 overflow-hidden shadow-lg bg-slate-300">
  <img src={place} alt="imagen" className="object-cover w-full h-48" />
 
  <a href="#" className="flex items-center justify-center h-full px-4 py-2 font-bold text-white transform -skew-x-12 bg-green-500">Læs mere</a>
  </div>



  );
}