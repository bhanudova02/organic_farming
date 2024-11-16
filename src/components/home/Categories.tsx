import { Carrot, Leaf, Apple, Sprout } from 'lucide-react';
import type { Category } from '../../types';

const categories: Category[] = [
  { id: '1', name: 'Fresh Vegetables', icon: 'Carrot' },
  { id: '2', name: 'Leafy Greens', icon: 'Leaf' },
  { id: '3', name: 'Seasonal Fruits', icon: 'Apple' },
  { id: '4', name: 'Microgreens', icon: 'Sprout' },
];

const iconMap = {
  Carrot,
  Leaf,
  Apple,
  Sprout,
};

export default function Categories() {
  return (
    <div className="bg-emerald-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Categories</span>
          <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Shop by Category
          </h2>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Discover our wide selection of fresh, organic produce sourced directly from local farmers
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <div
                  key={category.id}
                  className="group relative bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                    <div className="flex items-center justify-center h-full">
                      <Icon className="h-16 w-16 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <a
                      href={`/shop?category=${category.id}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                    >
                      Browse Products
                      <span aria-hidden="true" className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}