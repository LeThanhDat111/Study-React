import { useState } from 'react';
import ListProduct from './ListProduct';
import CartContext from './CartContext';
export default function Shop() {
	const [amountItem, setAmountItem] = useState(0);
	function handleAmountItem() {
		setAmountItem((amountItem) => amountItem + 1);
	}
	console.log(amountItem);
	return (
		<CartContext.Provider value={{ handleAmountItem, amountItem }}>
			<div>
				<h1>Giỏ hàng: {amountItem} sản phẩm</h1>
				<ListProduct />
			</div>
		</CartContext.Provider>
	);
}
