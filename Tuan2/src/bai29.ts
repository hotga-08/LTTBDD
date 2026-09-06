console.log("BAI30 DANG CHAY");

function simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task completed after ${time}ms`);
        }, time);
    });
}

async function queueProcess(): Promise<void> {
    const times: number[] = [1000, 2000, 1500, 1000, 500];

    for (const time of times) {
        const result = await simulateTask(time);
        console.log(result);
    }

    console.log("All tasks completed");
}

queueProcess();

export {};