export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isOnSale?: boolean;
  originalPrice?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: "Men's Fleece Pullover",
    price: 100.00,
    image: 'https://example.com/green-hoodie.jpg',
    category: 'Hoodies'
  },
  {
    id: '2',
    name: 'Fleece Pullover Skate',
    price: 150.97,
    image: 'https://example.com/black-hoodie.jpg',
    category: 'Hoodies'
  },
  {
    id: '3',
    name: 'Fleece Skate Hoodie',
    price: 110.00,
    image: 'https://example.com/yellow-hoodie.jpg',
    category: 'Hoodies'
  },
  {
    id: '4',
    name: "Men's Ice-Dye Pullover",
    price: 128.97,
    image: 'https://example.com/tie-dye-hoodie.jpg',
    category: 'Hoodies'
  }
];