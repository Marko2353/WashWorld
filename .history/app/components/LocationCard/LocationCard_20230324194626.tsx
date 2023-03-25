import place from "../img/wash-place.png"
export default function LocationCard() {
  return (
<div className="max-w-sm overflow-hidden shadow-lg bg-grey">
  <img src={place} alt="imagen" className="object-cover w-full h-48" />
 
  <a href="#" className="flex items-center justify-center w-1/3 h-full px-4 py-2 font-bold text-white transform -skew-x-12 bg-green-500">Læs mere</a>
  </div>



  );
}