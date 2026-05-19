historyData = []

// Heart btn

const heartBtn = document.getElementsByClassName('heart-btn')
const heartCount = document.getElementById('heart-count')

let count = 0;
for (const heart of heartBtn) {
    heart.addEventListener('click', function () {
        count = count + 1;
        heartCount.innerText = count
    })
}

// Call Buttons

const callBtns = document.getElementsByClassName('card-call-btn')
const coinCount = document.getElementById('coin-count')
const historyContainer = document.querySelector('.history-container')

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        let coins = parseInt(coinCount.innerText)

        if (coins < 20) {
            alert('Insufficient Balance')
            return
        }

        const cardItem = this.closest('.card-item')
        const cardTitle = cardItem.querySelector('.card-font-title').innerText
        const cardNumber = cardItem.querySelector('.card-number').innerText
        alert(`📞Calling ${cardTitle} ${cardNumber}`)

        coinCount.innerText = coins - 20

        const data = {
            name: cardTitle,
            number: cardNumber,
            date: new Date().toLocaleTimeString()
        }

        historyData.push = data;

        const div = document.createElement('div')
        div.className = 'history-items'
        div.innerHTML = `
                    <div>
                        <h4 class="history-title">${data.name}</h4>
                        <p class="history-paragraph">${data.number}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
        `
        historyContainer.appendChild(div)
    })
}

// Clear History Button
const clearHistoryBtn = document.querySelector('.btn-history')

clearHistoryBtn.addEventListener('click', function () {
    // Remove all history items only
    const historyItems = document.querySelectorAll('.history-items')

    for (const item of historyItems) {
        item.remove()
    }

    // Clear the data array
    // historyData = []
})

// Copy button

const buttons = document.getElementsByClassName('card-copy-btn');
const copyCountElement = document.getElementById('copy-count');

let copyCount = 0;

for (let btn of buttons) {

    btn.addEventListener('click', function () {

        const cardItem = btn.closest('.card-item');
        const number = cardItem.querySelector('.card-number').innerText;

        navigator.clipboard.writeText(number);

        alert('Copied: ' + number);

        copyCount = copyCount + 1;
        copyCountElement.innerText = copyCount;

    });

}
