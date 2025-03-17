const store = [
  {
    category: "Electronics",
    products: [
      {
        id: 101,
        name: "Smartphone",
        brand: "TechCorp",
        price: 699,
        stock: 50,
        reviews: [
          { user: "Alice", rating: 5, comment: "Amazing phone!" },
          { user: "Bob", rating: 4, comment: "Great value for the price." }
        ]
      },
      {
        id: 102,
        name: "Laptop",
        brand: "MegaComp",
        price: 1200,
        stock: 20,
        reviews: [
          { user: "Charlie", rating: 5, comment: "Super fast!" },
          { user: "David", rating: 3, comment: "Battery life could be better." }
        ]
      }
    ]
  },
  {
    category: "Home Appliances",
    products: [
      {
        id: 201,
        name: "Vacuum Cleaner",
        brand: "CleanTech",
        price: 250,
        stock: 80,
        reviews: [
          { user: "Eve", rating: 4, comment: "Works well on carpets!" },
          { user: "Frank", rating: 5, comment: "Quiet and powerful." }
        ]
      },
      {
        id: 202,
        name: "Air Fryer",
        brand: "KitchenPro",
        price: 150,
        stock: 30,
        reviews: [
          { user: "Grace", rating: 4, comment: "Makes crispy fries!" },
          { user: "Hank", rating: 2, comment: "Too small for a family." }
        ]
      }
    ]
  }
];

// find all products in stock less than 30
// const newStocks = store
// .map(category => {
//   category.products.filter(products => products.stock < 30);
// {)
//   .flat();
//   console.log(newStocks);

// print each products name and price
store.forEach(category => {
  category.products.forEach(product => {
    console.log(`${product.name}`);
    console.log(`${product.price}`);
  });
});

// new array of product prices
const productPrices = store.map(x => {
  return x.products.map(y => y.price);
});
console.log(productPrices);

//print all review users
store.forEach(category => {
  category.products.forEach(products => {
    products.reviews.forEach(review => {
      console.log(`${review.user}`);
    });
  });
});

// find all products with more than one reviewer
const reviewOne = store.map(category =>
  category.products.filter(product => product.reviews.length > 1)
);
console.log(reviewOne);

// find all products between 200 and 1000 dollars
const expensive = store.map(category => {
  return category.products.filter(
    product => product.price >= 200 && product.price <= 1000
  );
});
console.log(expensive);

//
let totalStock = 0;
store.forEach(category =>
  category.products.forEach(() => {
    totalStock++;
  })
);
console.log(totalStock);
