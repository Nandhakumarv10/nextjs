'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Logo
          </div>
        <div className="flex space-x-6">
          <Link href="./Home" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="./About" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link href="./Contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          <Link href="./Blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
