const initQuote = () => {
    console.log('init quote');
    
    getTodaysQuote();
}

const getTodaysQuote = () => {
    const url = `https://quotes.rest/qod?language=en`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
                if (data.success) {
                    const quoteData = data.contents.quotes[0];
                    const quoteMsg = quoteData.quote;
                    const quoteAuthor = quoteData.author;
                    document.querySelector('#quoteMsg').innerText = quoteMsg;
                    document.querySelector('#quoteAuthor').innerText = quoteAuthor;
                }
            });
}

const showQuote = () => {
    document.querySelector('div.quote').classList.remove('hidden');
}
const hideQuote = () => {
    document.querySelector('div.quote').classList.add('hidden');
}

initQuote();