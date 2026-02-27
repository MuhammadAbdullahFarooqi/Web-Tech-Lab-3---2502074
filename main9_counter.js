let count = sessionStorage.getItem('pageCounter') || 0;
count = parseInt(count) + 1;
sessionStorage.setItem('pageCounter', count);
document.getElementById('display').innerText = "Reload Count: " + count;