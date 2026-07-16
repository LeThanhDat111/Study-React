export default function TabButton({ children, onSelect, isSelected }) {
	return (
		<>
			<li>
				<button className={isSelected ? "btn_Selected btn_hover" : "btn btn_hover"} onClick={onSelect}>
					{children}
				</button>
			</li>
		</>
	);
}

