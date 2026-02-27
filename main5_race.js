const p1 = new Promise(res => setTimeout(() => res("Fast Task Won"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Slow Task Lost"), 3000));

Promise.race([p1, p2]).then(result => {
    console.log(result); 
});