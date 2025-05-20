
const tabs = document.querySelectorAll('.order-type-text');
const contents = document.querySelectorAll('.orderbox');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(`.orderbox[data-content="${tab.dataset.tab}"]`).classList.add('active');
    });
});
