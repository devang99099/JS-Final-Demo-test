export function email() {
  const btnEmail = document.getElementById("EmailBtn");
  btnEmail.addEventListener("click", () => {
    const input = document.getElementById("mail").value;
    const massPara = document.getElementById("email-para");
    const regex = /^[a-z]+[0-9]+@+[a-z]+\.+[a-z]/;
    if (regex.test(input)) {
      massPara.textContent = "✅ Valid Email";
      massPara.style.color = "green";
    } else {
      massPara.textContent = "❌ Invalid Email!";
      massPara.style.color = "red";
    }
  });
}
