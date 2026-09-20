import Mount_Unmount from './Mount_Unmoutn';
import { useState } from 'react';
import UseEffectEvent from './UseEffectEvent';
export default function Parents() {
	const [hidden, setHidden] = useState(false);
	const [showEvent, setShowEvent] = useState(false);
	return (
		<div>
			<button onClick={() => setHidden(!hidden)}>{!hidden ? 'Ẩn component' : 'Hiện component'}</button>
			{!hidden && <Mount_Unmount />}

			<button onClick={() => setShowEvent(!showEvent)}>{showEvent ? 'Ẩn component' : 'Hiện comnponent'}</button>
			{showEvent && <UseEffectEvent />}
		</div>
	);
}
