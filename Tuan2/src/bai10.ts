function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

simulateTask(1000)
    .then((result: string) => {
        console.log("Success:", result);
    })
    .catch((error: Error) => {
        console.error("Error:", error.message);
    });

export {};