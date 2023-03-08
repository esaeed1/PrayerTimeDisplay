// Select the image upload element and the container for the time
const imageUpload = document.getElementById("image-upload");
const hijriDateContainer = document.getElementById("hijri-date");

// Listen for changes in the image upload element
imageUpload.addEventListener("change", function () {
    // Get the selected file from the input element
    const file = imageUpload.files[0];

    // Create a new FileReader object to read the file
    const reader = new FileReader();

    // When the reader has finished loading the file, set the image src to the file data
    reader.addEventListener("load", function () {
        // Create a new image element and set its src to the loaded file data
        const imageElement = document.createElement("img");
        imageElement.src = reader.result;
        imageElement.style.maxHeight = "150px";
        imageElement.style.width = "100%";
        imageElement.style.objectFit = "cover";

        // Add the image element to the top of the current time container
        hijriDateContainer.insertBefore(imageElement, hijriDateContainer.firstChild);
    });

    // Read the selected file as a data URL
    reader.readAsDataURL(file);
});

// Center the hijri date text within its container
hijriDateContainer.style.textAlign = "center";
