import Book from "./Book";
function App(){
    const bookjson=[
        {image:"https://c8.alamy.com/comp/C0C112/front-cover-of-an-a-level-physics-textbook-C0C112.jpg",title:"Physics",price:754},
        {image:"https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781137610355.jpg",title:"Chemistry",price:654},
        {image:"https://tse1.mm.bing.net/th/id/OIP.UA_NNM9sbDoObqcKyDj65gHaJo?pid=Api&P=0&h=180",title:"Mathematics",price:854}
    ]
    return(
        <div className="booklist">
            {
                bookjson.map((b,i)=>(
                    <Book key={i} book={b}/>
                ))
            }
        </div>
    )
}
export default App;