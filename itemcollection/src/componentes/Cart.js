import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, totalPrecio} = useCartContext();

    if ( cart.length === 0) {
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to='/'>Comprar</Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <CartItem key={product.id} product = {product} />)
        }
        </>
    );
}

export default Cart;