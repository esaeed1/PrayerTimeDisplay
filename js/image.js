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

        // Add the image element to the current time container, at the very top
        hijriDateContainer.prepend(imageElement);
    });

    // Read the selected file as a data URL
    reader.readAsDataURL(file);
});
