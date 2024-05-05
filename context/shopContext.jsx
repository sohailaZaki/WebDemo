import React, { useState, useEffect } from "react";
import { createContext } from "react";
import all_product from "../component/assest/allProduct";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartitems, setCartItems] = useState(getDefaultCart());
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) {
            setCartItems(storedCart);
        }
    }, []);
    const clearCart = () => {
        setCartItems(getDefaultCart());
        localStorage.removeItem("cart");
    };
    const updateCartItems = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const addtocart = (productId) => {
        updateCartItems({
            ...cartitems,
            [productId]: cartitems[productId] + 1,
        });
    };

    const removefromcart = (productId) => {
        updateCartItems({
            ...cartitems,
            [productId]: Math.max(0, cartitems[productId] - 1),
        });
    };

    // Calculate total number of items in the cart
    const gettotalCartItems = () => {
        let totalitems = 0;
        for (const item of Object.values(cartitems)) {
            if (item > 0) {
                totalitems += item;
            }
        }
        return totalitems;
    };

    const totalcart = () => {
        let total = 0;
        for (const item of Object.entries(cartitems)) {
            const [productId, quantity] = item;
            if (quantity > 0) {
                const product = all_product.find((p) => p.id === parseInt(productId));
                if (product) {
                    total += product.price * quantity;
                }
            }
        }
        return total;
    };

    // Filter products based on search query
    useEffect(() => {
        if (searchQuery.trim() !== "") {
            const results = all_product.filter(
                (product) =>
                    product.discription.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const contextValue = {
        allproducts: all_product,
        cartitems,
        totalcart,
        addtocart,
        removefromcart,
        gettotalCartItems,
        setSearchQuery,
        searchResults,
        clearCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;