import React from 'react'

const reducer = (state, {type, payload}) => {

    switch (type){
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id)
            }
        default:
            return state;
    }


}

export default reducer