import { AnyAction } from 'redux';
import { setCartItems, setIsCartOpen } from './cart.action';

import { CART_ACTION_TYPES } from './cart.types';

import { CartItem } from './cart.types';

export type CartState = {
	readonly isCartOpen: boolean;
	readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: AnyAction
): CartState => {
	if (setIsCartOpen.match(action)) {
		return {
			...state,
			isCartOpen: action.payload,
		};
	}

	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload,
		};
	}

	return state;

	// switch (type) {
	// 	case CART_ACTION_TYPES.SET_IS_CART_OPEN:
	// 		return {
	// 			...state,
	// 			isCartOpen: payload,
	// 		};
	// 	case CART_ACTION_TYPES.SET_CART_ITEMS:
	// 		return {
	// 			...state,
	// 			cartItems: payload,
	// 		};
	// 	default: {
	// 		return state;
	// 	}
	// }
};
