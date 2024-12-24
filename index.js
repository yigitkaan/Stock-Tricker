import { getStockData } from "./fakeStockAPI.js";

const checkPriceAction = (price, previousPrice) => {
  let symbol = "";

  if (price > previousPrice) {
    symbol = "./svg/green.svg";
  } else if (price === previousPrice) {
    symbol = "./svg/grey.svg";
  } else {
    symbol = "./svg/red.svg";
  }

  return symbol;
};

function renderStockTicker() {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  const dataObject = getStockData();
  const currentPrice = dataObject.price.toFixed(2);

  stockDisplayName.textContent = dataObject.name;
  stockDisplaySymbol.textContent = dataObject.sym;
  stockDisplayPrice.textContent = currentPrice;
  stockDisplayPriceIcon.innerHTML = `<img src = ${checkPriceAction(
    currentPrice,
    previousPrice
  )} alt = Action icon>`;
  stockDisplayTime.textContent = dataObject.time;

  previousPrice = currentPrice;
  setTimeout(renderStockTicker, 1500);
}

let previousPrice = 0;
renderStockTicker();
