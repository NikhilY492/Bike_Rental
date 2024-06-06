document.addEventListener("DOMContentLoaded", function() {
    var gearedRadio = document.getElementById("geared");
    var gearlessRadio = document.getElementById("gearless");

    gearedRadio.addEventListener("change", function() {
        if (gearedRadio.checked) {
            window.location.href = "file:///C:/Users/saidi/OneDrive/Desktop/sunny/Bike_Rental/proj/project/grid (1).html"; // Replace with the actual URL you want to redirect to
        }
    });

    gearlessRadio.addEventListener("change", function() {
        if (gearlessRadio.checked) {
            window.location.href = "grid.html"; // Replace "gearless.html" with the actual URL you want to redirect to
        }
    });
});