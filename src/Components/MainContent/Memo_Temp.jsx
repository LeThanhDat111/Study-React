import { memo, useState } from 'react';

const Child = memo(function Child({ value }) {
	console.log('Đã gọi Child');
	return <div>Child: {value}</div>;
});

export default function Memo() {
	const [value, setValue] = useState(0);
	return (
		<div>
			<h1>Count: {value}</h1>
			<button onClick={() => setValue(value + 1)}>Count</button>
			<Child value={1} />
			<Child value={value} />
		</div>
	);
}
