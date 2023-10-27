// JavaScript code for image click functionality goes here

// Example code for opening image gallery on image click
const images = document.querySelectorAll('.image-overlay ');
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Replace this example with your image gallery functionality
        window.location.href = `gallery.html?image=${index}`;
    });
});
