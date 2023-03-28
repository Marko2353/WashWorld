import Link from "next/link";
import logo from "../img/logo.svg";

export default function Navigation() {
  return (
    <nav className="bg-black">
      <div className="flex items-center justify-center h-20">
        <Link href="/WashInProcess">
          <img className="w-auto h-8" src={logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
}