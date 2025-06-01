

function useAddTodos(addTodo: (text: string) => void): (value: string) => void {
	const handleAddTodo = (value: string) => {
		if (value.trim()) {
			addTodo(value);
		} else {
			console.error('Input is empty');
		}
	};

	return handleAddTodo;
}

export default useAddTodos;
