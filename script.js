document.addEventListener("DOMContentLoaded", () => {
    const formSubmit = document.getElementById("form-ticket-generator");

    const fileInput = document.getElementById("file-input");
    const previewImg = document.getElementById("preview-img");
    const uploadIcon = document.getElementById("upload-icon");
    const buttonDiv = document.getElementById("button-div");
    const uploadPara = document.getElementById("upload-para");
    const removeBtn = document.getElementById("remove-btn");
    const changeBtn = document.getElementById("change-btn");
    const fullName = document.getElementById("full-name");
    const emailInp = document.getElementById("email");
    const gitUsername = document.getElementById("git-username");
    const invalidEmail = document.getElementById("invalid-email");
    const errorLogo = document.getElementById("error-logo");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    uploadIcon.addEventListener("click", () => fileInput.click());
    changeBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", function(){
        const file = fileInput.files[0];

        if(!file) return;

        if(!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
            alert("Please upload an image file (PNG/JPG/JPEG)");
            fileInput.value = "";
            return;
        }

        if(file.size > 500 * 1024) {
            alert("File size must be less than 500KB");
            fileInput.value ="";
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            uploadIcon.classList.add("hidden");
            buttonDiv.classList.remove("hidden");
            uploadPara.classList.add("hidden");
            previewImg.src = e.target.result;
            previewImg.style.display = "block";
        };
        reader.readAsDataURL(file);
    });

    removeBtn.addEventListener("click", () => {

        previewImg.src = "";
        previewImg.style.display = "none";
        fileInput.value = "";
        uploadIcon.classList.remove("hidden");
        buttonDiv.classList.add("hidden");
        uploadPara.classList.remove("hidden");
    });



    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();

        if(!emailPattern.test(emailInp.value) || emailInp.value === "") {

            invalidEmail.classList.remove("hidden");
            errorLogo.classList.remove("hidden");
            emailInp.classList.add("border-red-400");
            return
        }

        const userName = fullName.value.trim();
        const userEmail = emailInp.value.trim();
        const userGit = gitUsername.value.trim();
        const userImage = fileInput.files[0];
        
        const reader = new FileReader();
        reader.onload = function(e) {
            
            sessionStorage.setItem("name", userName);
            sessionStorage.setItem("email", userEmail);     
            sessionStorage.setItem("git", userGit);
            sessionStorage.setItem("image", e.target.result);
            
            window.location.href = "success-page.html";
        }
        reader.readAsDataURL(userImage);
    });

    emailInp.addEventListener("input", () => {
        if(emailPattern.test(emailInp.value)) {

            invalidEmail.classList.add("hidden");
            errorLogo.classList.add("hidden");
            emailInp.classList.remove("border-red-400");
        }
        else {

            emailInp.classList.add("border-red-400");
        }
    });
});