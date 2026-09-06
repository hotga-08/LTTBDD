interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getMultipleTodos(): Promise<void> {
    try {
        console.log("Bắt đầu lấy dữ liệu...");

        for (let i = 1; i <= 3; i++) {
            console.log(`Đang lấy Todo ${i}...`);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${i}`
            );

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data: Todo = await response.json();

            console.log(data);
        }

        console.log("Hoàn thành!");
    } catch (error) {
        console.error("Lỗi:", error);
    }
}

getMultipleTodos();

export {};