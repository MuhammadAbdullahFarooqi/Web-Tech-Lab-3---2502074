async function handleTask() {
    try {
        console.log("Fetching user...");
        const user = await new Promise(res => setTimeout(() => res({id: 1}), 1000));
        console.log("User ID:", user.id);
    } catch (error) {
        console.error("Error found:", error);
    }
}
handleTask();