function sayHello(name, callback) {
    setTimeout(() => {
        const message = `Hello, ${name}!`;
        callback(message);
    }, 3000); 
}


sayHello("Ayesha", (greeting) => {
    console.log(greeting); 
});