import React from 'react';
import ProductItems from '../ProductItems/ProductItems';
import data from '../ProductsPage/data.json';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: "default",
            type: "default"
        };
    }
    handleDropDown = (event) => {
        this.setState({
            price: event.target.value,
            type: event.target.value
        })
    }
    render() {
        console.log(data);
        const {price, type} = this.state;
        return(
            <div>
            <h2 className="product-head">Take a look at some of our products! </h2>
                <section className="myBtnContainer">
                    <select className="productType" value={type} onChange={this.handleDropDown}>
                        <option value="default">Show All</option>
                        <option value="shoes">Shoes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <select className="productPrice" value={price} onChange={this.handleDropDown}>
                        <option value="default">Show All</option>
                        <option value="price0to100">$0 - $100</option>
                        <option value="price100to200">$100 - $200</option>
                        <option value="price200to300">$200 - $300</option>
                </select>
            </section>

                    <div className="productItemContainer">

                            {data.map((item) => {
                                if (price === "default" && type === "default" ) {
                                  return <ProductItems item={item}  />
                                } else if (price === item.price || type === item.type ) {
                                  return <ProductItems item={item}  />
                                }
                        })}


                    </div>
            </div>
        )
    }
}


export default Filter;