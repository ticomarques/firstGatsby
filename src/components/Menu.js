import React from 'react'
import { Link } from "gatsby"
import styled  from 'styled-components'

const WrapperMenu = styled.div`

    

    ul {
        list-style:none;

        max-width:200px;
        background:rebeccapurple;
        margin:40px auto;
        padding:10px 0px 20px 0px;
        border:1px solid purple;
        border-radius:4px;
        box-shadow:0px 4px 5px orange;
    }

     .link{
        font-size:16px;
        font-weight:300;
        text-align:center;
        position:relative;
        height:40px;
        line-height:40px;
        margin-top:10px;
        overflow:hidden;
        width:90%;
        margin-left:5%;
        cursor:pointer;
     }
     .link:after{
        content: '';
        position:absolute;
        width:80%;
        border-bottom:1px solid rgba(255, 255, 255, 0.5);
        bottom:50%;
        left:-100%;
        transition-delay: all 0.5s;
        transition: all 0.5s;
     }
     .link:hover:after,
     .link.hover:after{
        left:100%;
     }
     .link .text{
        color:white;
        text-shadow:0px -40px 0px rgba(184, 107, 37, 1);
        transition:all 0.75s;
        transform:translateY(100%) translateZ(0);
        transition-delay:all 0.25s;
     }
     .link:hover .text,
     .link.hover .text{
        text-shadow:0px -40px 0px rgba(184, 107, 37, 0);
        transform:translateY(0%) translateZ(0) scale(1.1);
        font-weight:600;
     }
`


const Menu = () => (
    <WrapperMenu>
        <ul>
            <li className="link">
                <Link to="/" className="text">Home</Link>
            </li>
            <li className="link">
                <Link to="/page-2" className="text">Page 2</Link>
            </li>
            <li className="link">
                <Link to="/testing" className="text">Testing</Link>
            </li>
            <li className="link">
                <Link to="/products" className="text">Products</Link>
            </li>
        </ul>
    </WrapperMenu>
);

export default Menu;