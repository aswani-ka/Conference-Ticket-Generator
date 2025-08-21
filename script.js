document.addEventListener("DOMContentLoaded", () => {
    const formSubmit = document.getElementById("form-ticket-generator");

    const fileInput = document.getElementById("file-input");
    const previewImg = document.getElementById("preview-img");
    const uploadIcon = document.getElementById("upload-icon");
    const buttonDiv = document.getElementById("button-div");
    const uploadPara = document.getElementById("upload-para");
    const removeBtn = document.getElementById("remove-btn");
    const changeBtn = document.getElementById("change-btn");
    const emailInp = document.getElementById("email");
    const invalidEmail = document.getElementById("invalid-email");
    const errorLogo = document.getElementById("error-logo");
    const submitButton = document.getElementById("submit-button");
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();

        if(!emailPattern.test(emailInp.value) || emailInp.value === "") {

            invalidEmail.classList.remove("hidden");
            errorLogo.classList.remove("hidden");
            emailInp.classList.add("border-red-400");
        }
        else {

            invalidEmail.classList.add("hidden");
            errorLogo.classList.add("hidden");
            window.location.href = "success-page.html";
            emailInp.value = "";
        }
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