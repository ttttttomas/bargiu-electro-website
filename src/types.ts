export interface Product {
<<<<<<< HEAD
  id: string;
  title: string;
  price: number;
  category: string;
  sub_categorys: string[];
  sub_category_main: string;
  main_image: string;
  images: string[];
  details_list: string[];
  stock: boolean;
  height: number;
  width: number;
  depth: number;
=======
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
>>>>>>> 1243bbd38c9f3328dc48dc1e32f74d030535e023
}
