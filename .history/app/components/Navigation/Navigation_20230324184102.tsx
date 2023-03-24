import logo from "../img/logo.svg";

export default function Navigation() {
  return (
    <nav className="bg-black">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <a href="/">
            <img className="w-auto h-8" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}
