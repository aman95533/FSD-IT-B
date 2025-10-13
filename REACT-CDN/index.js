const image = React.createElement("img", {
  src: "https://tse2.mm.bing.net/th/id/OIP.fnT38-QF8LOdYisEahivQwHaDt?pid=Api&P=0&h=180",
  width: "150px",
  height: "150",
  alt: "book image"
});

const h4 = React.createElement("h4", null, "Price: 325/-");

const child = React.createElement("div", { className: "card" }, image, h4);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(child);