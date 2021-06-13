import React, { Fragment } from "react";
import "./App.css";

// Components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
	return (
		<Fragment>
			<div className="container pt-2 pb-3 bg-light">
				<InputTodo />
				<ListTodos />
			</div>
		</Fragment>
	);
}

export default App;
