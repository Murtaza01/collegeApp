import React from "react";
import { redirect } from "react-router-dom";
// import { auth, setStage } from "../util/getStorage";

export default function Root() {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}

export function redirectLoader() {
  const data = localStorage.getItem("persist:root");
  const parsedData = JSON.parse(data);
  let auth = {
    user: "",
    admin: "",
  };
  let setStage;
  if (parsedData) {
    auth = JSON.parse(parsedData.isAuth);
    setStage = JSON.parse(parsedData.setStage);
  }

  if (!auth.user && !auth.admin) {
    return redirect("/authorize");
  } else if (setStage) {
    return redirect(setStage);
  }
  return null;
}
