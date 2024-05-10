export function checkEmail(email) {
  const validEmail =
    email.includes("@") && email.includes("edu") && email.includes("iq");
  return validEmail;
}
