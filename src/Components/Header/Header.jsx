import logo from '../../assets/img/my_logo.png';
// import classes from './Header.module.css';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	& h1 {
		background: linear-gradient(35deg, rgb(67, 209, 162), rgb(207, 72, 227));
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	& p {
		color: rgb(7, 37, 81);
		font-weight: bold;
	}

	& img {
		width: 20rem;
		height: 20rem;
	}

	& ul {
		display: flex;
		gap: 50px;
	}

	& li {
		list-style-type: none;
	}

	& a {
		text-decoration: none;
		font-size: 20px;
	}
`;

function Header() {
	return (
		<StyledHeader>
			<img src={logo} alt="" />
			<h1>React Cùng Tôi!!!</h1>
			<p>Học React - Khám phá cách xây dựng các ứng dụng linh hoạt, hiện đại và đầy sáng tạo!</p>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Shop</Link>
				</li>
				<li>
					<Link to="/introduction">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</StyledHeader>
	);
}

export default Header;
