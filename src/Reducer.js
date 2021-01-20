export const initialState = {
    basket: [],
     user: null,

};
export const BasketItems = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const Reducer = (state, action) => {
    // console.log(action);
    switch(action.type) {
        case"ADD_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        };


        case"EMPTY_BASKET":
        return {
            ...state,
            basket: []
        }

        case "DELETE_BASKET":
            const index = state.basket.findIndex(
              (BasketItem)=> BasketItem.id === action.id
            );
            let newBasket =[...state.basket];

            if (index >= 0) {
            newBasket.splice(index, 1);

            } else{
                console.warn(
                 `can 't remove item (id: ${action.id})`   
                )
            }

                return {
                    ...state,
                    basket: newBasket
                }

                case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }

                
            
        default:
            return state;
    }
};

export default Reducer;