import Tab_Button from './Tab_Button.jsx';
export default function item({handleAmountItem, nameItem, amountItem}) {
	return (
		<>
			<p>Sản phầm {nameItem}</p>
			<Tab_Button handleAmountItem={handleAmountItem} amountItem={amountItem} />
		</>
	);
}
