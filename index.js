const products = [
  {
    id: 1,
    title: "English Grammar in Use",
    author: "Raymond Murphy",
    price: 7990,
    image: "https://images-na.ssl-images-amazon.com/images/I/81cg-YXfKPL.jpg"
  },
  {
    id: 2,
    title: "Oxford Advanced Learner's Dictionary",
    author: "Oxford University Press",
    price: 8990,
    image: "https://images-na.ssl-images-amazon.com/images/I/91vN3zvcYDL.jpg"
  },
  {
    id: 3,
    title: "English Idioms in Use",
    author: "Michael McCarthy",
    price: 6990,
    image: "https://images-na.ssl-images-amazon.com/images/I/81V1YEl54sL.jpg"
  }
];

function ProductCard({ product }) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement("img", { src: product.image, alt: product.title }),
    React.createElement("h2", null, product.title),
    React.createElement("p", null, product.author),
    React.createElement("p", { className: "price" }, product.price.toLocaleString() + " Ft"),
    React.createElement("button", { className: "buy" }, "Kosárba")
  );
}

function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "header",
      null,
      React.createElement("h1", null, "BookNest"),
      React.createElement("p", null, "Angol nyelvű könyvek webshopja")
    ),
    React.createElement(
      "main",
      null,
      React.createElement(
        "div",
        { className: "grid" },
        products.map(product =>
          React.createElement(ProductCard, { key: product.id, product })
        )
      )
    ),
    React.createElement("footer", null, "© 2025 BookNest.hu – Minden jog fenntartva")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
