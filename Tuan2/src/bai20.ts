function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, time);
    });
}

function timeoutPromise(time: number): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timeout"));
        }, time);
    });
}

async function fetchWithTimeout(): Promise<void> {
    try {
        const result = await Promise.race([
            simulateTask(3000),
            timeoutPromise(2000)
        ]);

        console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

fetchWithTimeout();

export {};