function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: 150,
    height: 150,
    alt: "Book Image"
    
  });

  const h4 = React.createElement("h4", null, `Price: ${props.price}/-`);

  const child = React.createElement("div", { className: "card" }, image,h4);
  return child;
}

const books = [
  {
    image: "https://tse2.mm.bing.net/th/id/OIP.fnT38-QF8LOdYisEahivQwHaDt?pid=Api&P=0&h=180",
    price: 235
  },
  {
    image: "https://m.media-amazon.com/images/I/41YgerV98XL._SL500_.jpg", // placeholder for missing image
    price: 245
  },
  {
    image: "https://store.pothi.com/media/images/products/2024/03/SKU23126/Image_0.jpg", // placeholder for missing image
    price: 335
  }
];

const bookList = books.map(p =>
  React.createElement(Book, { image: p.image, price: p.price })
);

const bookContainer = React.createElement("div", { className: "book-list" }, ...bookList);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookContainer);