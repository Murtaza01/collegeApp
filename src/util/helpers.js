export function checkEmail(email) {
  const validEmail =
    email.includes("@") && email.includes("edu") && email.includes("iq");
  return validEmail;
}

const stateStorage = localStorage.getItem("persist:root");
export const authStorage = JSON.parse(stateStorage);
