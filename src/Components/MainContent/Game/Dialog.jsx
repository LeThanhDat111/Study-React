import { useImperativeHandle, useRef } from 'react';
export default function Dialog({ targetTimer, ref }) {
	const refInside = useRef();
	useImperativeHandle(ref, () => {
		return {
			open() {
				refInside.current.showModal();
			},
		};
	});
	return (
		<dialog className="dialog_game" ref={refInside}>
			<form className="form_game" method="dialog">
				<h2>You lost</h2>
				<p className="txt_dialog">
					Thời gian đích: <span>{targetTimer} second</span>
				</p>
				<p className="txt_dialog">
					Bạn đã dừng tại: <span>X second</span>
				</p>
				<button>Close</button>
			</form>
		</dialog>
	);
}
