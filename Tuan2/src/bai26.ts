function wait(time: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, time);
    });
}

async function main(): Promise<void> {
    console.log("Waiting...");

    await wait(5000);

    console.log("5 seconds passed");
}

main();

export {};