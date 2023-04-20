const arrayContainer = document.querySelector("#array-list");

let shopProduct = [
  {
    productName: "Pomidor",
    productPrice: 7.99,
  },
  {
    productName: "Chleb pszenny",
    productPrice: 3.99,
  },
  {
    productName: "Pasztet",
    productPrice: 2.29,
  },
  {
    productName: "Schab b/k",
    productPrice: 17.99,
  },
  {
    productName: "Płatki owsiane",
    productPrice: 2.59,
  },
  {
    productName: "Ogórek",
    productPrice: 8.99,
  },
];

let shipmentProduct = [
  {
    productName: "Jarmuż",
    productPrice: 3.79,
  },
  {
    productName: "Czekolada",
    productPrice: 6.59,
  },
  {
    productName: "Mąka",
    productPrice: 2.59,
  },
  {
    productName: "Cukier Wanilinowy",
    productPrice: 0.99,
  },
];

// ! Iteracja tablicy ( .forEach() )

const showProducts = () => {
  console.log("Lista Produktów:");
  console.log("=================");
  shopProduct.forEach((product) => {
    console.log(`${product.productName} - ${product.productPrice} PLN`);
    //consoleLogProductsAllData(shopProduct);
  });
  console.log("=================");
};

// ! Dodawanie Produktu ( .push() )

const addNewProduct = () => {
  const newProductName = prompt("Podaj nazwe produktu");
  const newProductPrice = prompt(`Podaj cene produktu ${newProductName}: `);
  shopProduct.push({
    productName: newProductName,
    productPrice: Number(newProductPrice).toFixed(2),
  });
  showProducts();
};

// ! Usuwanie ostatniego elementu (.pop())

const removeLastProduct = () => {
  let lastProduct = shopProduct.pop();
  showProducts();
  return lastProduct;
};

// ! Usuwanie pierwszego elementu (.shift())

const removeFirstProduct = () => {
  let firstProduct = shopProduct.shift();
  showProducts();
  return firstProduct;
};

//! Łącznie tablic (.concat())

const addShipmentProduct = () => {
  console.log("Przyjechała dostawa produktów:");
  shopProduct = shopProduct.concat(shipmentProduct);
  showProducts();
};

//! Łącznie tablic (...spread))

const addDifShipmentProduct = () => {
  console.log("Przyjechała dostawa produktów:");
  let newItemsProducts = [...shopProduct, ...shipmentProduct];
  consoleLogProducts(newItemsProducts);
};

// ! Dodawanie promocji ( .map())

const addPromotionOnAll = () => {
  const promotionProducts = shopProduct.map((product) => ({
    productName: product.productName,
    productPrice: Number(product.productPrice * 0.5).toFixed(2),
  }));
  consoleLogProductsAllData(promotionProducts);
};

//! Znajdź produkt ( .filter())

const findProduct = () => {
  let lookinForItem = prompt("Czego szukasz?");

  const findedProduct = shopProduct.filter((item) => {
    return item.productName === lookinForItem;
  });
  if (findedProduct.length === 0) {
    console.log("Nie ma takiego produktu");
  } else {
    for (let i = 0; i < findedProduct.length; i++) {
      console.log(
        `Znalazłem ${findedProduct[i].productName} o cenie ${findedProduct[i].productPrice} PLN`
      );
    }
  }
};

//! Podlicz wartość produktów ( .reduce() )

const sumPriceOfAllProduct = () => {
  const sumPrices = shopProduct.reduce((acc, price) => {
    return acc + price.productPrice;
  }, 0);
  console.log(`Cena wszystkich produktów wynosi ${sumPrices.toFixed(2)}`);
};

//TODO: Stworznie funkcji koszyka, do której będziemy mogli dodawać produkty z tablicy shopProduct oraz funkcje rozliczającej koszyk

// TODO: Funkcje Pomocnicze

function consoleLogProducts(chooseTable) {
  console.log("Lista Produktów:");
  console.log("=================");
  chooseTable.forEach((product) => {
    console.log(product.productName);
    // createArrLiElement(product.productName, arrayContainer);
  });
  console.log("=================");
}

function consoleLogProductsAllData(chooseTable) {
  console.log("Lista Produktów:");
  console.log("=================");
  chooseTable.forEach((product) => {
    console.log(`${product.productName} - ${product.productPrice} PLN`);
    // createArrLiElement(product.productName, arrayContainer);
  });
  console.log("=================");
}

// ! Dopisane metody

let names = ["Tomek", "Romek", "Atomek"];
let numbers = [1, 2, 3, 4];

names.sort();
console.log(names);

names = [...names, "Zbigniew"];
console.log(names);

const newNames = numbers.map((number, index) => {
  if (index % 2 !== 0) {
    return number + 1;
  } else {
    return number;
  }
});

function createArrLiElement(data, where) {
  let listEle = document.createElement("li");
  listEle.innerText = data;
  where.appendChild(listEle);
}
