function filterList() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('wordList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const textValue = li[i].textContent || li[i].innerText;
        if (textValue.toLowerCase().includes(filter)) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}