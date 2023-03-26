import place from "../img/wash-place.png";
export default function LocationCard() {
  return (
<div className="overflow-hidden bg-white shadow-md hover:shadow-lg">
<img src={place} alt="imagen" className="object-cover w-full h-48" />
  <div className="px-4 py-2">
    <h2 className="mb-2 text-xl font-bold">Søborg</h2>
    <p className="text-base text-gray-700">Dynamovej 4, 2860 Søborg</p>
    <a href="#" className="text-base text-green-500 hover:text-green-700">Vis på kort</a>
    <p className="mt-2 text-base text-gray-700">10 km</p>
  </div>
  <div className="flex justify-end bg-gray-100">
    <a href="#" className="px-4 py-2 font-bold text-white bg-green-500 rounded-r-lg hover:bg-green-700">Læs mere</a>
  </div>
</div>


  );
}
