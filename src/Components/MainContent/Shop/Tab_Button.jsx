import { useContext } from 'react';
import CartContext from './CartContext.jsx';
export default function Tab_Button() {
	const { handleAmountItem, amountItem } = useContext(CartContext);
	return (
		<>
			<button onClick={handleAmountItem}>Thêm vào giỏ hàng</button>
			<p>Số item trong giỏ hàng hiện tại: {amountItem}</p>
		</>
	);
}
