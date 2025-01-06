export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: '3',
    name: 'Home & Living',
    image: 'https://picsum.photos/200/200?random=3'
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://picsum.photos/200/200?random=4'
  }
];