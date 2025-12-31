
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md h-16 flex items-center fixed w-full top-0 z-50">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">Event Aggregator</Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/events" className="text-gray-700 hover:text-indigo-600 font-medium">Events</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
            <Link to="/register/student" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium transition">Register</Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t absolute top-16 w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/events" className="block px-2 py-2 text-gray-700">Events</Link>
            <Link to="/about" className="block px-2 py-2 text-gray-700">About</Link>
            <Link to="/contact" className="block px-2 py-2 text-gray-700">Contact</Link>
            <Link to="/register/student" className="block px-2 py-2 text-indigo-600 font-medium">Register</Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;