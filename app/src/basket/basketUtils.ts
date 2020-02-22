import { Package, BasketLine } from "../types";

/**
 * Create an array of BasketLines from basket items
 */
export const calcBasketLines = (items: Package[]): BasketLine[] => {
  const basketLinesMap = new Map<string, BasketLine>();
  items.forEach(item => {
    const workingItem: BasketLine = basketLinesMap.get(item.id) || {
      pkg: item,
      quantity: 0,
    };
    workingItem.quantity++;
    basketLinesMap.set(item.id, workingItem);
  });
  return Array.from(basketLinesMap.values());
};

/**
 * Calculate a subtotal from array of BasketLines
 */
export const calcSubtotal = (basketLines: BasketLine[]): number =>
  basketLines.reduce(
    (tally, basketLine) => tally + basketLine.pkg.price * basketLine.quantity,
    0
  );

/**
 * Calculate a 10% discount amount from basket items
 */
export const calcDiscount = (items: Package[], subtotal: number): number =>
  items.length < 2 ? 0 : 0.1 * subtotal;

/**
 * Calculate a grand total from subtotal and discount
 */
export const calcGrandTotal = (subtotal: number, discount: number): number =>
  subtotal - discount;
