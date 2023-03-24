import logo from "../img/logo.svg";

export default function Navigation() {
  return (
    <nav className="bg-black">
      <div className="flex items-center justify-center h-16">
        <a href="/">
          <img className="w-auto h-8" src={logo} alt="Logo" />
        </a>
      </div>
    </nav>
  );
}
