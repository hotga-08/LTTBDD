function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

async function main(): Promise<void> {
    const result = await simulateTask(2000);

    console.log(result);
}

main();

export {};