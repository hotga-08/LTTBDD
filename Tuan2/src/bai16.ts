function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

async function runParallel(): Promise<void> {
    const results = await Promise.all([
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(3000)
    ]);

    console.log(results);
}

runParallel();

export {};