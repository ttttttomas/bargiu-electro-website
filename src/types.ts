export interface Product {
  id: number;
  main_image: string;
  title: string;
  price: number;
  details_id: string;
  category: string;
  sub_category: string;
  stock: boolean;
  height?: number;
  width?: number;
  depth?: number;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
}
