export default function Tab_Button({ handleAmountItem, amountItem }) {
	return (
		<>
			<button onClick={handleAmountItem}>Thêm vào giỏ hàng</button>
			<p>Số item trong giỏ hàng hiện tại: {amountItem}</p>
		</>
	);
}
