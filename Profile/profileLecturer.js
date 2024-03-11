function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {

    var lecturerID = localStorage.getItem("lecturerID");
    console.log(lecturerID);

    var lecturerIdElement = document.getElementById("lecturer-id");
    if (lecturerIdElement) {
        lecturerIdElement.textContent = lecturerID; 
        
    } else {
        console.error("Lecturer ID bulunamadı ");
    }

    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

 
    var nameElement = document.getElementById("lecturer-name");
    if (nameElement) {
        nameElement.textContent = name;
        console.log(name);
    } else {
        console.error("Lecturer name bulunamadı");
    }
});
