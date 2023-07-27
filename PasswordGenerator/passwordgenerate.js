function generatePassword() {
  const lengthInput = document.getElementById("length");
  const passwordOutput = document.getElementById("password");

  const length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 6 || length > 32) {
    passwordOutput.innerText =
      "Please enter a valid password length (between 6 and 32 characters).";
    return;
  }

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  let allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
  }

  passwordOutput.innerText = "Generated Password: " + generatedPassword;
}
