function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

async function batchProcess(): Promise<void> {
    const tasks: Promise<string>[] = [
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(2000),
        simulateTask(2500),
        simulateTask(3000)
    ];

    const results = await Promise.all(tasks);

    console.log(results);
}

batchProcess();

export {};