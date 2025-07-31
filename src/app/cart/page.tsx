'use client'

import { Button } from '@/components/ui/button';
import { applyDiscount, Discount, validateCoupon } from '@/lib/discounts';
import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}


const initialCartItems: CartItem[] = [
  { id: 1, name: 'Product A', price: 19.99, quantity: 2, image: '/placeholder-image.png', description: 'Short description of Product A.' },
  { id: 2, name: 'Product B', price: 29.99, quantity: 1, image: '/placeholder-image.png', description: 'Short description of Product B.' },
  { id: 3, name: 'Product C', price: 9.99, quantity: 3, image: '/placeholder-image.png', description: 'Short description of Product C.' },
];




// This would typically come from an API or database
const availableDiscounts: Discount[] = [
  { id: 'discount-1', type: 'percentage', value: 10, code: 'SAVE10' },
  { id: 'discount-2', type: 'fixed', value: 5, code: 'FIXED5' },
];



const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<Discount | undefined>(undefined);
  const [couponError, setCouponError] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    if (appliedDiscount) {
      return applyDiscount(subtotal, appliedDiscount);
    }
    return subtotal;
  };

  const handleApplyCoupon = () => {
    const discount = validateCoupon(couponCode, availableDiscounts);
    if (discount) {
      setAppliedDiscount(discount);
      setCouponError('');
    } else {
      setAppliedDiscount(undefined);
      setCouponError('Invalid coupon code');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow lg:w-3/4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="border rounded-md p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-green-600 font-semibold mb-2">In Stock</p>
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                      <select
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="border rounded-md px-2 py-1"
                      >
                        {[...Array(10).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-blue-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="flex justify-end items-center pt-4">
                <h2 className="text-lg font-bold mr-2">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items):</h2>
                <p className="text-lg font-bold">${calculateSubtotal().toFixed(2)}</p>
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-1/4">
          <div className="border rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="mb-4">
              <label htmlFor="coupon" className="block text-sm font-medium text-gray-700">Coupon Code</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  className="flex-1 block w-full rounded-none rounded-l-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>
              </div>
              {couponError && <p className="mt-2 text-sm text-red-600">{couponError}</p>}
              {appliedDiscount && (
                <p className="mt-2 text-sm text-green-600">
                  Discount Applied: {appliedDiscount.code} ({appliedDiscount.type === 'percentage' ? `${appliedDiscount.value}%` : `$${appliedDiscount.value.toFixed(2)}`})
                </p>
              )}
            </div>
            <div className="flex justify-between text-lg font-bold mb-2">
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            {appliedDiscount && (
              <div className="flex justify-between text-lg font-bold text-green-600 mb-2">
                <span>Discount:</span>
                <span>
                  -
                  {appliedDiscount.type === 'percentage'
                    ? `$${(calculateSubtotal() * (appliedDiscount.value / 100)).toFixed(2)}`
                    : `$${appliedDiscount.value.toFixed(2)}`}
                </span>
              </div>
            )}
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>

            <Button className="bg-yellow-500 text-black w-full py-2 rounded-md font-semibold hover:bg-yellow-600">
              Proceed to Checkout
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
