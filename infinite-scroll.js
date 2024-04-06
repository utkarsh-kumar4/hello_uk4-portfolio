const container = document.querySelector('.infinite-scroll-container');
const contentToAppend = `<div class="content-item"></div>`; // Simplified content structure
let currentPage = 1;
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function loadMoreContent() {
    // Simulate fetching new content (replace with your actual data fetching logic)
    const newContent = contentToAppend.repeat(5); // Add 5 content items at once

    const contentElements = document.createElement('div');
    contentElements.innerHTML = newContent;

    // Set random color for each content item
    const contentItems = contentElements.querySelectorAll('.content-item');
    contentItems.forEach(item => item.style.backgroundColor = getRandomColor());

    container.append(contentElements);
    currentPage++;
}

window.addEventListener('scroll', () => {
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - clientHeight / 2) {
        loadMoreContent();
    }
});

// Load initial content
loadMoreContent();
