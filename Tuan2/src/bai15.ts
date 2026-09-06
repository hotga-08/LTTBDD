async function taskA(): Promise<string> {
    return "Task A";
}

async function taskB(): Promise<string> {
    return "Task B";
}

async function taskC(): Promise<string> {
    return "Task C";
}

async function runSequentially(): Promise<void> {
    const resultA = await taskA();
    console.log(resultA);

    const resultB = await taskB();
    console.log(resultB);

    const resultC = await taskC();
    console.log(resultC);
}

runSequentially();

export {};