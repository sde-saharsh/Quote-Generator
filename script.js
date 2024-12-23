const quote_text = document.getElementById('quote-text');
const author_name = document.getElementById('author-name');
const btn = document.getElementById('btn');

async function fetchRandomQuote() {
    try {
        let response = await fetch('https://dummyjson.com/quotes');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();

        const quotes = data.quotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        quote_text.textContent = `"${randomQuote.quote}"`;
        author_name.textContent = `- ${randomQuote.author}`;
    } catch (error) {
        alert('An error occurred while fetching the quote. Check the console for details.');
        console.error(error);
    }
}

btn.addEventListener('click', fetchRandomQuote);

fetchRandomQuote();
