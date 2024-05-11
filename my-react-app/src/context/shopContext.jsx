import React, { useState, useEffect, createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 100000 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartitems, setCartItems] = useState(getDefaultCart());
    const [all_product, setAllProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/allproduct")
            .then((response) => response.json())
            .then((data) => {
                setAllProducts(data);
            });
            
    }, [all_product]);

    const clearCart = () => {
        setCartItems(getDefaultCart());
    };


    const addtocart = (productId) => {
        // إضافة المنتج إلى العربة بقيمة 1
        setCartItems((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
    
        if (localStorage.getItem('auth-token')) {
            fetch("http://localhost:4000/addtocart", {
                method: 'POST',
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Connect-type": "application/json",
                },
                body: JSON.stringify({ itemid: productId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
            
        }
    };
    

    const removefromcart = (productId) => {
        // حذف المنتج من العربة
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            if (updatedCartItems[productId] > 0) {
                updatedCartItems[productId] -= 1;
            }
            return updatedCartItems;
        });
    
        // إذا كنت تستخدم التوكن للتوثيق، قم بإرسال طلب لإزالة المنتج من السلة في قاعدة البيانات
        if (localStorage.getItem('auth-token')) {
            fetch("http://localhost:4000/removefromcart", {
                method: 'POST',
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Connect-type": "application/json",
                },
                body: JSON.stringify({ itemid: productId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    };
    
    const gettotalCartItems = () => {
        let totalitems = 0;
        for (const item in cartitems) {
            if (cartitems[item]> 0) {
                totalitems += cartitems[item];
            }
        }
        return totalitems;
    };

    const totalcart = () => {
        let total = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                if (iteminfo) {
                    total += iteminfo.price * cartitems[item];
                }
            }
        }
        return total;
    };

    const contextValue = {
        all_product,
        cartitems,
        totalcart,
        addtocart,
        removefromcart,
        gettotalCartItems,
        clearCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
 }

export default ShopContextProvider;
