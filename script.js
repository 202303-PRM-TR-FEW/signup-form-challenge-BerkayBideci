window.addEventListener("DOMContentLoaded", () => {
    const fname = document.querySelector("#fname")
    const lname = document.querySelector("#lname")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const fnameError = document.querySelector("#fnameError")
    const lnameError = document.querySelector("#lnameError")
    const emailError = document.querySelector("#emailError")
    const passwordError = document.querySelector("#passwordError")
    const submitButton = document.querySelector("#submitButton")
    // const allInputs = document.querySelectorAll("form > input")
    // const allErrors = document.querySelector(".error")

    let validatedFname;
    let validatedLname;
    let validatedEmail;
    let validatedPassword;
    // let inputs = Array.from(allInputs)
    // let errors = Array.from(allErrors)

    fname.addEventListener("input", validateFname)
    lname.addEventListener("input", validateLname)
    email.addEventListener("input", validateEmail)
    password.addEventListener("input", validatePassword)
    fname.addEventListener("input", validateSubmit)
    lname.addEventListener("input", validateSubmit)
    email.addEventListener("input", validateSubmit)
    password.addEventListener("input", validateSubmit)
    submitButton.addEventListener("click", validateSubmit)

    function validateFname() {
        if (fname.value === "" || fname.value.trim().length === 0 || !fname.value.match(/^[a-zA-Z]+$/)) {
            fnameError.classList.remove("hidden");
            fname.classList.add("border-2")
            fname.classList.add("border-[--red]")
            validatedFname = false
            return validatedFname
        }
        else {
            fnameError.classList.add("hidden");
            fname.classList.remove("border-2")
            fname.classList.remove("border-[--red]")
            validatedFname = true
            return validatedFname
        }
    }

    function validateLname() {
        if (lname.value === "" || lname.value.trim().length === 0 || !lname.value.match(/^[a-zA-Z]+$/)) {
            lnameError.classList.remove("hidden");
            lname.classList.add("border-2")
            lname.classList.add("border-[--red]")
            validatedLname = false
            return validatedLname
        } else {
            lnameError.classList.add("hidden");
            lname.classList.remove("border-2")
            lname.classList.remove("border-[--red]")
            validatedLname = true
            return validatedLname
        }
    }

    function validateEmail() {
        if (email.value.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)) {
            emailError.classList.add("hidden")
            email.classList.remove("border-2")
            email.classList.remove("border-[--red]")
            validatedEmail = true
            return validatedEmail
        } else {
            emailError.classList.remove("hidden")
            email.classList.add("border-2")
            email.classList.add("border-[--red]")
            validatedEmail = false
            return validatedEmail
        }
    }

    function validatePassword() {
        if (password.value === "" || password.value.trim().length === 0 || password.value.length < 8) {
            passwordError.classList.remove("hidden");
            password.classList.add("border-2")
            password.classList.add("border-[--red]")
            validatedPassword = false
            return validatedPassword
        } else {
            passwordError.classList.add("hidden");
            password.classList.remove("border-2")
            password.classList.remove("border-[--red]")
            validatedPassword = true
            return validatedPassword
        }
    }

    function validateSubmit() {
        if (validatedFname && validatedLname && validatedEmail && validatedPassword) {
            submitButton.disabled = false;
            submitButton.classList.remove("shadow-[--red-shadow]");
            submitButton.classList.add("shadow-[--green-shadow]");
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove("shadow-[--green-shadow]");
            submitButton.classList.add("shadow-[--red-shadow]");
        }
    }
})