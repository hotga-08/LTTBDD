function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

async function main(): Promise<void> {
    const task1 = simulateTask(1000);
    const task2 = simulateTask(2000);
    const task3 = simulateTask(3000);

    const results = await Promise.all([
        task1,
        task2,
        task3
    ]);

    console.log(results);
}

main();

export {};