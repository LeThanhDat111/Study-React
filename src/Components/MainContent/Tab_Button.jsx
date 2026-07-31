export default function TabButton({ children, isSelected, ...props }) {
	return (
		<>
			<li>
				<button className={isSelected ? 'btn_Selected btn_hover' : 'btn btn_hover'} {...props}>
					{children}
				</button>
			</li>
		</>
	);
}

