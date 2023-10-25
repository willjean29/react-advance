import { ProductButtonsProps, ProductImageProps, ProductTitleProps } from "../components";
import { ProductCardProps } from "../components/ProductCard";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product;
  counter: number;
}

interface ProductInCart extends Product {
  count: number;
}

export type ProductInCartType = Record<string, ProductInCart>;