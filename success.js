document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("result-heading");
    const para = document.getElementById("result-para");   
    const gitId = document.getElementById("git-id");
    const userName = document.getElementById("user-name"); 
    const userImage = document.getElementById("user-image");

    heading.innerHTML = `Congrats, <span class="highlight"> ${sessionStorage.getItem("name")}! </span> Your ticket is ready.`;
    para.innerHTML = `We've emailed your ticket to <span class="highlight"> ${sessionStorage.getItem("email")} </span> and will send updates in the run up to the event.`;
    userImage.src = sessionStorage.getItem("image");
    userName.textContent = sessionStorage.getItem("name");
    gitId.textContent = `@${sessionStorage.getItem("git")}`;
});