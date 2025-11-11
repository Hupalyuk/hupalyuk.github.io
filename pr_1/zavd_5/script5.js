const orders = [
  {
    orderId: 1,
    customer: { name: "Іван", email: "ivan@example.com" },
    items: ["Ноутбук", "Мишка"],
    total: 25000
  },
  {
    orderId: 2,
    customer: { name: "Марія", email: "maria@example.com" },
    items: ["Смартфон"],
    total: 18000
  },
  {
    orderId: 3,
    customer: { name: "Іван", email: "ivan@example.com" },
    items: ["Навушники", "Клавіатура"],
    total: 5000
  },
  {
    orderId: 4,
    customer: { name: "Олег", email: "oleg@example.com" },
    items: ["Монітор"],
    total: 12000
  }
];

function getTotalSpentByCustomer(orders, customerName) {
  return orders
    .filter(order => order.customer.name === customerName)
    .reduce((sum, order) => sum + order.total, 0);
}

console.log(getTotalSpentByCustomer(orders, "Іван")); 
console.log(getTotalSpentByCustomer(orders, "Марія"));
