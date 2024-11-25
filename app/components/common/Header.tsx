// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white text-gray-900">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/RYDEPRO_BLACK.png" alt="RYDEPRO Logo" width={55} height={55} />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex gap-10 list-none">
          <li>
            <Link href="/" className="hover:text-gray-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/promotions" className="hover:text-gray-700 transition">
              Promotions
            </Link>
          </li>
          <li>
            <Link href="/service-area" className="hover:text-gray-700 transition">
              Service Area
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-700 transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-200 transition">
          Login
        </button>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
