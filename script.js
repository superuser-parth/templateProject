// script.js

window.addEventListener('load', function() {
    // Wait for a short delay to ensure animation completes
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // Match this duration with the animation duration
});
