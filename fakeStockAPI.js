export function getStockData() {
  const stockDate = new Date();
  return {
    name: "QtechAI",
    sym: "QTA",
    price: Math.random() * 3,
    time:
      stockDate.getHours() +
      ":" +
      stockDate.getMinutes() +
      ":" +
      stockDate.getSeconds(),
  };
}
