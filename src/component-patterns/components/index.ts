import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

