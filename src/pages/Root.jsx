import React from "react";
import { redirect } from "react-router-dom";
export default function Root() {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}

export function redirectLoader() {
  const data = localStorage.getItem("persist:root");
  const stage = JSON.parse(JSON.parse(data).stage);
  const auth = JSON.parse(JSON.parse(data).isAuth);
  if (!auth.user && !auth.admin) {
    return redirect("/authorize");
  } else if (stage) {
    return redirect(stage);
  }
  return null;
}
