function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
}

function changeCourse() {
    var selectElement = document.getElementById("course-select");
    var selectedCourse = selectElement.value;
    var lectureNameCell = document.getElementById("lectureName");
    lectureNameCell.textContent = selectedCourse + " Lecture";
}

document.addEventListener('DOMContentLoaded', function() {
    var editButton = document.getElementById('editButton');
    var gradeRows = document.querySelectorAll('.grades-table tbody tr');


    editButton.addEventListener('click', function() {
        gradeRows.forEach(function(row) {
            var cells = row.querySelectorAll('td:not(.student-name)');
            cells.forEach(function(cell) {
                cell.contentEditable = true;
            });
        });
    });

    var courseSelect = document.getElementById('course-select');
    courseSelect.addEventListener('change', function() {
        gradeRows.forEach(function(row) {
            var cells = row.querySelectorAll('td:not(.student-name)');
            cells.forEach(function(cell) {
                cell.textContent = '';
            });
        });
    });

    var gradeCells = document.querySelectorAll('.grades-table td[data-editable="true"]');
    gradeCells.forEach(function(cell) {
        cell.addEventListener('keypress', function(event) {
            var keyCode = event.keyCode;
            if (keyCode < 48 || keyCode > 57) {
                event.preventDefault();
            }
        });
    });
});


