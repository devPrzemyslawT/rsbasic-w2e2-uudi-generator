import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "./components/Button";

function App() {
	const { v4: uuidv4 } = require("uuid");

	const [codeValue, setCodeValue] = useState("0");

	const handleOnClick = event => {
		setCodeValue(uuidv4());
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h2>UUID generator</h2>
				<Button label='GENERATE' handleCode={handleOnClick} />
				<p>New code:</p>
				<p>{codeValue}</p>
			</header>
		</div>
	);
}

export default App;
