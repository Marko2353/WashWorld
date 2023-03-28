import Link from "next/link";
import place from "../img/wash-place.png";

export default function LocationCard({ name, status, url }: any) {
  const isAvailable = status === "available";

  return (
    <div
      className={`max-w-sm mx-2 my-4 overflow-hidden shadow-lg ${
        isAvailable ? "bg-grey" : "bg-black"
      }`}
    >
      <img src={place} alt="img" className="object-cover w-full h-48" />
      <div className="px-4 py-2">
        <h2 className="mb-2 text-xl font-bold">{name}</h2>
        <p className="text-base text-gray-700">{name}</p>
        <a
          href="#"
          className="text-base underline hover:text-green-700"
          onClick={(e) => {
            e.preventDefault();
            // Aquí puedes añadir el comportamiento que desees
          }}
        >
          Vis på kort
        </a>
        <p className={`text-base font-bold ${isAvailable ? "text-green-500" : "text-white"}`}>
          {status}
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href={url}
          className={`flex items-center justify-center w-1/3 h-full px-4 py-2 mt-8 font-bold text-white transform -skew-x-12 ${
            isAvailable ? "bg-green-500 hover:bg-green-700" : "bg-gray-500 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!isAvailable) {
              e.preventDefault();
            }
          }}
        >
          Læs mere
        </a>
      </div>
    </div>
  );
}
