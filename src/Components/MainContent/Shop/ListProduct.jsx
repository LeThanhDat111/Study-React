import Item from './Item.jsx';

export default function ListProduct({handleAmountItem, amountItem}) {
	return (
		<>
			<h2>Danh sách giỏ hàng</h2>
			<div>
				<Item handleAmountItem={handleAmountItem} nameItem="A" amountItem={amountItem} />
				<Item handleAmountItem={handleAmountItem} nameItem="B" amountItem={amountItem} />
				<Item handleAmountItem={handleAmountItem} nameItem="C" amountItem={amountItem} />
			</div>
		</>
	);
}
