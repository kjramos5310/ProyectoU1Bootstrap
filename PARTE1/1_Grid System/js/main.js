async function loadContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const content = await response.text();
        document.getElementById('content').innerHTML = content;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

