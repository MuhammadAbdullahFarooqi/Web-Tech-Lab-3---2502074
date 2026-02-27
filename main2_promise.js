const downloadImage = new Promise((resolve, reject) => {
    console.log("Download started...");

  
    setTimeout(() => {
        const isSuccess = true;

        if (isSuccess) {
            resolve("https://www.istockphoto.com/photos/beautiful-nature.png"); 
        } else {
            reject("Error: Download failed!"); 
        }
    }, 2000);
});

downloadImage
    .then((url) => {
        console.log("Task 2 Result: Image downloaded successfully from " + url);
    })
    .catch((error) => {
        console.error(error);
    });