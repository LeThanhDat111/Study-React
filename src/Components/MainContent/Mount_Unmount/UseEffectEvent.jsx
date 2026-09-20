import { useEffect } from 'react';

export default function UseEffectEvent() {
	useEffect(() => {
		const handleSize = () => {
			console.log('Đang nhấn chuột');
		};

		window.addEventListener('mousedown', handleSize);
		console.log('Đã add sự kiện mousedown');

		return () => {
			window.removeEventListener('mousedown', handleSize);
			console.log('Đã xóa sự kiện mousdown');
		};
	}, []);
	return (
		<div>
			<h2>Thay đổi kích thước xuống 800</h2>
		</div>
	);
}
