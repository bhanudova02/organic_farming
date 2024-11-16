import { Star, ShoppingCart, Heart } from 'lucide-react';
import type { Product } from '../../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Baby Spinach',
    description: 'Fresh, tender baby spinach leaves packed with nutrients',
    price: 4.99,
    category: 'Leafy Greens',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80',
    nutrition: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fiber: 2.2
    },
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Heirloom Tomatoes',
    description: 'Colorful mix of heritage tomato varieties',
    price: 6.99,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80',
    nutrition: {
      calories: 22,
      protein: 1.1,
      carbs: 4.8,
      fiber: 1.4
    },
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Rainbow Carrots',
    description: 'Sweet and crunchy carrots in vibrant colors',
    price: 5.49,
    category: 'Root Vegetables',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80',
    nutrition: {
      calories: 41,
      protein: 0.9,
      carbs: 9.6,
      fiber: 2.8
    },
    inStock: true,
    rating: 4.7,
    reviews: 156
  }
];

export default function FeaturedProducts() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <a href="/shop" className="text-emerald-600 hover:text-emerald-700 font-medium">
            View All <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative">
                <div className="w-full min-h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-rose-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      <a href={`/product/${product.id}`}>
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-lg font-medium text-emerald-600">&#8377;{product.price}</p>
                </div>
                
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">({product.reviews})</p>
                  {product.inStock ? (
                    <span className="ml-auto text-sm text-emerald-600">In Stock</span>
                  ) : (
                    <span className="ml-auto text-sm text-red-600">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}