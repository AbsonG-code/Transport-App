const bookRideBtn =
document.querySelector(".book-now");
const bookRideForm =
document.getElementById("book-ride-form");

bookRideBtn.addEventListener("click", () =>{

    bookRideForm.style.display =
    bookRideForm.style.display ===
    "none" ? "block" : "none";
});

const quickRideBtn = document.getElementById('quick-ride-btn');
const scannerContainer = document.getElementById('scanner-container');

const scanner = new
ScanJS.scanner({
    container: scannerContainer,
    video: {
        facingMode: 'environment'
    }
});

quickRideBtn.addEventListener('click',
    () => {
        scanner.start();
    });


