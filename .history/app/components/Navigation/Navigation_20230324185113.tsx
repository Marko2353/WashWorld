import logo from "../img/logo.svg";

export default function Navigation() {
  return (
    <nav className="bg-black">
      <div className="flex items-center justify-center px-4 mx-auto h-22 max-w-7xl sm:px-6 lg:px-8">
        <a href="/">
          <img className="w-auto h-8" src={logo} alt="Logo" />
        </a>
      </div>
    </nav>
  );
}
