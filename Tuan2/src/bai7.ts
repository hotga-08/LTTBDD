function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

async function main(): Promise<void> {
    const fastTask = simulateTask(1000);
    const slowTask = simulateTask(3000);

    const result = await Promise.race([
        fastTask,
        slowTask
    ]);

    console.log(result);
}

main();

export {};