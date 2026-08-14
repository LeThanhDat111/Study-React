import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
export default function Dialog({ targetTimer, ref, restTime }) {
	const refInside = useRef();
	const percentTime = (restTime.current / targetTimer) * 100;
	useImperativeHandle(ref, () => {
		return {
			open() {
				refInside.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog className="dialog_game" ref={refInside}>
			<form className="form_game" method="dialog">
				<h2>{percentTime >= 90 && percentTime <= 100 ? 'You win' : 'You lost'}</h2>
				<p className="txt_dialog">
					Thời gian đích: <span>{targetTimer} second</span>
				</p>
				<p className="txt_dialog">
					Bạn đã dừng tại: <span>{restTime.current.toFixed(2)} second</span>
				</p>
				<p className="txt_dialog">
					Điểm của bạn: <span>{Number(percentTime.toFixed(0)) <= 100 ? percentTime.toFixed(0) : 0} điểm</span>
				</p>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal'),
	);
}
