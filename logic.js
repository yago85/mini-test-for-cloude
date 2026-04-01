const { TAX_RATE, CART_ITEMS } = require("./data");

const DISCOUNT_TIERS = [
  { threshold: 500, rate: 0.05 },
  { threshold: 1000, rate: 0.1 },
  { threshold: 2000, rate: 0.2 },
];

function getDiscount(subtotal) {
  for (const tier of DISCOUNT_TIERS) {
    if (subtotal >= tier.threshold) {
      return tier.rate;
    }
  }
  return 0;
}

function calcTotal(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * TAX_RATE;
  const discountRate = getDiscount(subtotal);
  const discount = subtotal * discountRate;
  return subtotal + tax - discount;
}

function formatResult(total) {
  return "Order total: $" + total.toFixed(2);
}

const total = calcTotal(CART_ITEMS);
console.log("Order total: $" + total);

if (total.toFixed(2) === "1214.78") {
  console.log("SUCCESS");
} else {
  console.log("FAIL — got: " + total.toFixed(2));
}
