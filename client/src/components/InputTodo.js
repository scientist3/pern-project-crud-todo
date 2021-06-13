import React, { Fragment, useState } from "react";

const InputTodo = () => {
	const [desc, setDesc] = useState("");

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { desc };
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			//setDesc(...[desc]);
			//console.log(response);
			window.location("/");
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<Fragment>
			<h1 className="text-center mt-5 p-4 border rounded-5 text-success bg-dark">
				Postgress Express React & Node Example: Todo
			</h1>
			<form
				className="d-flex mt-5 border border-light bbg-dark"
				onSubmit={onSubmitForm}>
				<input
					type="text"
					className="form-control m-2"
					value={desc}
					placeholder="What are you going today!"
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button className="btn btn-success m-2">Add</button>
			</form>
		</Fragment>
	);
};
export default InputTodo;
