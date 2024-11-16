import { ArrowRight, Truck, Shield, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543076659-9380cdf10613?auto=format&fit=crop&q=80"
            alt="Fresh vegetables background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/50" />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fresh from Farm <br />
              <span className="text-emerald-400">to Your Table</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-xl">
              Experience the finest organic vegetables, delivered straight from local farms. 
              Taste the difference of truly fresh, sustainably grown produce.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/subscription"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
              >
                Subscribe & Save 15%
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
            <div className="flex items-center justify-center sm:justify-start text-white">
              <Truck className="h-6 w-6 flex-shrink-0" />
              <span className="ml-3 text-sm">Free Delivery Over $50</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <Leaf className="h-6 w-6 flex-shrink-0" />
              <span className="ml-3 text-sm">100% Organic Certified</span>
            </div>
            <div className="flex items-center justify-center sm:justify-end text-white">
              <Shield className="h-6 w-6 flex-shrink-0" />
              <span className="ml-3 text-sm">Freshness Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}