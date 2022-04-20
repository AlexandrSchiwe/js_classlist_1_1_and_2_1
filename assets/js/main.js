let headline = document.getElementById('headline');
let list = document.getElementById('list');

function changeHeadline() {
    headline.classList.add('headlineStyle');
    list.classList.add('listStyle');
}

function removeStyle() {
    headline.classList.remove('headlineStyle');
    list.classList.remove('listStyle');
}