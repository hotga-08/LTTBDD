async function fetchWithRetry(
    url: string,
    retries: number
): Promise<any> {
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(
                    `HTTP Error: ${response.status}`
                );
            }

            return await response.json();

        } catch (error) {
            console.log(
                `Attempt ${i + 1} failed`
            );

            if (i === retries) {
                throw error;
            }
        }
    }

    throw new Error("All retries failed");
}

async function main(): Promise<void> {
    try {
        const data = await fetchWithRetry(
            "https://jsonplaceholder.typicode.com/todos/1",
            3
        );

        console.log(data);
    } catch (error) {
        console.error("All retries failed:", error);
    }
}

main();

export {};