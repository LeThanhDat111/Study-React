import { useState } from 'react';
import './Main.css';
export default function Login() {
	const [account, setAccount] = useState({ name: '', password: '' });
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

	const isValidateName = submit && !account.name.includes('@');
	const isValitdatePass = submit && !account.password.length < 6;
	if (isValidateName || isValitdatePass) {
		console.log('Lỗi đăng nhập');
	}

	return (
		<div className="login">
			<h2>Đăng Nhập</h2>
			<div className="form">
				<label htmlFor="" className="lbl_login">
					Tên tài khoản:
				</label>
				<input type="text" className="inp_login" name="name" placeholder="Tên đăng nhập" />

				<label htmlFor="" className="lbl_login">
					Mật khẩu tài khoản:
				</label>
				<input type="password" className="inp_login" name="password" placeholder="Mật khẩu" />
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
