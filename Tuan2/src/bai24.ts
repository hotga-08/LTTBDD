async function postData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Hello",
                    body: "This is my post",
                    userId: 1
                })
            }
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

postData();