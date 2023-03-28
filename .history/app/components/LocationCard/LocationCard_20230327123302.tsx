import Link from "next/link";
import place from "../img/wash-place.png";
export default function LocationCard({ name, status, link }: any) {
  return (
    <div className="max-w-sm mx-2 my-4 overflow-hidden shadow-lg bg-grey">
      <img src={place} alt="img" className="object-cover w-full h-48" />
      <div className="px-4 py-2">
        <h2 className="mb-2 text-xl font-bold">Ssøborg</h2>
        <p className="text-base text-gray-700">{name}</p>
        <span>{status}</span>
        <a href={link} className="text-base underline">
          Vis på kort
        </a>
        <p className="text-base text-green-500 hover:text-green-700 font-bold">
          10 km
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href=""
          className="flex items-center justify-center w-1/3 h-full px-4 py-2 font-bold text-white transform -skew-x-12 bg-green-500 mt-8"
        >
          Læs mere
        </a>
      </div>
    </div>
  );
}
