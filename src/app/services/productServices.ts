import axios from "axios";

import {Product} from "@/types";

const baseURL = "https://mdpuf8ksxirarnlhtl6pxo2xylsjmtq8-barelectro-api.bargiuelectro.com";

const productService = {
  getAll: async (): Promise<Product[]> => {
    try {
      const res = await axios.get<Product[]>(`${baseURL}/products/products`);

      return res.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);

      return [];
    }
  },
  getByCategory: async (category: string): Promise<Product[]> => {
    try {
      const res = await axios.get<Product[]>(`${baseURL}/products/category/${category}`);

      return res.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);

      return [];
    }
  },
  getById: async (id: string): Promise<Product> => {
    const res = await axios.get<Product>(`${baseURL}/products/products/${id}`);

    return res.data;
  },
};

export default productService;
