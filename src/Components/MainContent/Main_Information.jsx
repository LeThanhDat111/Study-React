import { useState } from 'react';
import { myData, EXAMPLE } from '../../data.js';
import './Main_Information.css';
import TabButton from './Tab_Button.jsx';
import performace from '../../assets/img/energy.png';

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
				<section>
					<h2>Khái niệm chính trong React</h2>
					<ul className="list_Concept">
						<Main_Information img={myData[0].img} title={myData[0].title} desc={myData[0].desc} />
						<Main_Information {...myData[1]} />
						<Main_Information {...myData[2]} />
						<Main_Information {...myData[3]} />
					</ul>
				</section>
				<h2 className="txt_ex">Examples</h2>
				<ul className="list_Dynamic">
					<TabButton onSelect={() => onSelect('components')} isSelected={slTopic === 'components'}>
						Components
					</TabButton>
					<TabButton onSelect={() => onSelect('jsx')} isSelected={slTopic === 'jsx'}>
						JSX
					</TabButton>
					<TabButton onSelect={() => onSelect('props')} isSelected={slTopic === 'props'}>
						Props
					</TabButton>
					<TabButton onSelect={() => onSelect('state')} isSelected={slTopic === 'state'}>
						State
					</TabButton>
				</ul>
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
					{isActivated && <p className='mode_activating'>Mode activating <img src={performace} alt="" className='img_performance'/></p>}
				</div>
			</main>
		</>
	);
}

export default Main;
