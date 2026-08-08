import { useState } from 'react';
import './Main.css';
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
			<div className="form">
				<label htmlFor="" className={`lbl_login ${isValidateName ? 'error_title' : ''}`}>
					Email:
				</label>
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
			</div>
			<div className="activity">
				<a href="#">Bạn chưa có tài khoản?</a>
				<button className="btn_submit" onClick={handleSubmit}>
					Đăng nhập
				</button>
			</div>
		</div>
	);
}
