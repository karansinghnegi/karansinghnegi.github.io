let words = ['Developer', 'Guitarist', 'Poet', 'Magician',]

window.addEventListener('DOMContentLoaded', () => {
    displayWord(document.querySelector('.dynamic-string'))
});

function displayWord(el) {
    el.classList.remove('selected');
    const word = words.shift();
    words.push(word);
    displayLetters(el, word);
}

function displayLetters(el, word, idx = -1) {
    idx++;

    if (idx > word.length) {
        setTimeout( () => el.classList.add('selected'), 1650);
        return setTimeout( () => displayWord(el), 2000);
    }

    el.innerHTML = word.slice(0, idx);
    setTimeout( () => displayLetters(el, word, idx), 200);

}