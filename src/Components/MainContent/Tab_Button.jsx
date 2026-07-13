export default function TabButton({ children, onSelect }) {
	return (
		<>
			<li>
				<button className="btn btn_hover" onClick={onSelect}>
					{children}
				</button>
			</li>
		</>
	);
}

