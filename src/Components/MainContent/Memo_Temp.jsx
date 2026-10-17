import { memo, useState, useCallback } from 'react';

const Child = memo(function Child({ value, onButtonClick }) {
	console.log('Đã gọi Child');
	return (
		<div>
			<h1>Child: {value}</h1>
			<button onClick={onButtonClick}>Tăng</button>
		</div>
	);
});

export default function Memo() {
	const [value, setValue] = useState(0);

	const handleValue = useCallback(() => {
		setValue(value => value + 1);
	}, []);

	return (
		<div>
			<h1>Count: {value}</h1>
			<Child value={1} onButtonClick={handleValue} />
		</div>
	);
}
