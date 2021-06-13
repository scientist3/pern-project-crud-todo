import React, { Fragment, useState, useEffect } from "react";

const ListTodos = () => {
	const [todos, setTodos] = useState([]);
	const getTodos = async () => {
		try {
			const response = await fetch("http://localhost:5000/todos");
			const jsonData = await response.json();
			setTodos(jsonData);
			console.log(jsonData);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Fragment>
			<h2 className="text-center mt-5 p-4 border rounded-5 text-success bg-dark">
				TODO LIST
			</h2>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Description</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => {
						console.log(todo.description);
						return (
							<tr id={todo.todo_id}>
								<td>{todo.todo_id}</td>
								<td>{todo.description}</td>
								<td>
									<span className="p-2">
										<i class="fas fa-edit"></i>
									</span>
									<span className="p-2">
										<i class="fas fa-trash-alt"></i>
									</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Fragment>
	);
};
export default ListTodos;
