export interface Product {
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
}
