import Item from './Item.jsx';

export default function ListProduct() {
	return (
		<>
			<h2>Danh sách giỏ hàng</h2>
			<div>
				<Item nameItem="A" />
				<Item nameItem="B" />
				<Item nameItem="C" />
			</div>
		</>
	);
}
