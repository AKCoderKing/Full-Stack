import "./Product.css";
import Price from "./Price";

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



