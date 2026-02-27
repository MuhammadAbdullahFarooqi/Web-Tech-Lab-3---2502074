const checkStatus = (callback) => {
    setTimeout(() => callback(null, "Status OK"), 2000);
};

const checkStatusPromise = () => {
    return new Promise((resolve, reject) => {
        checkStatus((err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

checkStatusPromise().then(res => console.log("Converted Promise Result:", res));