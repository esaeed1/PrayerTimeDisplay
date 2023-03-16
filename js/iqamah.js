const checkbox = document.getElementById('show-iqamah');
const iqamahCells = document.querySelectorAll('.iqamah-time');
checkbox.addEventListener('change', function() {
    iqamahCells.forEach(cell => cell.style.display = this.checked ? '' : 'none');
});
