import { useState } from 'react';
import ListProduct from './ListProduct';
export default function Shop() {
	const [amountItem, setAmountItem] = useState(0);
	function handleAmountItem() {
		setAmountItem((amountItem) => amountItem + 1);
		setAmountItem((amountItem) => amountItem + 1);
		setAmountItem((amountItem) => amountItem + 1);
	}
	console.log(amountItem);
	return (
		<>
			<h1>Giỏ hàng: {amountItem} sản phẩm</h1>
			<ListProduct handleAmountItem={handleAmountItem} amountItem={amountItem} />
		</>
	);
}
