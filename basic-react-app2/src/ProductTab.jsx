import Product from "./Product.jsx";
// function ProductTab() {
//        // let options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];

//     let options = ["hi-tech","durable","fast"];
//     let options2 = {a : "hi-tech", b : "durable", c : "fast"};
//     return (
//         <>
//         <Product title = "phone" price ={15000} features = {options} features2 = {options2} />
//         {/* <Product title = "laptop"  price ={50000}/>
//         <Product title = "pen" price = {10}/> */}

//         </>                     
//     );
// }

//conditionals

// function ProductTab() {
//     let options = ["hi-tech","durable","fast"];
//     return (
//         <>
//         <Product title = "phone" price ={15000}  />
//         <Product title = "laptop"  price ={50000}/>
//         <Product title = "pen" price = {10}/>

//         </>                     
//     );
// }

//Activity making amazon card

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style = {styles}>

        <Product title = "Logitech MX Master" idx ={0}/>
        <Product title = "Apple Pencil (2nd Gen)" idx = {1}/>
        <Product title = "Zebronics Zeb-transformer" idx = {2}/>
        <Product title = "Petronics Toad 23" idx = {3}/>

        </div>                     
    );
}

export default ProductTab;