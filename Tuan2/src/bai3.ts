function getError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}

getError()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });