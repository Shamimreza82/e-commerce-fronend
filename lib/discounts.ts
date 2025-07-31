export interface Discount {
  id: string;
  type: 'percentage' | 'fixed';
  value: number;
  code?: string;
}

export function applyDiscount(price: number, discount: Discount): number {
  if (discount.type === 'percentage') {
    return price * (1 - discount.value / 100);
  } else if (discount.type === 'fixed') {
    return price - discount.value;
  }
  return price;
}


export function validateCoupon(couponCode: string, availableDiscounts: Discount[]): Discount | undefined {
  return availableDiscounts.find(discount => discount.code === couponCode);
}