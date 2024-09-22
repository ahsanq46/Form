// // script.ts

// interface RegistrationForm {
//     firstName: string;
//     lastName: string;
//     email: string;
//     skill: string;
//     country: string;
//     birthDate: string;
//     password: string;
//     confirmPassword: string;
//     gender: string;
//   }
  
//   const form = document.getElementById('registration-form') as HTMLFormElement;
//   const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
//   const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
//   const emailInput = document.getElementById('email') as HTMLInputElement;
//   const skillInput = document.getElementById('skill') as HTMLInputElement;
//   const countrySelect = document.getElementById('country') as HTMLSelectElement;
//   const birthDateInput = document.getElementById('birthDate') as HTMLInputElement;
//   const passwordInput = document.getElementById('password') as HTMLInputElement;
//   const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;
//   const genderInputs = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
  
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData: RegistrationForm = {
//       firstName: firstNameInput.value,
//       lastName: lastNameInput.value,
//       email: emailInput.value,
//       skill: skillInput.value,
//       country: countrySelect.value,
//       birthDate: birthDateInput.value,
//       password: passwordInput.value,
//       confirmPassword: confirmPasswordInput.value,
//       gender: Array.from(genderInputs).find((input) => input.checked)?.value,
//     };
  
//     // Validate form data here
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
  
//     // Send form data to server here
//     console.log(formData);
//   });