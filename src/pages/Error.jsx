import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
