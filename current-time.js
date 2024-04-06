document.addEventListener('DOMContentLoaded', function() {
    var currentTime = new Date().getHours();
    var greetingDiv = document.getElementById('greeting');
    if (currentTime >= 0 && currentTime < 12) {
        greetingDiv.textContent = 'Good Morning Respected Sir / Ma\'am.';
    } else if (currentTime >= 12 && currentTime < 16) {
        greetingDiv.textContent = 'Good Afternoon Respected Sir / Ma\'am.';
    } else {
        greetingDiv.textContent = 'Good Evening Respected Sir / Ma\'am.';
    }
});
