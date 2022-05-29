import ProductType from 'types/product';

type Edge = {
  cursor: string;
  node: ProductType;
};

export type ProductData = {
  products: {
    edges: Edge[];
  };
}
