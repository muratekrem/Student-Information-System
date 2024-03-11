
function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {

    var studentID = localStorage.getItem("studentID");
    console.log(studentID);

    var studentIdElement = document.getElementById("student-id");
    if (studentIdElement) {
        studentIdElement.textContent = studentID; 
        
    } else {
        console.error("Student ID bulunamadı.");
    }

    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

 
    var nameElement = document.getElementById("student-name");
    if (nameElement) {
        nameElement.textContent = name;
        console.log(name);
    } else {
        console.error("Student name bulunamadı ");
    }
});
