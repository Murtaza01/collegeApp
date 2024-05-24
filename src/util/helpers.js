export function checkEmail(email) {
  const input1 =
    email.includes("@") && email.includes("edu") && email.includes("iq");
  const input2 = email.includes("سراب") || email.includes("مرتضى");
  const validEmail = input1 || input2;

  return validEmail;
}

const stateStorage = localStorage.getItem("persist:root");
export const authStorage = JSON.parse(stateStorage);
