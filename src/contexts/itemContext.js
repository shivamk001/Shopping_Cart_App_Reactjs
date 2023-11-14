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

    const handleAdd = (price, name) => {
        let done=false
        cart.forEach(item=>{    
            if(item.name===name){
                item.qty++;
                item.total+=price
                done=true
            }
        })
        if(!done){
            setCart([...cart, {name: name, qty: 1, total: price}])
        }
        setTotal(total+price);
        setItem(item+1);
        console.log('Added to cart:', cart)
    };
    const handleRemove = (price, name) => {
        if(item>0){
          setTotal(total-price);
          setItem(item-1);
          setCart(cart.filter(item=>item.name!==name))
          console.log('Removed to cart:', cart)
        }
    
    };

    const handleResetCart=()=>{
        // console.log('handleResetCart')
        setItem(0);
        setTotal(0);
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