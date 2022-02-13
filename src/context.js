import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
}


export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.removeFromBasket = (itemId) => {
        dispatch({type:'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    // value.handleBasketShow = () => {
    //     dispatch({type:'HANDLE_BASKET_SHOW', payload: {id: itemId}})
    // }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}