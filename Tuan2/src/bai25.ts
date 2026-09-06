function downloadFile() {
    return new Promise((resolve) => {
        console.log("Downloading...");

        setTimeout(() => {
            resolve("Download completed");
        }, 3000);
    });
}

downloadFile().then((result) => {
    console.log(result);
});