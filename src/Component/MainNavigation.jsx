import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Register"
              className="text-white font-semibold hover:text-gray-300"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className="text-white font-semibold hover:text-gray-300"
            >
              Login for OSC
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
