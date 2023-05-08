import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


const CartProvider = ({children})=>{
    const[cart,setcart] = useState([]);
    // Item Amount state
    const[itemAmount,setitemAmount] = useState(0);
    // Total Price
    const[total,setTotal] = useState(0);



    // Update cart Amount
    useEffect(()=>{
        if(cart){
            const Amount = cart.reduce((accumulator, currentItem)=>{
                console.log("Hello",accumulator);
                return accumulator + currentItem.amount;
            },0);
            setitemAmount(Amount)
        }
    },[cart]);

    // Update total price
    useEffect(()=>{
        const total = cart.reduce((accumulator, currentItem)=>{
            return accumulator + currentItem.price * currentItem.amount;
        },0);
        setTotal(total);
    },[setTotal,cart])

    useEffect(()=>{

    },)

    const addToCart = (product,id)=>{
        const newItem = {...product, amount: 1};
        // check if the item already in the cart
        const cartItem = cart.find((item) =>{
            return item.id === parseInt(id);
        })

        //  if cart item is already in the cart
        if(cartItem){
            const newCart = [...cart].map((item) => {
                if (item.id === parseInt(id)){
                    return {...item, amount: cartItem.amount + 1};
                }else{
                    return item;
                }
            });
            setcart(newCart);
        }else{
            setcart([...cart, newItem]);
        }

       
        
    }

    const removeFromCart = (id)=>{
        const newCart = cart.filter(item => {
            return item.id !== id;
        })
        setcart(newCart);
    }

    const clearCart = ()=>{
        setcart([]);
    }
    console.log(cart)

    // Increase amount
    const increase = (id)=>{
        const cartItem = cart.find(item => item.id === parseInt(id));
        addToCart(cartItem,id);
    }
    // Decrease amount
    const decrease = (id)=>{
        const cartItem = cart.find(item => {
            return item.id === parseInt(id);
        })

        if(cartItem){
            const newCart = cart.map((item) => {
                if (item.id === parseInt(id)){
                    return {...item, amount: cartItem.amount - 1};
                }else{
                    return item;
                }
            });
            setcart(newCart);
        }
        if(cartItem.amount < 2){
                removeFromCart(id);
            }
    }

    return <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increase,decrease,itemAmount,total}}>{children}</CartContext.Provider>
}

export default CartProvider;