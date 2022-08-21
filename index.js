//Method 3

class SignUp {
  constructor(form, field) {
    this.form = form;
    this.field = field;
    this.validateForm();
  }

  validateForm() {
    console.log(this);
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fieldValue = this.form.elements[`${this.field}`].value;

      if (fieldValue === "") {

        this.setStatus("error", "Write down your email")
      } else if (!fieldValue.includes("@")) {
        this.setStatus("error", "Email must include @")
      } else if (fieldValue.length < 5) {
        this.setStatus("error", "Invalid email address")
      } else {
        this.setStatus("success", "Form sent successfully")
        this.form.reset();
        // this.form.submit();
      }
    });
  }

  setStatus(status, message) {
    const messageField = this.form.querySelector(".message");
    messageField.classList.remove("error", "success");
    messageField.classList.add(`${status}`);
    messageField.innerText = message;
  }
}

const signInForm = document.querySelector(".sign_in_form");
if (signInForm) {
  const field = "email";
  const validator = new SignUp(signInForm, field);
}
const signUpForm = document.querySelector(".sign_up_form");
if (signUpForm) {
  const field = "email";
  const validator = new SignUp(signUpForm, field);
}

//Method 2

// class SignUp {
//   constructor(form, field) {
//     this.form = form;
//     this.field = field;
//     this.validateForm();
//   }

//   validateForm() {
//     console.log(this);
//     this.form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const fieldValue = this.form.elements[`${this.field}`].value;
//       if (this.form.querySelector(".error")) {
//         this.form.querySelector(".error").remove();
//       }

//       const errorMessage = document.createElement("p");
//       errorMessage.classList.add("error");
//       this.form.appendChild(errorMessage);

//       if (fieldValue === "") {
//         errorMessage.innerText = "Write down your email";
//       } else if (!fieldValue.includes("@")) {
//         errorMessage.innerText = "Email must include @";
//       } else if (fieldValue.length < 5) {
//         errorMessage.innerText = "Invalid email address";
//       } else {
//         this.form.querySelector(".error").remove();
//         const successMessage = document.createElement("p");
//         successMessage.innerText = "Form sent successfully";
//         this.form.appendChild(successMessage);
//         successMessage.classList.add("success");
//         this.form.reset();
//         // this.form.submit();
//       }
//     });
//   }
// }

// const signInForm = document.querySelector(".sign_in_form");
// if (signInForm) {
//   const field = "email";
//   const validator = new SignUp(signInForm, field);
// }
// const signUpForm = document.querySelector(".sign_up_form");
// if (signUpForm) {
//   const field = "email";
//   const validator = new SignUp(signUpForm, field);
// }

//Method 1

// const signInForm = document.querySelector(".sign_in_form");

// function validateForm(e) {
//   e.preventDefault();
//   const email = this.elements["email"].value;

// if (this.querySelector(".error")) {
//     this.querySelector(".error").remove();
// }

//   const errorMessage = document.createElement("p");
//   errorMessage.classList.add("error");
//   this.appendChild(errorMessage);

//   if (email === "") {
//     errorMessage.innerText = "Write down your email";
//   } else if (!email.includes("@")) {
//     errorMessage.innerText = "Email must include @";
//   } else if (email.length < 5) {
//     errorMessage.innerText = "Invalid email address";
//   } else {
//     this.querySelector(".error").remove();
//     const successMessage = document.createElement("p");
//     successMessage.innerText = "Form sent successfully";
//     this.appendChild(successMessage);
//     successMessage.classList.add("success");
//   }
// }

// signInForm.addEventListener("submit", validateForm);
