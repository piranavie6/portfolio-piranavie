function toggleAdditionalInfo() {
    var infoDiv = document.getElementById("additional-info");
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }
  }
  
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  const errorMessages = document.getElementsByClassName('error');
  Array.from(errorMessages).forEach((errorMessage) => {
    errorMessage.textContent = '';
  });

  // Validate email
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    showError(emailInput, 'Please enter a valid email address.');
    return;
  }

  // Validate phone number
  const phoneInput = document.getElementById('phone');
  const phone = phoneInput.value.trim();
  if (!validatePhone(phone)) {
    showError(phoneInput, 'Please enter a valid phone number.');
    return;
  }

  // If all fields are valid, submit the form
  document.getElementById('contactForm').submit();
}

function validateEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  // Simple phone number validation regex
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function showError(inputElement, errorMessage) {
  const errorElement = document.createElement('span');
  errorElement.className = 'error';
  errorElement.textContent = errorMessage;
  inputElement.parentNode.appendChild(errorElement);
}
