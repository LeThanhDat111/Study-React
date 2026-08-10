import { useState } from 'react';
import './Main.css';
import { styled } from 'styled-components';

// Dùng styled để định nghĩa Components css
const ControllContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 20px 20px;
`;

const Label = styled.label`
	font-size: 25px;
	color: ${(props) => (props.$inValid ? 'rgb(218, 92, 92);' : 'yellow')};
`;

export default function Login() {
	const [account, setAccount] = useState({ email: '', password: '' });
	const [submit, setSubmit] = useState(false);
	console.log(submit);

	const handleSubmit = () => setSubmit(true);
	const handleAccount = (event) => {
		const { name, value } = event.target;
		setAccount((preAccount) => ({
			...preAccount,
			[name]: value,
		}));
	};

	const isValidateName = submit && !account.email.includes('@');
	const isValitdatePass = submit && account.password.trim().length < 6;

	return (
		<div className="login">
			<h2>Đăng Nhập</h2>
			{/* Dùng styled-components để tạo Components css */}
			<ControllContainer>
				<Label $inValid={isValidateName}>Email:</Label>
				<input
					type="text"
					className={isValidateName ? 'error_inp' : ''}
					style={{
						padding: '10px 0px',
						fontSize: '15px',
					}}
					name="email"
					placeholder="Nhập email"
					onChange={handleAccount}
				/>

				<label htmlFor="" className={`lbl_login ${isValitdatePass ? 'error_title' : ''}`}>
					Mật khẩu:
				</label>
				<input
					type="password"
					className={`inp_login ${isValitdatePass ? 'error_inp' : ''}`}
					name="password"
					placeholder="Nhập mật khẩu"
					onChange={handleAccount}
				/>
			</ControllContainer>
			<div className="activity">
				<a href="#">Bạn chưa có tài khoản?</a>
				<button className="btn_submit" onClick={handleSubmit}>
					Đăng nhập
				</button>
			</div>
		</div>
	);
}
