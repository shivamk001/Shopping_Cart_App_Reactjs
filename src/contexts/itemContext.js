import { useState, createContext, useContext } from "react";
import CartModal from "../components/CartModal";

const itemContext=createContext()

function useValue(){
    const value=useContext(itemContext);
    return value
}

const CustomItemContext=({children})=>{
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [cart, setCart]=useState([]);
    const [showCart, setShowCart]=useState(false);

    const handleAdd = (id, name, price) => {
        let index=cart.findIndex(item=>item.id===id)

        if(index===-1){
            setCart([...cart, {id, name, price, qty:1}])
        }
        else{
            cart[index].qty++;
            setCart(cart);
            
        }
        setTotal(total+price)
        setItem(item+1)
    };
    const handleRemove = (id) => {
        let index=cart.findIndex(item=>item.id===id);
        console.log(id, index)
        if(index!=-1){
            setTotal(total-cart[index].price)
            console.log(cart[index])
            cart[index].qty--;
            if(cart[index].qty===0){
                cart.splice(index, 1);
            }
            
            setItem(item-1);
        }
    };

    const handleResetCart=()=>{
        // console.log('handleResetCart')
        setItem(0);
        setTotal(0);
        setCart([])
    }

    const toggleShowCart=()=>{
        setShowCart(!showCart)
    }


    return (
        <itemContext.Provider value={{total, item, cart, handleAdd, handleRemove, handleResetCart, toggleShowCart}}>
            {showCart && <CartModal/>}
            {children}
        </itemContext.Provider>
    )
}
export {itemContext, useValue};
export default CustomItemContext