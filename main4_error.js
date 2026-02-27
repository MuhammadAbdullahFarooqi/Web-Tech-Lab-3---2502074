const login = () => {
    return new Promise((resolve) => {
        console.log("Step 1: Authenticating user...");
        setTimeout(() => {
            resolve({ userId: 501, username: "Ahmad" });
        }, 1500);
    });
};

const getProfile = (userId) => {
    return new Promise((resolve, reject) => {
        console.log(`Step 2: Attempting to fetch profile for ID ${userId}...`);
        
        setTimeout(() => {
            const isSuccess = false; 

            if (isSuccess) {
                resolve({ name: "Ahmad", bio: "Software Developer" });
            } else {
                reject("Error 404: Profile data could not be found!");
            }
        }, 1500);
    });
};

login()
    .then((user) => {
        console.log("Login successful for:", user.username);
        return getProfile(user.userId);
    })
    .then((profile) => {
        console.log("Profile Data:", profile);
    })
    .catch((error) => {
        console.log("%c--- ERROR CAUGHT ---", "color: red; font-weight: bold;");
        console.error(error); 
    });