const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            console.log("--- File Content Start ---");
            console.log(content); 
            console.log("--- File Content End ---");
        };

        reader.readAsText(file);
    } else {
        console.log("No file selected.");
    }
});