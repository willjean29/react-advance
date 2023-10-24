import { ReactElement } from "react";

export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

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
  ({ product, children }: ProductProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element
}