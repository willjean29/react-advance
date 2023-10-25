import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);
  const increseBy = (value: number) => {
    if (isControlled.current && onChange) {
      return onChange({ product, counter: value });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, counter: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increseBy,
  };
};
