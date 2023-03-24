export default function Navigation() {
  return (
    <nav className="bg-black">
    <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
        <a href="/">
          <img className="w-auto h-8" src="logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center ml-10 space-x-4">
          <li><a href="#" className="text-gray-300 hover:text-white">Link 1</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Link 2</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Link 3</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
}


