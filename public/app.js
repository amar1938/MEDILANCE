const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
document.addEventListener('DOMContentLoaded', function() {
  const doctorRadio = document.getElementById('doctor');
  const patientRadio = document.getElementById('patient');
  const specialtyField = document.getElementById('Specialization');

  doctorRadio.addEventListener('change', function() {
    if (doctorRadio.checked) {
      specialtyField.style.display = 'block';
    }
  });

  patientRadio.addEventListener('change', function() {
    if (patientRadio.checked) {
      specialtyField.style.display = 'none';
      specialtyField.attr
    }
  });
});
