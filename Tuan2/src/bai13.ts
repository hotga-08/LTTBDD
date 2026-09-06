function getError(): Promise<string> {
    return new Promise<string>((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

async function handleError(): Promise<void> {
    try {
        const result = await getError();

        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleError();

export {};