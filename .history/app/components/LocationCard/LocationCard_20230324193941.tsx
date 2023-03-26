import place from "../img/wash-place.png"
export default function LocationCard() {
  return (
<div className="flex flex-wrap justify-between max-w-3xl mx-auto">
  <div className="w-full px-2 mb-4 sm:w-1/2 md:w-1/3">
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
      <img src={place} alt="imagen" className="object-cover w-full h-48" />
      <div className="px-4 py-2">
        <h2 className="mb-2 text-xl font-bold">Søborg</h2>
        <p className="text-base text-gray-700">Dynamovej 4, 2860 Søborg</p>
        <a href="#" className="text-base text-green-500 hover:text-green-700">Vis på kort</a>
        <p className="mt-2 text-base text-gray-700">10 km</p>
      </div>
      <div className="flex justify-end pb-2 pr-4 bg-green-500">
        <a href="#" className="px-4 py-2 font-bold text-white rounded">Læs mere</a>
      </div>
    </div>
  </div>
  <div className="w-full px-2 mb-4 sm:w-1/2 md:w-1/3">
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
      <img src={place} alt="imagen" className="object-cover w-full h-48" />
      <div className="px-4 py-2">
        <h2 className="mb-2 text-xl font-bold">Søborg</h2>
        <p className="text-base text-gray-700">Dynamovej 4, 2860 Søborg</p>
        <a href="#" className="text-base text-green-500 hover:text-green-700">Vis på kort</a>
        <p className="mt-2 text-base text-gray-700">10 km</p>
      </div>
      <div className="flex justify-end pb-2 pr-4 bg-green-500">
        <a href="#" className="px-4 py-2 font-bold text-white rounded">Læs mere</a>
      </div>
    </div>
  </div>
  <div className="w-full px-2 mb-4 sm:w-1/2 md:w-1/3">
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
      <img src={place} alt="imagen" className="object-cover w-full h-48" />
      <div className="px-4 py-2">
        <h2 className="mb-2 text-xl font-bold">Søborg</h2>
        <p className="text-base text-gray-700">Dynamovej 4, 2860 Søborg</p>
        <a href="#" className="text-base text-green-500 hover:text-green-700">Vis på kort</a>
        <p className


  );
}