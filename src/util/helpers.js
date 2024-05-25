export function checkEmail(email) {
  const correctUserInput =
    email.includes("@") && email.includes("edu") && email.includes("iq");
  const correctAdminInput = email.includes("سراب") || email.includes("مرتضى");

  const validEmail = correctUserInput || correctAdminInput;

  return validEmail;
}

const stateStorage = localStorage.getItem("persist:root");
export const authStorage = JSON.parse(stateStorage);
