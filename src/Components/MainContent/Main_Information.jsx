import { useState } from 'react';
import { myData, EXAMPLE } from '../../data.js';
import './Main_Information.css';
import TabButton from './Tab_Button.jsx';
import performace from '../../assets/img/energy.png';
import Tabs from './Tabs.jsx';

function Main_Information(props) {
	return (
		<>
			<li className="item_Concept">
				<figure>
					<img src={props.img} alt={props.title} className="img_main img_hover" />
				</figure>
				<p className="txt_desc">{props.desc}</p>
			</li>
		</>
	);
}

function Main({ onSelect, prinHello, hello, slTopic }) {
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
		<>
			<main>
				{/*prettier-ignore*/}
				<Tabs
					title="Khái niệm chính trong React"
					ul={
						<ul className="list_Concept">
							{myData.map((item) => <Main_Information {...item} key={item.title} />)}
						</ul>
					}
					className="sec_custome"
					Container="h2"
					></Tabs>
				<Tabs title="Examples" className="sec_tabs" Container="h2">
					<ul className="list_Dynamic">
						{Object.entries(EXAMPLE).map(([key]) => (
							<TabButton onClick={() => onSelect(key)} isSelected={slTopic === key} key={key}>
								{key}
							</TabButton>
						))}
					</ul>
				</Tabs>
				{!slTopic ? (
					<p className="txt_info-btn">Vui lòng chọn tab cần tìm hiểu về React!</p>
				) : (
					<div className="bx_info-btn">
						<h3>{EXAMPLE[slTopic].title}</h3>
						<p>{EXAMPLE[slTopic].desc}</p>
						<pre>
							<code>{EXAMPLE[slTopic].code}</code>
						</pre>
					</div>
				)}
				<div className="state">
					<h3 className="txt_Hello">{hello}</h3>
					<button className="btn_State" onClick={prinHello}>
						Cập nhật lời chào
					</button>
				</div>
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
			</main>
		</>
	);
}

export default Main;
