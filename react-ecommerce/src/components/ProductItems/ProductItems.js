import React from 'react';


const ProductItems = ({item}) => (
                <div className="gallery__item">
                        <div className={item.price, item.type}>
                            <img className="gallery__img" src={item.img} alt={item.alt}/>
                            <h3>{item.productName}</h3>
                            <p className="gallery__price">{item.productCost}</p>
                            <p>{item.productDescription}</p>
                            <button className="btn1">Add To Cart</button>
                        </div>
                 </div>

        );
export default ProductItems;