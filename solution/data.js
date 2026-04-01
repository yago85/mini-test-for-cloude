const TAX_RATE = 0.08; // fix A: was 8, must be a decimal fraction

const CART_ITEMS = [
  { name: "Widget", price: 49.99, qty: 8 },
  { name: "Gadget", price: 149.99, qty: 5 }, // fix B: was 249.99
  { name: "Doohick", price: 9.99, qty: 10 },
];

module.exports = { TAX_RATE, CART_ITEMS };
