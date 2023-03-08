export const actionType = {
    SET_USER: "SET_USER",
    SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
    SET_FOOD_CART: "SET_FOOD_CART",
    SET_CART_ITEMS: "SET_CART_ITEMS",
}

const Reducer = (state, action) =>{

    switch (action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems,
            };
            
            case actionType.SET_FOOD_CART:
            return {
                ...state,
                foodCart: action.foodCart,
            };
            
            case actionType.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };
            
            default:
                return state;
    }
}

export default Reducer;