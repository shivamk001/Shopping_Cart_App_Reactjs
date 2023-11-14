import { useState, createContext, useContext } from "react";

const itemContext=createContext()

function useValue(){
    const value=useContext(itemContext);
    return value
}

const CustomItemContext=({children})=>{
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    const handleAdd = (price) => {
        setTotal(total+price);
        setItem(item+1);
    };
    const handleRemove = (price) => {
        if(item>0){
          setTotal(total-price);
          setItem(item-1);
        }
    
    };

    const handleResetCart=()=>{
        // console.log('handleResetCart')
        setItem(0);
        setTotal(0);
    }
    return (
        <itemContext.Provider value={{total, item, handleAdd, handleRemove, handleResetCart}}>
            {children}
        </itemContext.Provider>
    )
}
export {itemContext, useValue};
export default CustomItemContext