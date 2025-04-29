import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow relative z-50">
      {/* Main bar: logo + nav + toggle */}
      <div className="flex items-center justify-between px-4 py-4 lg:py-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800">Justice & Co.</h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-gray-700 items-center">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/practice-areas" className="hover:text-blue-600">Practice Areas</a>
          <a href="/attorneys" className="hover:text-blue-600">Attorneys</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile toggle button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          )}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Nav */}
      <nav
        className={`flex flex-col gap-4 text-gray-700 bg-white p-6 absolute top-full left-0 w-full shadow-md z-50 transition-all duration-300 ease-in-out lg:hidden ${
          open ? 'opacity-100 visible translate-y-0' : 'hidden'
        }`}
      >
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/practice-areas" className="hover:text-blue-600">Practice Areas</a>
        <a href="/attorneys" className="hover:text-blue-600">Attorneys</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}
