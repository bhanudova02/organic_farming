export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fiber: number;
  };
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'newest';