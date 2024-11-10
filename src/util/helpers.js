import storage from "redux-persist/lib/storage";
import libgenSvg from "../assets/images/libgen.svg"

export function checkEmail(email) {
  const correctUserInput =
    email.includes("@") && email.includes("edu") && email.includes("iq");
  const correctAdminInput = email.includes("سراب") || email.includes("مرتضى");

  const validEmail = correctUserInput || correctAdminInput;

  return validEmail;
}


export async function getAuthStorage() {
  const presistStorage = await storage.getItem("persist:root")
  if (presistStorage) {
    const storageData = JSON.parse(presistStorage)
    const isAuth = JSON.parse(storageData.isAuth)
    const stage = JSON.parse(storageData.setStage)
    return { ...isAuth, stage }
  }
  return;
}
