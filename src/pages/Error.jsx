import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  if (error.name === "TypeError") {
    window.location.reload();
    return;
  }
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
