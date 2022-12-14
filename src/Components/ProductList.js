import React from "react";
import ProductCard from "./ProductCard";

const productData = [
    {
        id: 1,
        productName: "Asus Vivobook X515MA",
        quantity: 20,
        price: 35500,
    },
    {
        id: 2,
        productName: "Dell E1916HV 18.5 Inch",
        quantity: 35,
        price: 9300,
    },
    {
        id: 3,
        productName: "Canon Eos 4000D 18MP",
        quantity: 72,
        price: 36500,
    },
]

const ProductList = () => {
    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {
                productData.map((product, index) => <ProductCard product={product} key={index} />)
            }
        </div>
    );
};

export default ProductList;
