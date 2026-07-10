import "./Product.css";
import Price from "./Price";
// function Product({title,price,features , features2}) {
//     // const list = features.map((feature) =><li>{feature}</li>)
//     console.log(features2.a);
//     return  (
//         <div className = "Product">
//            <h3>{title}</h3>
//             <h5>price : {price}</h5>
//             <p>
//                 {features.map((feature) =>(
//                 <li>{feature}</li>))}
//             </p>

//             {/* <p>{features}</p> */}
//             {/* <p>{list}</p> */}
//         </div>
//     );
// }


//conditionals

// function Product({title,price}) {
//    // let isDiscount = price > 30000 ? "Discount of 5%": "";
//    let styles = {backgroundColor : price > 30000 ? "yellow" : ""};
//     return  (
//     <div className = "Product" style = {styles}>
//         <h3>{title}</h3>
//         <h5>price : {price}</h5>
//         {/* {price > 30000 ? <p>"Discount of 5%"</p> : null} */}
//         {price > 30000 && <p>Discount of 5%</p>}
//     </div>
//     );
// }



//activity making amazon card

function Product({title,idx}) {
    let oldPrices = ["12495","11900","1599","599"];
    let newPrices = ["8,999","9,999","899","278"];
    let description = [
        ["8,000 DPI","5 Programmable buttons"],
        ["intuitive Touch surface","designed for ipad Pro"],
        ["Designed for ipad Pro","Intuitive Touch surface"],
        ["wireless Mouse 2.4GHz","Optical Orientation"]
        ];

    return  (
    <div className = "Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>

        <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
    </div>
    );

}

export default Product;



