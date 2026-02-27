const getProductIds = () => {
    return new Promise((resolve, reject) => {
        console.log("Step 1: Fetching product list...");
        setTimeout(() => {
            const ids = [101, 102, 103, 104];
            resolve(ids); 
        }, 1500);
    });
};

const getProductDetails = (id) => {
    return new Promise((resolve, reject) => {
        console.log(`Step 2: Fetching details for Product ID: ${id}...`);
        setTimeout(() => {
            const product = {
                productId: id,
                name: "Mechanical Keyboard",
                price: "$120"
            };
            resolve(product); 
        }, 1500);
    });
};

getProductIds()
    .then((ids) => {
        const firstId = ids[0];
        return getProductDetails(firstId);
    })
    .then((productDetails) => {
        
        console.log("Final Result: Product Details Received:", productDetails);
    })
    .catch((error) => {
        console.error("An error occurred in the sequence:", error);
    });