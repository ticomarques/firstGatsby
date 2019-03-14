import React from 'react';
import { Link } from "gatsby"

const Menu = () => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-2">Page 2</Link></li>
        <li><Link to="/testing">Testing</Link></li>
        <li><Link to="/products">Products</Link></li>
    </ul>
);

export default Menu;
