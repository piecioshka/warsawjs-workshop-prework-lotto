const CONFIG = {
    SIZE: 6,
    RANDOM_FROM: 1,
    RANDOM_TO: 49
};

function getRandomNumber(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function render(numbers) {
    const $app = document.querySelector('#app');
    const $ul = document.createElement('ul');

    function template(number) {
        return `<li>${number}</li>`;
    }

    numbers.forEach((number) => {
        $ul.innerHTML += template(number);
    });

    $app.append($ul);
}

function buildArrayWithRandomNumbers(size) {
    const from = CONFIG.RANDOM_FROM;
    const to = CONFIG.RANDOM_TO;

    const numbers = Array.from({ length: size }).map(() => {
        return getRandomNumber(from, to)
    });
    return numbers;
}

function byAlphanumeric(a, b) {
    switch (true) {
        case (a > b): return 1;
        case (a < b): return -1;
        default: return 0;
    }
}

function setup() {
    const size = CONFIG.SIZE;
    const numbers = buildArrayWithRandomNumbers(size);
    // Posortowanie losowo wygenerowanych liczb (symulacja prawdziwego losowania)
    numbers.sort(byAlphanumeric);
    render(numbers);
}

window.addEventListener('DOMContentLoaded', setup);
