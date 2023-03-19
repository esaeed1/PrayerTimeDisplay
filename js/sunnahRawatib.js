const toggleCheckbox = document.querySelector('#toggle-additional-columns');
const additionalColumns = document.querySelectorAll('.additional-column');

toggleCheckbox.addEventListener('change', function () {
    for (let column of additionalColumns) {
        if (this.checked) {
            column.style.display = 'table-cell';
        } else {
            column.style.display = 'none';
        }
    }
});