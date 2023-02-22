import logo from "./logo.svg";
import "./App.css";

function App() {
	const { v4: uuidv4 } = require("uuid");
	let value = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h2>UUID generator</h2>
				<p>New code = {value}</p>
			</header>
		</div>
	);
}

export default App;
