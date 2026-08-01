import performace from '../../assets/img/energy.png';
import { useState } from 'react';
export default function Dialog() {
	const [isActivated, setIsActivated] = useState(false);
	const [isAlertVisible, setIsAlertVisible] = useState(false);

	function handleAlertVisible() {
		setIsAlertVisible(true);
	}

	function handleConfirm() {
		setIsAlertVisible(false);
		setIsActivated(true);
	}

	function handleCancel() {
		setIsAlertVisible(false);
		setIsActivated(false);
	}
	return (
		<div className="active-dialog">
			{!isActivated && !isAlertVisible && (
				<button className="btn_active" onClick={handleAlertVisible}>
					Active
				</button>
			)}
			{isAlertVisible && (
				<div className="diaglog">
					<h3>Warming!</h3>
					<p>Are you sure you want to active this mode?</p>
					<div className="bx_btn-chose">
						<button className="btn_Confirm" onClick={handleConfirm}>
							Confirm
						</button>
						<button className="btn_Cancel" onClick={handleCancel}>
							Cancel
						</button>
					</div>
				</div>
			)}
			{isActivated && (
				<p className="mode_activating">
					Mode activating <img src={performace} alt="" className="img_performance" />
				</p>
			)}
		</div>
	);
}
