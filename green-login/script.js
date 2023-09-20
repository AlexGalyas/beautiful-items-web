const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    if(togglePassword.classList.contains('fa-eye')){
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
        
    }else{
        togglePassword.classList.add('fa-eye');
        togglePassword.classList.remove('fa-eye-slash');
    }
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
