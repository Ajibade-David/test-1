
function displayData() {
    var inputData = document.getElementById("inputData").value;
    var nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.textContent =  inputData;
}

// Trigger the function on page load
window.addEventListener('DOMContentLoaded', function() {
    var initialData = document.getElementById("inputData").value;
    displayData(); // Display initial value
    if (initialData) {
        nameDisplay.textContent =   initialData;
    }
});
function displayLocation() {
    var inputLocation = document.getElementById("inputLocation").value;
    var locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.textContent =   inputLocation;
}
window.addEventListener('DOMContentLoaded', function() {
    var initialData1 = document.getElementById("inputLocation").value;
    displayLocation(); // Display initial value
    if (initialData1) {
        locationDisplay.textContent =   initialData;
    }
});
function displayPicture() {
    var inputPicture = document.getElementById("formFileLg");
    var displayPicture = document.getElementById("displayPicture");

    if (inputPicture.files && inputPicture.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            displayPicture.src = e.target.result;
            displayPicture.style.display = "block";
        };

        reader.readAsDataURL(inputPicture.files[0]);
    }
}



