const { TAX_RATE, CART_ITEMS } = require("./data");

const DISCOUNT_TIERS = [
  { threshold: 500, rate: 0.05 },
  { threshold: 1000, rate: 0.1 },
  { threshold: 2000, rate: 0.2 },
];

// fix 1: iterate from highest tier down
function getDiscount(subtotal) {
  for (let i = DISCOUNT_TIERS.length - 1; i >= 0; i--) {
    if (subtotal >= DISCOUNT_TIERS[i].threshold) {
      return DISCOUNT_TIERS[i].rate;
    }
  }
  return 0;
}

// fix 2: tax applies AFTER discount
function calcTotal(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountRate = getDiscount(subtotal);
  const discount = subtotal * discountRate;
  const afterDiscount = subtotal - discount;
  const tax = afterDiscount * TAX_RATE;
  return afterDiscount + tax;
}

function formatResult(total) {
  return "Order total: $" + total.toFixed(2);
}

const total = calcTotal(CART_ITEMS);
console.log(formatResult(total)); // fix 3: use formatResult

if (total.toFixed(2) === "1214.78") {
  console.log("SUCCESS");
} else {
  console.log("FAIL — got: " + total.toFixed(2));
}
