async function fetchUser(
    id: number
): Promise<{ id: number; name: string }> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        id: id,
        name: `User ${id}`
    };
}

async function main(): Promise<void> {
    const user = await fetchUser(1);

    console.log(user);
}

main();

export {};