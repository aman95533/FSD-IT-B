function Book(book) {
    return(
        <div>
            <img src={book.image} width="200" height="200" alt="book image"/>
            <h3>{book.title}</h3>
            <h4>{book.price}</h4>
        </div>
    );
}
const b={image:"https://m.media-amazon.com/images/I/911-2v5Yq8L._SL1500_.jpg",title:"Chemistry",price:"300/-"};
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>);