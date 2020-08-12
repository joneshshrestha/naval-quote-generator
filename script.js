import { quotesArray } from './quotes.js'

document.getElementById('btn').addEventListener('click', () => {
    const randomNumberGenerator = Math.floor(Math.random() * quotesArray.length)
    document.querySelector('p').textContent = quotesArray[randomNumberGenerator]
})

