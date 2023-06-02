import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt='checkout-item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<span className='arrow' onClick={addItemHandler}>
					&#10095;
				</span>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;