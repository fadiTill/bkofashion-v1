export const initialState = {
    basket: [],
    // user: null,

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

        default:
            return state;
    }
};

export default Reducer;