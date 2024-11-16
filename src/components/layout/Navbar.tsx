import { useState } from 'react';
import { ShoppingCart, Menu, X, Leaf, User, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3); // This would come from your cart context/state

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Delivery', href: '/delivery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="bg-white   w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-9 mt-4">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Leaf className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">
                  Organic<span className="text-emerald-600">Eats</span>
                </span>
              </a>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search for fresh produce..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a href="/account" className="text-gray-600 hover:text-emerald-600">
                <User className="h-6 w-6" />
              </a>
              <div className="relative">
                <a href="/cart" className="text-gray-600 hover:text-emerald-600">
                  <ShoppingCart className="h-6 w-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </a>
              </div>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-emerald-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search for fresh produce..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/account"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
              >
                My Account
              </a>
              <a
                href="/cart"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
              >
                Cart ({cartCount})
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}