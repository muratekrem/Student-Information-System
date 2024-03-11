
    function toggleMenu() {
        var menuList = document.querySelector('.menu-list');
        menuList.classList.toggle('active');
    }

    function toggleAddStudentPanel(lectureName) {
        var panel = document.getElementById("add-student-panel");
        panel.style.display = "block";
        panel.dataset.lectureName = lectureName; 
    }

    function addLecture() {
        var lectureName = document.getElementById("lecture-name").value;
    
        
        var lectureTable = document.createElement("table");
        lectureTable.className = "lecture-table";
        lectureTable.id = "lecture-table-" + lectureName.replace(/\s+/g, '-').toLowerCase(); 
    
        var headerRow = document.createElement("tr");
    
        var cell = document.createElement("th");
        cell.colSpan = 2;
    
        var container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "space-between";
    
        var lectureNameElement = document.createElement("span");
        lectureNameElement.textContent = "Lecture Name: " + lectureName;
    
        var addStudentButton = document.createElement("button");
        addStudentButton.textContent = "Add Student";
        addStudentButton.onclick = function() {
            toggleAddStudentPanel(lectureName);
        };
    
        var removeStudentButton = document.createElement("button");
        removeStudentButton.textContent = "Remove Student";
        removeStudentButton.onclick = function() {
            toggleRemoveStudentPanel(lectureName);
        };
    
       
        container.appendChild(lectureNameElement);
        container.appendChild(addStudentButton);
        container.appendChild(removeStudentButton);
    

        cell.appendChild(container);
    
        headerRow.appendChild(cell);
    
        lectureTable.appendChild(headerRow);
    
        var idNameRow = document.createElement("tr");
    
        var idLabelCell = document.createElement("td");
        idLabelCell.textContent = "Student ID";
    
        var nameLabelCell = document.createElement("td");
        nameLabelCell.textContent = "Student Name";
    
        idNameRow.appendChild(idLabelCell);
        idNameRow.appendChild(nameLabelCell);
    
        lectureTable.appendChild(idNameRow);
    

        var addStudentPanel = document.createElement("div");
        addStudentPanel.className = "add-student-panel";
        addStudentPanel.id = "add-student-panel-" + lectureName.replace(/\s+/g, '-').toLowerCase();
        addStudentPanel.style.display = "none";
    
        var inputId = document.createElement("input");
        inputId.type = "text";
        inputId.id = "student-id-" + lectureName.replace(/\s+/g, '-').toLowerCase();
        inputId.placeholder = "Student ID";
        addStudentPanel.appendChild(inputId);
    
        var inputName = document.createElement("input");
        inputName.type = "text";
        inputName.id = "student-name-" + lectureName.replace(/\s+/g, '-').toLowerCase();
        inputName.placeholder = "Name Surname";
        addStudentPanel.appendChild(inputName);
    
        var addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.onclick = function() {
            addStudent(lectureName);
        };
        addStudentPanel.appendChild(addButton);

        lectureTable.appendChild(addStudentPanel);
    

        var lecturerContainer = document.querySelector(".lecturer-container");
        lecturerContainer.appendChild(lectureTable);
    }
    

    function addStudent() {
        var nameInput = document.getElementById("student-name");
        var idInput = document.getElementById("student-id");
        var lectureName = document.getElementById("add-student-panel").dataset.lectureName; 

        var lectureTable = document.getElementById("lecture-table-" + lectureName.replace(/\s+/g, '-').toLowerCase());

        
        var newRow = lectureTable.insertRow();

        var idCell = newRow.insertCell();
        idCell.textContent = idInput.value;

       
        var nameCell = newRow.insertCell();
        nameCell.textContent = nameInput.value;


        idInput.value = "";
        nameInput.value = "";

        
        var panel = document.getElementById("add-student-panel");
        panel.style.display = "none";
    }


    var currentLecture;

    function toggleRemoveStudentPanel(lectureNumber) {
        currentLecture = lectureNumber;
        var panel = document.getElementById('remove-student-panel');
        if (panel.style.display === 'none') {
            populateRemoveStudentDropdown(lectureNumber);
            panel.querySelector('h4').innerText = 'Remove Student from Lecture ' + lectureNumber;
            panel.style.display = 'block';
        } else {
            panel.style.display = 'none';
        }
    }


    function populateRemoveStudentDropdown(lectureNumber) {
        var select = document.getElementById('remove-student-select');
        select.innerHTML = '';

        var table = document.getElementById('lecture-table-' + lectureNumber);
        var students = table.getElementsByTagName('td');
        for (var i = 0; i < students.length; i += 2) {
            var option = document.createElement('option');
            option.text = students[i].textContent; 
            option.value = students[i + 1].textContent; 
            select.add(option);
        }
    }

function removeStudent() {
    var select = document.getElementById('remove-student-select');
    var selectedName = select.value;


    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text === selectedName) {
            select.remove(i);
            break;
        }
    }

    var table = document.getElementById('lecture-table-' + currentLecture);
    var students = table.getElementsByTagName('td');
    for (var i = 0; i < students.length; i += 2) {
        if (students[i + 1].textContent === selectedName) {
            var rowIndex = students[i + 1].parentNode.rowIndex;

            if (rowIndex > 1) { 
                table.deleteRow(rowIndex); 
            }
            break;
        }
    }

    toggleRemoveStudentPanel(currentLecture);
}
