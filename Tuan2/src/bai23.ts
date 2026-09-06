interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getCompletedTodos(): Promise<void> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        const todos: Todo[] = await response.json();

        const completedTodos = todos.filter(
            (todo: Todo) => todo.completed === true
        );

        console.log(completedTodos);
    } catch (error) {
        console.error(error);
    }
}

getCompletedTodos();

export {};