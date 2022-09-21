import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';

const Card = () => {
    const product = useSelector(((state) => state.addProductList));

    const selectedProduct = product.filter(item => item.selected);

    const totalPrice = selectedProduct.reduce((sum, currentItem) => sum+(currentItem.price*currentItem.quantity),0)

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                
                {
                    selectedProduct.map((item, index) => <CardItem item={item} key={index} />)
                }

                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">{selectedProduct.length}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">{totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;