import React from 'react';
import Navbar from '../Navbar/Nav';
import Filter from '../Filter/Filter';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 class Products extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar />
                <Filter />
            </div>
            </Router>
        )
    }
}
export default Products;