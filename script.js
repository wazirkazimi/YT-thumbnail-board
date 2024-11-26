// Array to store video thumbnails
let thumbnailsArray = [];

// Load stored thumbnails from local storage when the page loads
window.onload = function () {
    const storedThumbnails = localStorage.getItem('thumbnailsArray');
    if (storedThumbnails) {
        thumbnailsArray = JSON.parse(storedThumbnails);
        renderThumbnails();
    }
};

const Dythumnails = document.querySelector('.dynamically-thumbnails');

function getLink() {
    // Extracting YT Video link from text input
    const inputValue = document.querySelector('#YT-link').value;

    // Trimming out spaces and extracting the unique YT video ID
    const vid_id = inputValue.trim().substring(17, 28);
    console.log(vid_id);

    // Generating the thumbnail URL
    const imgURL = `https://img.youtube.com/vi/${vid_id}/0.jpg`;
    console.log(imgURL);

    // Adding the URL to the thumbnails array
    thumbnailsArray.push(imgURL);

    // Save the updated array to local storage
    localStorage.setItem('thumbnailsArray', JSON.stringify(thumbnailsArray));

    // Render the thumbnails
    renderThumbnails();
}

function renderThumbnails() {
    // Clear the container first
    Dythumnails.innerHTML = '';

    // Loop through the array and append thumbnails dynamically
    thumbnailsArray.forEach((imgURL) => {
        Dythumnails.innerHTML += `
            <div class="thumbnail-container">
                <img src="${imgURL}" alt="thumbnail">
                <button class="download-btn" onclick="downloadImage('${imgURL}')">Download</button>
            </div>
        `;
    });
}
