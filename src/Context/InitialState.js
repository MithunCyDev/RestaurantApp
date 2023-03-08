import { fetchCart, fetchUser } from "../FetchLocalStorage/FetchLocalStorage";

const userInfo= fetchUser()
const cartInfo = fetchCart()

export const InitialState = {
    user: userInfo,
    foodItems: null,
    foodCart: false,
    cartItems: cartInfo,
};