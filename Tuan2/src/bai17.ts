const promises: Promise<string>[] = [
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
];

async function runPromises(): Promise<void> {
    for await (const result of promises) {
        console.log(result);
    }
}

runPromises();

export {};