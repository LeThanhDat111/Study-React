import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/MainContent/Main.jsx';
import { Routes, Route } from 'react-router-dom';
import Shop from './Components/Shop.jsx';
import Introduction from './Components/MainContent/Introduction.jsx';
import Contact from './Components/MainContent/Contact.jsx';
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/products" element={<Shop />}></Route>
				<Route path="/introduction" element={<Introduction />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</>
	);
}
export default App;
