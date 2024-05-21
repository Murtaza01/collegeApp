import { redirect } from "react-router-dom";
import { authStorage } from "../util/helpers";

export default function Root() {
  return;
}

export function redirectLoader() {
  let auth = {
    user: "",
    admin: "",
  };
  let setStage;

  if (authStorage) {
    auth = JSON.parse(authStorage.isAuth);
    setStage = JSON.parse(authStorage.setStage);
  }

  if (!auth.user && !auth.admin) {
    return redirect("/authorize");
  } else if (setStage) {
    return redirect(setStage);
  }
  return null;
}
