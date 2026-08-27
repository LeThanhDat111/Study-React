import { useReducer } from 'react';

function reducerLogin(state, action) {
	switch (action) {
		case 'LOGIN':
			return true;
		case 'LOGOUT':
			return false;
		default:
			throw new Error('Action không hợp lệ');
	}
}

export default function LoginUseReducer() {
	const [state, dispath] = useReducer(reducerLogin, false);

	return (
		<div>
			<h2>{state? "Xin chào! Rất vui vì sự quan tâm của bạn." : "Hãy đăng nhập"}</h2>
			<button onClick={()=> dispath('LOGIN')}>Đăng nhập</button>
			<button onClick={()=> dispath('LOGOUT')}>Đăng xuất</button>
		</div>
	);
}
