export default function TabButton({ children, isSelected, ...props }) {
	return (
		<>
			<li>
				<button className={`btn_hover ${isSelected ? 'btn_Selected' : 'btn'}`} {...props}>
					{children}
				</button>
			</li>
		</>
	);
}
