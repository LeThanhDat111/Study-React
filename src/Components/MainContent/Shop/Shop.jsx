import { useState } from 'react';
import ListProduct from './ListProduct';
import CartContext from './CartContext';
import { useEffect } from 'react';

export default function Shop() {
	const [amountItem, setAmountItem] = useState(0);
	function handleAmountItem() {
		setAmountItem((amountItem) => amountItem + 1);
	}
	console.log(amountItem);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => console.log(data));
		console.log('Đã render lại');
	}, []);
	return (
		<CartContext.Provider value={{ handleAmountItem, amountItem }}>
			<div>
				<h1>Giỏ hàng: {amountItem} sản phẩm</h1>
				<ListProduct />
			</div>
		</CartContext.Provider>
	);
}
