import React,{useReducer} from 'react';

const initialState = {
    selectedItem : [],
    itemsCounter: 0 ,
    total: 0,
    checkout:false ,
}

const cartReducer = (state , action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload , 
                    quantity:1 ,
                })
            }
            return {
                ...state ,
                selectedItem: [...state.selectedItem]
            }
            case "REMOVE_ITEM": 
            const newSelectedItems =state.selectedItem.filter(item => item.id !== action.payload.id)
            return {
            ...state,
            selectedItem:[...newSelectedItems]
            }
            
        }
}

const CartContextProvider = () => {

    const [state , dispatch] = useReducer(cartReducer, initialState);
    return (
        <div>
            
        </div>
    );
};

export default CartContextProvider;