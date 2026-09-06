async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        id: id,
        name: `User ${id}`
    };
}

async function fetchUsers(ids: number[]): Promise<{ id: number; name: string }[]> {
    const users: { id: number; name: string }[] = [];

    for (const id of ids) {
        const user = await fetchUser(id);
        users.push(user);
    }

    return users;
}

async function main(): Promise<void> {
    const users = await fetchUsers([1, 2, 3]);

    console.log(users);
}

main();

export {};